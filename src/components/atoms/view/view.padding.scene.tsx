import { useState } from 'react'
import { Pressable, Text, View as NativeView } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { VIEW_PADDING_CASES, VIEW_PADDING_SCENE_ID } from '@/components/atoms/view/view.padding.cases'
import type { VisualScene } from '@/testing/scenes.types'

const CONTAINER_PADDING = 80
const SQUARE_COLORS = ['red', 'green', 'blue'] as const
const SQUARE_SIZE = 32

function ViewPaddingScene() {
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
