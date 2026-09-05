/**
 * The three steps a scene's visual-regression test drives it through: `initialize` selects the
 * scene, `enable` taps a case's nav entry, `match` screenshots it against the baseline. Called
 * directly by name in every test (`initialize(...)`, `enable(...)`, `match(...)`) - Detox's
 * `detox.setup.ts` and Playwright's `playwright.setup.ts` each hand them to the test/hook
 * callback as an object, in the shape of `SnapshotTest` below.
 */
export interface VisualDriver {
  initialize(sceneId: string): Promise<void>
  enable(navTestId: string, targetTestId: string): Promise<void>
  match(targetTestId: string, group: string, name: string): Promise<void>
}

/**
 * The shape a `*.snapshot.test.ts` file is written against, regardless of which runner ends up
 * executing it. `setup` is the one place the two runners genuinely differ in when it runs, not
 * just how it's spelled: Detox's `initialize` launches the real app (`device.launchApp()`), so
 * it's wired to run once per `describe` (Jest's `beforeAll`); Playwright's spins up a fresh page
 * per test, so it's wired to `beforeEach`. `snapshot.setup.ts` picks whichever implementation
 * matches the runner actually executing the file.
 */
export interface SnapshotTest {
  (name: string, fn: (fixtures: Pick<VisualDriver, 'initialize' | 'enable' | 'match'>) => Promise<void>): void
  describe(name: string, fn: () => void): void
  setup(fn: (fixtures: Pick<VisualDriver, 'initialize' | 'enable' | 'match'>) => Promise<void>): void
}
