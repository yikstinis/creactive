import { expect, test } from '@playwright/test'

test.describe('atoms/View', () => {
  test('renders with padding', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('#root')).toHaveScreenshot('view-default.png')
  })
})
