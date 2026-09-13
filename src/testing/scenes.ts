import type { VisualScene } from '@root/snapshot.types'

import { VIEW_PADDING_SCENE } from '@/components/atoms/view/view.padding.snapshot.test'

/**
 * Every visual-test scene, opened directly by its `/<id>/<caseName>` route by a Playwright/Detox
 * test. Add a new component's scene here to include it in visual regression runs.
 */
export const VISUAL_SCENES: VisualScene[] = [VIEW_PADDING_SCENE]
