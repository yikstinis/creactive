import { VIEW_PADDING_SCENE } from '@/components/atoms/view/view.padding.snapshot.test'
import type { VisualScene } from '@/testing/scenes.types'

/**
 * Every visual-test scene, opened directly by its `/<id>/<caseName>` route by a Playwright/Detox
 * test (or tapped into from the example app's scene nav, `scene-nav-<id>`, for manual browsing).
 * Add a new component's scene here to include it in visual regression runs.
 */
export const VISUAL_SCENES: VisualScene[] = [VIEW_PADDING_SCENE]
