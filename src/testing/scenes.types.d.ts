import type { FunctionComponent } from 'react'

/**
 * Props every scene component receives so it can jump straight to one of its own cases when
 * opened via its `/<id>/<caseName>` route, instead of always starting at its first case.
 */
export interface VisualSceneProps {
  initialCaseName?: string
}

/**
 * A self-contained visual-test screen, selectable by `id` - either tapped in the example app's
 * scene nav (`scene-nav-<id>`), or opened directly via its `/<id>` (or `/<id>/<caseName>`) route -
 * so a Playwright/Detox test can drive it without App.tsx knowing anything about the component
 * under test.
 */
export interface VisualScene {
  id: string
  Scene: FunctionComponent<VisualSceneProps>
}
