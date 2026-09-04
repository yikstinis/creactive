import { StatusBar, Text } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'

// Shared visual-test host screen for View, rendered as-is on both web (via `expo export -p web`)
// and native (via Detox) so the same component tree is what gets screenshotted everywhere.
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <StatusBar hidden />
      <View padding={Spacing.MD} style={{ backgroundColor: '#8ecae6' }}>
        <Text>Hello, View</Text>
      </View>
    </View>
  )
}
