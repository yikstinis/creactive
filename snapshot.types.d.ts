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
 * to the test/hook callback as an object, in the shape `SnapshotRunner` below expects.
 */
export interface VisualDriver {
  launch(): Promise<void>
  open(sceneId: string, targetTestId: string): Promise<void>
  match(targetTestId: string, group: string, name: string): Promise<void>
}

/**
 * The three runner-specific primitives `create` (below) composes into a whole test file's suite
 * (see `createSnapshotSuite` in `snapshot.helpers.tsx`) - `setup` is the one place the two runners
 * genuinely differ in when it runs, not just how it's spelled: Detox's `launch` starts the real
 * app (`device.launchApp()`), so it's wired to run once per `describe` (Jest's `beforeAll`);
 * Playwright's spins up a fresh page per test (nothing to start up front), so it's wired to
 * `beforeEach`. Each runner's own `test` object (`snapshot.detox.setup.ts`/
 * `snapshot.playwright.setup.ts`) satisfies this shape internally, on top of `SnapshotTest` below -
 * but a `*.snapshot.test.tsx` file never sees it: the global `test` it references is typed as the
 * narrower `SnapshotTest`, so `describe`/`setup`/call-as-test stay implementation details.
 */
export interface SnapshotRunner {
  (name: string, fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>): void
  describe(name: string, fn: () => void): void
  setup(fn: (fixtures: Pick<VisualDriver, 'launch' | 'open' | 'match'>) => Promise<void>): void
}

/**
 * The whole shape a `*.snapshot.test.tsx` file is written against, regardless of which runner ends
 * up executing it - just these two members, everything else (`SnapshotRunner`, above) is internal
 * to how `create` is implemented. `renderLayout` is identical everywhere (see
 * `snapshot.helpers.tsx`) - a layout-testing component (a small row of colored squares) a case
 * renders as neutral content, so its visual diff is driven purely by the layout prop under test.
 */
export interface SnapshotTest {
  /**
   * Registers a whole `*.snapshot.test.tsx` file's suite in one call: a `describe` titled `name`,
   * a `setup` that just launches, and one test per entry of `cases` that opens and matches
   * `component/<calling file's own directory name>/<calling file's own group>/<cases key,
   * unchanged>` - a case's export name (e.g. `X6S`) is never renamed along the way, so it reads the
   * same in the route, the testID and the snapshot filename. `name` is purely the `describe`
   * block's title (e.g. `'components/atoms/View'`) and never parsed - `component` and `group` are
   * instead read off the calling file itself: `component` is its own directory's kebab-case name,
   * and `group` is the segment between that and `.snapshot.test.tsx` in its own filename (e.g.
   * `view.margin.snapshot.test.tsx` -> group `'margin'`), found by inspecting the call stack (see
   * `createSnapshotSuite` in `snapshot.helpers.tsx`). So a file never has to declare its own
   * route/id by hand - the same rule is what `scripts/generate-scenes.js` applies from the file's
   * own path and case exports to compute the identical route at build time.
   */
  create(name: string, cases: Record<string, SnapshotCase>): void
  renderLayout(): ReactNode
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
 * `export const X6S: SnapshotCase = [...]`) and passed to `test.create` under that same name -
 * the export's own name, unchanged, becomes its route segment, which App.tsx also uses as-is for
 * the rendered case's `testID`. `render` should `require()` the component under test rather than
 * import it at module top level, so the file stays loadable by Playwright's Node test runner,
 * which can't parse react-native's own source (the same reason `renderLayoutProbe` in
 * `snapshot.helpers.tsx` requires `react-native` lazily too).
 */
export type SnapshotCase = readonly [name: string, render: () => ReactNode]

/**
 * A self-contained visual-test screen, selectable by `id` and opened directly via its own `/<id>`
 * route, so a Playwright/Detox test can drive it without App.tsx knowing anything about the
 * component under test. `id` here is always one case's full route
 * (`component/<component>/<group>/<case>`, see `SnapshotTest.create`) -
 * `scripts/generate-scenes.js` is what computes that route per file and expands its cases into one
 * `VisualScene` each.
 */
export interface VisualScene {
  id: string
  render: () => ReactNode
}
