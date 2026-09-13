import { VIEW_PADDING_SCENE } from '@/components/atoms/view/view.padding.snapshot.test'
import type { VisualScene } from '@/testing/scenes.types'

/**
 * Every visual-test scene, tapped into from the example app's scene nav (`scene-nav-<id>`) by a
 * Playwright/Detox test before it drives that scene's own cases. Add a new component's scene here
 * to include it in visual regression runs.
 */
export const VISUAL_SCENES: VisualScene[] = [VIEW_PADDING_SCENE]
