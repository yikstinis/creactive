import type { Decorator } from '@storybook/react'
import { StyleSheet, View } from 'react-native'

export const decorators: Decorator[] = [
  (Story) => (
    <View style={previewStyleSheet.mainWrapper}>
      <Story />
    </View>
  ),
]
const previewStyleSheet = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgb(250,250,255)',
  },
})
