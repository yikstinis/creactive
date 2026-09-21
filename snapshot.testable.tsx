import type { SnapshotTest } from '@root/snapshot.types'
import type { View as NativeViewComponent } from 'react-native'

const PROBE_SQUARE_COLORS = ['red', 'green', 'blue'] as const
const PROBE_SQUARE_SIZE = 32

/**
 * Neutral content for a layout-affecting case (padding, margin, ...) to render around, so its
 * visual diff is driven purely by the prop under test rather than by children every test file
 * would otherwise have to invent for itself. require()'d rather than imported at module top
 * level, so a `*.snapshot.test.tsx` file calling `test.renderLayoutProbe()` stays loadable by
 * Playwright's Node test runner, which can't parse react-native's own source.
 */
export function renderLayoutProbe(): ReturnType<SnapshotTest['renderLayoutProbe']> {
  const { View: NativeView } = require('react-native') as { View: typeof NativeViewComponent }
  return (
    <NativeView style={{ flexDirection: 'row' }}>
      {PROBE_SQUARE_COLORS.map((color) => (
        <NativeView key={color} style={{ width: PROBE_SQUARE_SIZE, height: PROBE_SQUARE_SIZE, backgroundColor: color }} />
      ))}
    </NativeView>
  )
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
