import { Text as ReactNativeText } from 'react-native'
import type { TextComponent } from './types'

export const Text: TextComponent = ({ children }) => {
  return <ReactNativeText>{children}</ReactNativeText>
}
