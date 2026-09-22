import type { beforeAll as jestBeforeAll, describe as jestDescribe, it as jestIt } from '@jest/globals'
import type { ReactNode } from 'react'

declare global {
  const describe: typeof jestDescribe
  const it: typeof jestIt
  const beforeAll: typeof jestBeforeAll
}

/**
 * The steps a scene's visual-regression test drives it through: `launch` starts the app once,
 * `open` navigates straight to one case's own `/<sceneId>` route, `match` screenshots it against
 * the baseline. Called directly by name in every test (`launch()`, `open(...)`, `match(...)`) -
 * Detox's `snapshot.detox.setup.ts` and Playwright's `snapshot.playwright.setup.ts` each hand them
 * to the test/hook callback as an object, in the shape of `SnapshotTest` below.
 */
export interface VisualDriver {
  launch(): Promise<void>
  open(sceneId: string, targetTestId: string): Promise<void>
  match(targetTestId: string, group: string, name: string): Promise<void>
}

/**
 * The shape a `*.snapshot.test.tsx` file is written against, regardless of which runner ends up
 * executing it. `setup` is the one place the two runners genuinely differ in when it runs, not
 * just how it's spelled: Detox's `launch` starts the real app (`device.launchApp()`), so it's
 * wired to run once per `describe` (Jest's `beforeAll`); Playwright's spins up a fresh page per
 * test (nothing to start up front), so it's wired to `beforeEach`. `renderLayoutProbe` is
 * identical everywhere (see `snapshot.helpers.tsx`) - a layout-testing component (a small row of
 * colored squares) a case renders as neutral content, so its visual diff is driven purely by the
 * layout prop under test.
 */
export interface SnapshotTest {
  (name: string, fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>): void
  describe(name: string, fn: () => void): void
  setup(fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>): void
  renderLayoutProbe(): ReactNode
}

/**
 * `snapshot.detox.setup.ts` and `snapshot.playwright.setup.ts` each assign their own implementation
 * to this global before any `*.snapshot.test.tsx` file loads - Jest injects `setupFilesAfterEnv`
 * scripts into the same realm as the test file, and `snapshot.playwright.config.ts`'s top-level
 * side-effect import of `@root/snapshot.playwright.setup` runs before Playwright requires any spec
 * file in that worker. A component's scene/test file references this as a bare identifier (never
 * imported) and, since it always imports `@root/snapshot.helpers` for its own side effect first,
 * always finds it already assigned - to a no-op implementation when the same file loads inside the
 * real app instead, which Metro bundles and where neither setup script ever runs.
 */
declare global {
  const test: SnapshotTest
}

/**
 * A single case of a `*.snapshot.test.tsx` file's component: `name` is its test description, and
 * `render` produces the JSX to mount for it. Exported directly by name from the test file (e.g.
 * `export const X6S: SnapshotCase = [...]`) - the export's own name, lowercased, becomes both its
 * route segment (appended to the file's `id`) and, via `deriveTestId`, its testID.
 */
export type SnapshotCase = readonly [name: string, render: () => ReactNode]

/**
 * A self-contained visual-test screen, selectable by `id` and opened directly via its own `/<id>`
 * route, so a Playwright/Detox test can drive it without App.tsx knowing anything about the
 * component under test. `id` here is always one case's full route (a `*.snapshot.test.tsx` file's
 * own `id` export, joined with one of its `SnapshotCase` export names) - `scripts/generate-scenes.js`
 * is what expands one file's `id` and cases into one `VisualScene` per case.
 */
export interface VisualScene {
  id: string
  render: () => ReactNode
}
