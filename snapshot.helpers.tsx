import type { SnapshotCase, SnapshotRunner, SnapshotTest } from '@root/snapshot.types'

/**
 * Neutral content for a layout-affecting case (padding, margin, ...) to render around, so its
 * visual diff is driven purely by the prop under test rather than by children every test file
 * would otherwise have to invent for itself. Returns the three squares bare (no wrapping
 * container of its own), so whichever `View` a case renders them into stays in control of their
 * arrangement via its own `style` (e.g. `flexDirection`). require()'d rather than imported at
 * module top level, so a `*.snapshot.test.tsx` file calling `test.renderLayout()` stays loadable
 * by Playwright's Node test runner, which can't parse react-native's own source.
 */
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

/**
 * Finds the `*.snapshot.test.tsx` file that (transitively) called `createSnapshotSuite`, by
 * searching the call stack for the first frame whose filename matches that pattern - not just the
 * immediate caller, since `this.describe`'s own implementation (Playwright's/Jest's) sits between
 * it and the test file, running its callback synchronously during test collection. V8 keeps a
 * transformed file's original path (`.tsx`, not a compiled/in-memory one) as its stack frame
 * filename under both Jest (babel-jest) and Playwright (esbuild), so this resolves the same path on
 * disk regardless of which runner is executing. Only ever called from inside the `describe`
 * callback below (never eagerly at the top of `createSnapshotSuite`) - the no-op `test` this file's
 * own `NOOP_TEST` installs for the real, Metro-bundled app never invokes that callback, so this
 * V8-specific stack-trace API, meaningless in a browser bundle's own stack frames, never runs there.
 */
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

/**
 * Shared `SnapshotTest.create` implementation, identical across all three `test` objects
 * (Playwright's, Detox's, and this file's own no-op default below) since it's written only in
 * terms of `this`'s own `describe`/`setup`/call-as-test/`open`/`match` primitives (`SnapshotRunner`,
 * see snapshot.types.d.ts) - the one place the three runners actually differ. Builds each case's
 * route as `component/<calling file's directory name>/<calling file's group>/<cases key,
 * unchanged>`: `component` is the calling file's own directory, already kebab-cased on disk (e.g.
 * `view`), and `group` is the segment between that and `.snapshot.test.tsx` in the calling file's
 * own name (e.g. `view.margin.snapshot.test.tsx` -> `'margin'`) - the same rule
 * `scripts/generate-scenes.js` applies to the file's own path and case exports at build time, so no
 * test file has to declare its own route/id by hand, and a case's export name (`X6S`) is spelled
 * the same way everywhere it shows up - route, testID, snapshot filename. All of this (including
 * `resolveCallingTestFile`) stays inside the `describe` callback rather than running eagerly, so the
 * real app's no-op `describe` (which never calls its callback) never pays for or breaks on it. Split
 * on `/`/`\` by hand rather than via Node's `path` module - unlike `resolveCallingTestFile`'s own
 * call, an *import* of `path` is static, so Metro would try to resolve and bundle it into the real
 * app regardless of whether this callback ever runs, and native Metro bundles (unlike the web one)
 * have no polyfill for it.
 */
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

/**
 * Every `*.snapshot.test.tsx` file imports this module for its side effect before referencing the
 * bare global `test` (see snapshot.types.d.ts), so `test` is always assigned - never a
 * `typeof test !== 'undefined'` guard away from throwing - regardless of which of three contexts
 * loads the file: Playwright/Detox, where `snapshot.playwright.setup.ts`/`snapshot.detox.setup.ts`
 * already assigned the real implementation before any spec file loads, so the `??=` below is a
 * no-op; or the real app (Metro bundles this file via scenes.ts -> App.tsx, and neither setup
 * script ever runs there), where this no-op default is what ends up installed, making the
 * describe/setup/create/test calls in every scene file harmless rather than something that
 * needs to be skipped. `renderLayout` is the one member that isn't a no-op even here - a case's
 * `render` only ever actually runs inside the real, Metro-bundled app, so it needs the genuine
 * renderer. Typed as `SnapshotRunner & SnapshotTest` (needing the former's `describe`/`setup`/
 * call-as-test for `SnapshotTest.create`'s own implementation to call via `this`), but the global
 * `test` it's assigned to below is only ever readable through the narrower `SnapshotTest`.
 */
const NOOP_TEST: SnapshotRunner & SnapshotTest = Object.assign(() => {}, {
  describe: () => {},
  setup: () => {},
  create: createSnapshotSuite,
  renderLayout: renderLayoutProbe,
})

;(globalThis as unknown as { test?: SnapshotTest }).test ??= NOOP_TEST
