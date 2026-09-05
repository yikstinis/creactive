import { expect, test as base } from '@playwright/test'

import type { VisualDriver } from '@/testing/visual.types'

export const test = base.extend<{
  initialize: VisualDriver['initialize']
  enable: VisualDriver['enable']
  match: VisualDriver['match']
}>({
  initialize: async ({ page }, provide) => {
    await provide(async (sceneId) => {
      await page.goto('/')
      await page.getByTestId(`scene-nav-${sceneId}`).click()
    })
  },
  enable: async ({ page }, provide) => {
    await provide(async (navTestId, targetTestId) => {
      await page.getByTestId(navTestId).click()
      await page.getByTestId(targetTestId).waitFor({ state: 'visible' })
    })
  },
  match: async ({ page }, provide) => {
    await provide(async (targetTestId, group, name) => {
      await expect(page.getByTestId(targetTestId)).toHaveScreenshot([group, `${name}.png`])
    })
  },
})
