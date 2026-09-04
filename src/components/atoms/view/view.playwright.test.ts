import { expect, test } from '@playwright/test'

import { VIEW_PADDING_CASES } from '@/components/atoms/view/view.visual.cases'

test.describe('atoms/View', () => {
  for (const { name } of VIEW_PADDING_CASES) {
    test(`renders with ${name} padding`, async ({ page }) => {
      await page.goto('/')

      await expect(page.getByTestId(`view-padding-${name}`)).toHaveScreenshot(['padding', `${name}.png`])
    })
  }
})
