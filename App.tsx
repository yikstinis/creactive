import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { VisualTestHost } from '@/testing/host'
import { VISUAL_SCENE_ROOT_TEST_ID } from '@/testing/scenes'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView testID={VISUAL_SCENE_ROOT_TEST_ID} style={styleSheet.mainWrapper}>
        <StatusBar hidden />
        <VisualTestHost />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styleSheet = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
})