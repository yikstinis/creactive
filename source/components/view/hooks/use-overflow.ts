import { StyleSheet } from 'react-native'
import { ViewOverflow } from '../constants'

// Overflow style sheet.
const viewOverflowStyleSheet = StyleSheet.create({
  overflowVisible: {
    overflow: 'visible',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
})
// Ovefloww native style map.
const ViewOverflowStyle = {
  [ViewOverflow.VISIBLE]: viewOverflowStyleSheet.overflowVisible,
  [ViewOverflow.HIDDEN]: viewOverflowStyleSheet.overflowHidden,
}
// Overflow native hook.
export const useViewOverflowStyle = (overflow: ViewOverflow) =>
  ViewOverflowStyle[overflow]
