import { Text as ReactNativeText, StyleSheet } from 'react-native'
import type { TextComponent } from './text.types'

const styleSheet = StyleSheet.create({
  element: {
    color: 'red',
  },
})
export const Text: TextComponent = ({ children }) => {
  return (
    <ReactNativeText style={styleSheet.element}>{children}</ReactNativeText>
  )
}
