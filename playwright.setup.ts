import { expect, test as base } from '@playwright/test'

import type { SnapshotTest, VisualDriver } from '@/testing/visual.types'

const extended = base.extend<{
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

// `setup` runs once per test (Playwright's `beforeEach`) - a fresh page per test is cheap, unlike
// Detox's `detox.setup.ts`'s `test.setup`, which relaunches the whole app so it only runs once per
// `describe` instead.
export const test: SnapshotTest = Object.assign(extended, {
  setup: (fn: (fixtures: Pick<VisualDriver, 'initialize' | 'enable' | 'match'>) => Promise<void>) => {
    extended.beforeEach(async ({ initialize, enable, match }) => {
      await fn({ initialize, enable, match })
    })
  },
})
