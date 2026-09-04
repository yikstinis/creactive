import { StatusBar, Text } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { VIEW_PADDING_CASES } from '@/components/atoms/view/view.visual.cases'

// Shared visual-test host screen, rendered as-is on both web (via `expo export -p web`) and
// native (via Detox) so the same component tree is what gets screenshotted everywhere. Each case
// is screenshotted individually by its testID, so laying them out together here keeps the visual
// suites to a single app screen/launch instead of one per case.
export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 8, backgroundColor: '#ddd' }}>
      <StatusBar hidden />
      {VIEW_PADDING_CASES.map(({ spacing, name }) => (
        <View key={name} testID={`view-padding-${name}`} padding={spacing} style={{ backgroundColor: '#8ecae6' }}>
          <Text>{name}</Text>
        </View>
      ))}
    </View>
  )
}
