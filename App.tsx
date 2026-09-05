import { useState } from 'react'
import { Pressable, StatusBar, Text, View as NativeView } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { VIEW_PADDING_CASES, VIEW_VISUAL_CASES_ROOT_TEST_ID } from '@/components/atoms/view/view.visual.cases'

const CONTAINER_PADDING = 80
const SQUARE_COLORS = ['red', 'green', 'blue'] as const
const SQUARE_SIZE = 32

// Shared visual-test host screen, rendered as-is on both web (via `expo export -p web`) and
// native (via Detox) so the same component tree is what gets screenshotted everywhere. Only the
// selected case is on screen at a time - tapping a case's nav testID switches to it - so a case's
// screenshot never depends on scrolling, which is unreliable to automate on Android emulators.
export default function App() {
  const [selectedName, setSelectedName] = useState<(typeof VIEW_PADDING_CASES)[number]['name']>(
    VIEW_PADDING_CASES[0].name,
  )
  const selectedCase = VIEW_PADDING_CASES.find(({ name }) => name === selectedName)!

  return (
    <NativeView testID={VIEW_VISUAL_CASES_ROOT_TEST_ID} style={{ flex: 1, alignItems: 'flex-start' }}>
      <StatusBar hidden />
      <NativeView style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4 }}>
        {VIEW_PADDING_CASES.map(({ name }) => (
          <Pressable key={name} testID={`view-padding-nav-${name}`} onPress={() => setSelectedName(name)}>
            <Text>{name}</Text>
          </Pressable>
        ))}
      </NativeView>
      <NativeView
        testID={`view-padding-${selectedCase.name}`}
        style={{ backgroundColor: 'white', padding: CONTAINER_PADDING }}
      >
        <View padding={selectedCase.spacing} style={{ backgroundColor: 'black' }}>
          <NativeView style={{ flexDirection: 'row' }}>
            {SQUARE_COLORS.map((color) => (
              <NativeView key={color} style={{ width: SQUARE_SIZE, height: SQUARE_SIZE, backgroundColor: color }} />
            ))}
          </NativeView>
        </View>
      </NativeView>
    </NativeView>
  )
}
