/**
 * testID of the example app's full-screen root, spanning the whole screen regardless of which
 * scene is selected. The Detox visual tests measure it via getAttributes() to derive the screen's
 * point-to-pixel scale (`device.takeScreenshot()` returns raw pixels, but element frames come
 * back in points on iOS), needed to crop a case's device-wide screenshot down to just its own
 * element.
 *
 * Colocated separately from scenes.ts (rather than defined there) so detox.setup.ts can import it
 * without transitively loading every registered component's *.snapshot.test.tsx file. ES imports
 * are hoisted and evaluated before any of the importing module's own top-level code, so importing
 * it from scenes.ts (which also imports every component's scene) would run their guarded
 * `test.describe(...)` calls before detox.setup.ts's own bottom-of-file `globalThis.test`
 * assignment - at that point the bare `test` identifier falls back to Jest's own native global
 * `test`, which has no `.describe`.
 */
export const VISUAL_SCENE_ROOT_TEST_ID = 'visual-scene-root'
