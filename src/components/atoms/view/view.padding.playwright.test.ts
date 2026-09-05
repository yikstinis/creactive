import { expect, test } from '@playwright/test'

import { VIEW_PADDING_CASES, VIEW_PADDING_SCENE_ID } from '@/components/atoms/view/view.padding.cases'

test.describe('atoms/View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.getByTestId(`scene-nav-${VIEW_PADDING_SCENE_ID}`).click()
  })

  for (const { name } of VIEW_PADDING_CASES) {
    test(`renders with ${name} padding`, async ({ page }) => {
      await page.getByTestId(`view-padding-nav-${name}`).click()

      await expect(page.getByTestId(`view-padding-${name}`)).toHaveScreenshot(['padding', `${name}.png`])
    })
  }
})
