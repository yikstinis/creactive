import { useState } from 'react'
import type { Pressable as PressableComponent, Text as TextComponent, View as NativeViewComponent } from 'react-native'

import type { View as ViewComponent } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'
import type { VisualScene } from '@/testing/scenes.types'
import type { SnapshotTest } from '@/testing/visual.types'

/**
 * `scene-nav-<id>` testID of this component's scene, tapped once by a Playwright/Detox test
 * before it drives the scene's own cases below.
 */
export const VIEW_PADDING_SCENE_ID = 'view-padding'

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

function ViewPaddingScene() {
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
    VIEW_PADDING_CASES[0].name,
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
// and web) and, as a `*.snapshot.test.tsx` file, required directly by Playwright/Detox's Node
// process. Only the latter has no `navigator` global - React Native sets `navigator.product`,
// and a real browser has its own - so this guard keeps the test registration below (and its
// `@root/snapshot.setup` import, which pulls in Playwright/Detox) from ever running inside the
// app itself.
if (typeof navigator === 'undefined') {
  const { test } = require('@root/snapshot.setup') as { test: SnapshotTest }

  test.describe('atoms/View', () => {
    test.setup(async ({ initialize }) => {
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
}
