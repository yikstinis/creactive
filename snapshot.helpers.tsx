import type { SnapshotTest } from '@root/snapshot.types'

/**
 * Neutral content for a layout-affecting case (padding, margin, ...) to render around, so its
 * visual diff is driven purely by the prop under test rather than by children every test file
 * would otherwise have to invent for itself. Returns the three squares bare (no wrapping
 * container of its own), so whichever `View` a case renders them into stays in control of their
 * arrangement via its own `style` (e.g. `flexDirection`). require()'d rather than imported at
 * module top level, so a `*.snapshot.test.tsx` file calling `test.renderLayoutProbe()` stays
 * loadable by Playwright's Node test runner, which can't parse react-native's own source.
 */
export function renderLayoutProbe(): ReturnType<SnapshotTest['renderLayoutProbe']> {
  const { StyleSheet, View } = require('react-native') as typeof import('react-native')
  const styles = StyleSheet.create({
    square: {
      width: 32,
      height: 32,
    },
  })

  return ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'].map((color) => (
    <View key={color} style={[styles.square, { backgroundColor: color }]} />
  ))
}

/**
 * Every `*.snapshot.test.tsx` file imports this module for its side effect before referencing the
 * bare global `test` (see snapshot.types.d.ts), so `test` is always assigned - never a
 * `typeof test !== 'undefined'` guard away from throwing - regardless of which of three contexts
 * loads the file: Playwright/Detox, where `snapshot.playwright.setup.ts`/`snapshot.detox.setup.ts`
 * already assigned the real implementation before any spec file loads, so the `??=` below is a
 * no-op; or the real app (Metro bundles this file via scenes.ts -> App.tsx, and neither setup
 * script ever runs there), where this no-op default is what ends up installed, making the
 * describe/setup/test calls in every scene file harmless rather than something that needs to be
 * skipped. `renderLayoutProbe` is the one member that isn't a no-op even here - a case's `render`
 * only ever actually runs inside the real, Metro-bundled app, so it needs the genuine renderer.
 */
const NOOP_TEST: SnapshotTest = Object.assign(() => {}, {
  describe: () => {},
  setup: () => {},
  renderLayoutProbe,
})

;(globalThis as unknown as { test?: SnapshotTest }).test ??= NOOP_TEST

/**
 * A case's full route (`<file id>/<case name>`) minus its leading `component` segment, joined
 * with `-` - the one place this derivation happens, so a scene's testID (assigned by App.tsx) and
 * a test's own expectation of it (`open`/`match`, in every `*.snapshot.test.tsx` file) can never
 * drift apart.
 */
export function deriveTestId(sceneId: string): string {
  return sceneId.split('/').slice(1).join('-')
}
