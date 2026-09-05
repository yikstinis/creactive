import { VIEW_PADDING_SCENE } from '@/components/atoms/view/view.padding.scene'
import type { VisualScene } from '@/testing/scenes.types'

/**
 * testID of the example app's full-screen root, spanning the whole screen regardless of which
 * scene is selected. The Detox visual tests measure it via getAttributes() to derive the screen's
 * point-to-pixel scale (`device.takeScreenshot()` returns raw pixels, but element frames come
 * back in points on iOS), needed to crop a case's device-wide screenshot down to just its own
 * element.
 */
export const VISUAL_SCENE_ROOT_TEST_ID = 'visual-scene-root'

/**
 * Every visual-test scene, tapped into from the example app's scene nav (`scene-nav-<id>`) by a
 * Playwright/Detox test before it drives that scene's own cases. Add a new component's scene here
 * to include it in visual regression runs.
 */
export const VISUAL_SCENES: VisualScene[] = [VIEW_PADDING_SCENE]
