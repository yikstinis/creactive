import { test } from '@root/detox.setup'

import { VIEW_PADDING_CASES, VIEW_PADDING_SCENE_ID } from '@/components/atoms/view/view.padding.cases'

test.describe('atoms/View', () => {
  test.beforeAll(async ({ initialize }) => {
    await initialize(VIEW_PADDING_SCENE_ID)
  })

  for (const { name } of VIEW_PADDING_CASES) {
    test(`renders with ${name} padding`, async ({ enable, match }) => {
      const testId = `view-padding-${name}`

      await enable(`view-padding-nav-${name}`, testId)
      await match(testId, 'padding', name)
    })
  }
})
