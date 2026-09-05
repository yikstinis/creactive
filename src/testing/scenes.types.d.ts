import type { FunctionComponent } from 'react'

/**
 * A self-contained visual-test screen, selectable in the example app's scene nav by `id`
 * (`scene-nav-<id>`) so a Playwright/Detox test can drive it without App.tsx knowing anything
 * about the component under test.
 */
export interface VisualScene {
  id: string
  Scene: FunctionComponent
}
