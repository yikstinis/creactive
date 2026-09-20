import '@root/snapshot.testable'

import type { VisualSceneProps } from '@root/snapshot.types'
import { useState } from 'react'
import type { Pressable as PressableComponent, Text as TextComponent, View as NativeViewComponent } from 'react-native'

import type { View as ViewComponent } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'

/**
 * Route (`/component/view/margin`, or `/component/view/margin/<name>` for one case) identifying
 * this component's scene, opened directly by a Playwright/Detox test for each of its cases below.
 */
export const id = 'component/view/margin'

/**
 * Every Spacing scale member, named for use in testIDs and visual-test snapshot identifiers.
 * The scene and the Playwright/Detox visual tests all derive their cases from this list, so
 * covering a new Spacing member is a single line here.
 */
export const VIEW_MARGIN_CASES = [
  { spacing: Spacing.X6S, name: 'x6s' },
  { spacing: Spacing.X5S, name: 'x5s' },
  { spacing: Spacing.X4S, name: 'x4s' },
  { spacing: Spacing.X3S, name: 'x3s' },
  { spacing: Spacing.X2S, name: 'x2s' },
  { spacing: Spacing.XS, name: 'xs' },
  { spacing: Spacing.SM, name: 'sm' },
  { spacing: Spacing.MD, name: 'md' },
  { spacing: Spacing.LG, name: 'lg' },
  { spacing: Spacing.XL, name: 'xl' },
  { spacing: Spacing.X2L, name: 'x2l' },
  { spacing: Spacing.X3L, name: 'x3l' },
  { spacing: Spacing.X4L, name: 'x4l' },
  { spacing: Spacing.X5L, name: 'x5l' },
  { spacing: Spacing.X6L, name: 'x6l' },
] as const

const CONTAINER_PADDING = 80
const SQUARE_COLORS = ['red', 'green', 'blue'] as const
const SQUARE_SIZE = 32

export function Scene({ initialCaseName }: VisualSceneProps) {
  // require()'d rather than imported at module top level, so this file can still be loaded for
  // just VIEW_MARGIN_CASES/id by Playwright's Node test runner, which can't parse react-native's
  // own source.
  const { Pressable, Text, View: NativeView } = require('react-native') as {
    Pressable: typeof PressableComponent
    Text: typeof TextComponent
    View: typeof NativeViewComponent
  }
  const { View } = require('@/components/atoms/view/view') as { View: typeof ViewComponent }

  const [selectedName, setSelectedName] = useState<(typeof VIEW_MARGIN_CASES)[number]['name']>(
    VIEW_MARGIN_CASES.find(({ name }) => name === initialCaseName)?.name ?? VIEW_MARGIN_CASES[0].name,
  )
  const selectedCase = VIEW_MARGIN_CASES.find(({ name }) => name === selectedName)!

  return (
    <>
      <NativeView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {VIEW_MARGIN_CASES.map(({ name }) => (
          <Pressable key={name} testID={`view-margin-nav-${name}`} onPress={() => setSelectedName(name)}>
            <Text>{name}</Text>
          </Pressable>
        ))}
      </NativeView>
      <NativeView
        testID={`view-margin-${selectedCase.name}`}
        style={{ alignSelf: 'flex-start', backgroundColor: 'white', padding: CONTAINER_PADDING }}
      >
        <View margin={selectedCase.spacing} style={{ backgroundColor: 'black' }}>
          <NativeView style={{ flexDirection: 'row' }}>
            {SQUARE_COLORS.map((color) => (
              <NativeView key={color} style={{ width: SQUARE_SIZE, height: SQUARE_SIZE, backgroundColor: color }} />
            ))}
          </NativeView>
        </View>
      </NativeView>
    </>
  )
}

test.describe('atoms/View', () => {
  test.setup(async ({ launch }) => {
    await launch()
  })

  for (const { name } of VIEW_MARGIN_CASES) {
    test(`renders with ${name} margin`, async ({ open, match }) => {
      const testId = `view-margin-${name}`

      await open(id, name, testId)
      await match(testId, 'margin', name)
    })
  }
})
