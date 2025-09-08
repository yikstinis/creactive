import { StyleSheet } from 'react-native'
import { ViewOverflow } from '../constants'

const viewOverflowStyleSheet = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden',
  },
  overflowVisible: {
    overflow: 'visible',
  },
})
const VIEW_OVERFLOW_STYLE = {
  [ViewOverflow.HIDDEN]: viewOverflowStyleSheet.overflowHidden,
  [ViewOverflow.VISIBLE]: viewOverflowStyleSheet.overflowVisible,
}
export const useViewOverflowStyle = (overflow?: ViewOverflow) =>
  VIEW_OVERFLOW_STYLE[overflow]

const VIEW_OVERFLOW_VALUE = {
  [ViewOverflow.HIDDEN]: 'hidden' as const,
  [ViewOverflow.VISIBLE]: 'visible' as const,
}
export const useViewOverflowValue = (overflow?: ViewOverflow) =>
  VIEW_OVERFLOW_VALUE[overflow]
