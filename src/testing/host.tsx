import { useState } from 'react'
import { Pressable, Text, View as NativeView } from 'react-native'

import { VISUAL_SCENES } from '@/testing/scenes'

/**
 * The example app's only screen: a nav row of every registered visual-test scene (tapped by
 * `scene-nav-<id>`) plus the currently selected one's own render. Generic over every component
 * under visual test - adding a component's scene to VISUAL_SCENES is the only change needed here.
 */
export function VisualTestHost() {
  const [selectedId, setSelectedId] = useState(VISUAL_SCENES[0].id)
  const selectedScene = VISUAL_SCENES.find(({ id }) => id === selectedId)!
  const SelectedScene = selectedScene.Scene

  return (
    <NativeView style={{ alignItems: 'flex-start' }}>
      <NativeView style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {VISUAL_SCENES.map(({ id }) => (
          <Pressable key={id} testID={`scene-nav-${id}`} onPress={() => setSelectedId(id)}>
            <Text>{id}</Text>
          </Pressable>
        ))}
      </NativeView>
      <SelectedScene />
    </NativeView>
  )
}
