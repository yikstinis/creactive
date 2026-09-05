import { ScrollView, StatusBar, View as NativeView } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { VIEW_PADDING_CASES, VIEW_VISUAL_CASES_SCROLL_VIEW_TEST_ID } from '@/components/atoms/view/view.visual.cases'

const CONTAINER_PADDING = 80
const SQUARE_COLORS = ['red', 'green', 'blue'] as const
const SQUARE_SIZE = 32

// Shared visual-test host screen, rendered as-is on both web (via `expo export -p web`) and
// native (via Detox) so the same component tree is what gets screenshotted everywhere. Each case
// is screenshotted individually by its testID, so laying them out together here keeps the visual
// suites to a single app screen/launch instead of one per case.
export default function App() {
  return (
    <ScrollView testID={VIEW_VISUAL_CASES_SCROLL_VIEW_TEST_ID} contentContainerStyle={{ alignItems: 'flex-start', gap: 8 }}>
      <StatusBar hidden />
      {VIEW_PADDING_CASES.map(({ spacing, name }) => (
        <NativeView
          key={name}
          testID={`view-padding-${name}`}
          style={{ backgroundColor: 'white', padding: CONTAINER_PADDING }}
        >
          <View padding={spacing} style={{ backgroundColor: 'black' }}>
            <NativeView style={{ flexDirection: 'row' }}>
              {SQUARE_COLORS.map((color) => (
                <NativeView key={color} style={{ width: SQUARE_SIZE, height: SQUARE_SIZE, backgroundColor: color }} />
              ))}
            </NativeView>
          </View>
        </NativeView>
      ))}
    </ScrollView>
  )
}
