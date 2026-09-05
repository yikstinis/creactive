/**
 * The three steps a scene's visual-regression test drives it through: `initialize` selects the
 * scene, `enable` taps a case's nav entry, `match` screenshots it against the baseline. Called
 * directly by name in every test (`initialize(...)`, `enable(...)`, `match(...)`) - Detox's
 * `detox.setup.ts` exposes them as ambient globals, Playwright's `playwright.setup.ts` as
 * same-named fixtures on its extended `test`.
 */
export interface VisualDriver {
  initialize(sceneId: string): Promise<void>
  enable(navTestId: string, targetTestId: string): Promise<void>
  match(targetTestId: string, group: string, name: string): Promise<void>
}
