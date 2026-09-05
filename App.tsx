import { StatusBar, View as NativeView } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { VisualTestHost } from '@/testing/host'
import { VISUAL_SCENE_ROOT_TEST_ID } from '@/testing/scenes'

function AppContent() {
  const insets = useSafeAreaInsets()

  return (
    <NativeView
      testID={VISUAL_SCENE_ROOT_TEST_ID}
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <StatusBar hidden />
      <VisualTestHost />
    </NativeView>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  )
}
