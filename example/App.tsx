import { Text } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'

/**
 * Native visual-test host screen for View, mirroring its Default story's render output.
 * Not routed through Storybook — Storybook's on-device UI (BottomSheet, gesture handling,
 * persisted selection) added a whole class of native crashes unrelated to the component
 * under test, so this renders View directly instead.
 */
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <View padding={Spacing.MD} style={{ backgroundColor: '#8ecae6' }}>
        <Text>Hello, View</Text>
      </View>
    </View>
  )
}
