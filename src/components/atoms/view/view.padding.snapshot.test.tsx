import type { VisualScene, VisualSceneProps } from '@root/snapshot.types'
import { useState } from 'react'
import type { Pressable as PressableComponent, Text as TextComponent, View as NativeViewComponent } from 'react-native'

import type { View as ViewComponent } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'

/**
 * Route (`/component/view/padding`, or `/component/view/padding/<name>` for one case) identifying
 * this component's scene, opened directly by a Playwright/Detox test for each of its cases below.
 */
export const VIEW_PADDING_SCENE_ID = 'component/view/padding'

/**
 * Every Spacing scale member, named for use in testIDs and visual-test snapshot identifiers.
 * The scene and the Playwright/Detox visual tests all derive their cases from this list, so
 * covering a new Spacing member is a single line here.
 */
export const VIEW_PADDING_CASES = [
  { spacing: Spacing.X6S, name: 'x6s' },
  { spacing: Spacing.X5S, name: 'x5s' },
  { spacing: Spacing.MD, name: 'md' },
  { spacing: Spacing.LG, name: 'lg' },
  { spacing: Spacing.X5L, name: 'x5l' },
  { spacing: Spacing.X6L, name: 'x6l' },
] as const

const CONTAINER_PADDING = 80
const SQUARE_COLORS = ['red', 'green', 'blue'] as const
const SQUARE_SIZE = 32

function ViewPaddingScene({ initialCaseName }: VisualSceneProps) {
  // require()'d rather than imported at module top level, so this file can still be loaded for
  // just VIEW_PADDING_CASES/SCENE_ID by Playwright's Node test runner, which can't parse
  // react-native's own source.
  const { Pressable, Text, View: NativeView } = require('react-native') as {
    Pressable: typeof PressableComponent
    Text: typeof TextComponent
    View: typeof NativeViewComponent
  }
  const { View } = require('@/components/atoms/view/view') as { View: typeof ViewComponent }

  const [selectedName, setSelectedName] = useState<(typeof VIEW_PADDING_CASES)[number]['name']>(
    VIEW_PADDING_CASES.find(({ name }) => name === initialCaseName)?.name ?? VIEW_PADDING_CASES[0].name,
  )
  const selectedCase = VIEW_PADDING_CASES.find(({ name }) => name === selectedName)!

  return (
    <>
      <NativeView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {VIEW_PADDING_CASES.map(({ name }) => (
          <Pressable key={name} testID={`view-padding-nav-${name}`} onPress={() => setSelectedName(name)}>
            <Text>{name}</Text>
          </Pressable>
        ))}
      </NativeView>
      <NativeView
        testID={`view-padding-${selectedCase.name}`}
        style={{ alignSelf: 'flex-start', backgroundColor: 'white', padding: CONTAINER_PADDING }}
      >
        <View padding={selectedCase.spacing} style={{ backgroundColor: 'black' }}>
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

export const VIEW_PADDING_SCENE: VisualScene = {
  id: VIEW_PADDING_SCENE_ID,
  Scene: ViewPaddingScene,
}

// This file is imported both by the real app (scenes.ts -> App.tsx, bundled by Metro for native
// and web) and, as a `*.snapshot.test.tsx` file, required directly by Playwright/Detox. `test` is
// a bare global (see snapshot.types.d.ts) assigned only by
// snapshot.playwright.config.ts/snapshot.detox.setup.ts,
// before either runner requires this file - it's undefined in the real app, where neither setup
// script ever runs. Crucially, referencing a global identifier isn't a require()/import, so Metro
// has nothing to resolve here - unlike an earlier attempt that guarded an actual
// `require('@root/snapshot.setup')` call, which Metro bundled regardless of the runtime guard.
if (typeof test !== 'undefined') {
  test.describe('atoms/View', () => {
    test.setup(async ({ launch }) => {
      await launch()
    })

    for (const { name } of VIEW_PADDING_CASES) {
      test(`renders with ${name} padding`, async ({ open, match }) => {
        const testId = `view-padding-${name}`

        await open(VIEW_PADDING_SCENE_ID, name, testId)
        await match(testId, 'padding', name)
      })
    }
  })
}
