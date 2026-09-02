import { expect, test } from '@playwright/test'

test.describe('atoms/View', () => {
  test('default', async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-view--default&viewMode=story')

    await expect(page.locator('#storybook-root')).toHaveScreenshot('default.png')
  })
})
