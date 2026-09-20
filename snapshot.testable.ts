import type { SnapshotTest } from '@root/snapshot.types'

/**
 * Every `*.snapshot.test.tsx` file imports this module for its side effect before referencing the
 * bare global `test` (see snapshot.types.d.ts), so `test` is always assigned - never a
 * `typeof test !== 'undefined'` guard away from throwing - regardless of which of three contexts
 * loads the file: Playwright/Detox, where `snapshot.playwright.setup.ts`/`snapshot.detox.setup.ts`
 * already assigned the real implementation before any spec file loads, so the `??=` below is a
 * no-op; or the real app (Metro bundles this file via scenes.ts -> App.tsx, and neither setup
 * script ever runs there), where this no-op default is what ends up installed, making the
 * describe/setup/test calls in every scene file harmless rather than something that needs to be
 * skipped.
 */
const NOOP_TEST: SnapshotTest = Object.assign(() => {}, {
  describe: () => {},
  setup: () => {},
})

;(globalThis as unknown as { test?: SnapshotTest }).test ??= NOOP_TEST
