import { beforeAll, describe, it } from '@jest/globals'

import { VIEW_PADDING_CASES, VIEW_PADDING_SCENE_ID } from '@/components/atoms/view/view.padding.cases'

describe('atoms/View', () => {
  beforeAll(async () => {
    await initialize(VIEW_PADDING_SCENE_ID)
  })

  it.each(VIEW_PADDING_CASES)('renders with $name padding', async ({ name }) => {
    const testId = `view-padding-${name}`

    await enable(`view-padding-nav-${name}`, testId)
    await match(testId, 'padding', name)
  })
})
