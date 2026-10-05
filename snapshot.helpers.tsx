import type { SnapshotCase, SnapshotRunner, SnapshotTest } from '@root/snapshot.types'

// Requires react-native lazily so `*.snapshot.test.tsx` files calling `test.renderLayout()` stay loadable by Playwright's Node runner, which can't parse react-native's source.
export function renderLayoutProbe(): ReturnType<SnapshotTest['renderLayout']> {
  const { StyleSheet, View } = require('react-native') as typeof import('react-native')
  const styles = StyleSheet.create({
    layoutElement: {
      width: 32,
      height: 32,
    },
  })

  return ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'].map((color) => (
    <View key={color} style={[styles.layoutElement, { backgroundColor: color }]} />
  ))
}

// Searches the whole stack, not just the immediate caller, because the runner's `describe` implementation sits between this and the test file.
// V8 reports the original `.tsx` path as the frame filename under both babel-jest and esbuild, so both runners resolve the same file.
// Only called inside the `describe` callback, which the real app's no-op `test` never invokes, so this V8-only API never runs in the app bundle.
function resolveCallingTestFile(): string {
  const originalPrepareStackTrace = Error.prepareStackTrace
  Error.prepareStackTrace = (_error, stack) => stack
  const stack = new Error().stack as unknown as NodeJS.CallSite[]
  Error.prepareStackTrace = originalPrepareStackTrace

  const callerFrame = stack.find((frame) => /\.snapshot\.test\.tsx?$/.test(frame.getFileName() ?? ''))
  const file = callerFrame?.getFileName()
  if (!file) throw new Error('createSnapshotSuite: could not resolve the calling *.snapshot.test.tsx file from the call stack')

  return file
}

// Derives the route from the calling file's path, the same way `scripts/generate-scenes.js` does at build time.
// Everything runs inside the `describe` callback, so the real app's no-op `describe` never executes it.
// Splits on `/` and `\` by hand, because a static import of `path` would make Metro bundle it and native bundles have no polyfill for it.
export function createSnapshotSuite(this: SnapshotRunner, name: string, cases: Record<string, SnapshotCase>): void {
  this.describe(name, () => {
    const callingFile = resolveCallingTestFile()
    const pathSegments = callingFile.split(/[/\\]/)
    const fileName = pathSegments[pathSegments.length - 1]
    const component = pathSegments[pathSegments.length - 2]
    const groupMatch = /^(.+)\.snapshot\.test\.tsx?$/.exec(fileName)
    if (!groupMatch) throw new Error(`createSnapshotSuite: ${callingFile} isn't a *.snapshot.test.tsx file`)

    const group = groupMatch[1].split('.').pop() as string
    const id = `component/${component}/${group}`

    this.setup(async ({ launch }) => {
      await launch()
    })

    for (const [key, [caseName]] of Object.entries(cases)) {
      this(caseName, async ({ open, match }) => {
        const sceneId = `${id}/${key}`

        await open(sceneId, sceneId)
        await match(sceneId, group, key)
      })
    }
  })
}

// Fallback for the real app, where no setup script runs, so the `test` calls in scene files are harmless there.
// Under Playwright/Detox the setup scripts assign `test` first, so `??=` keeps their implementation.
// `renderLayout` stays real because case `render` functions only ever run inside the app.
const NOOP_TEST: SnapshotRunner & SnapshotTest = Object.assign(() => {}, {
  describe: () => {},
  setup: () => {},
  create: createSnapshotSuite,
  renderLayout: renderLayoutProbe,
})

;(globalThis as unknown as { test?: SnapshotTest }).test ??= NOOP_TEST
