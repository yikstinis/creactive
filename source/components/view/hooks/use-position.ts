import type { Position } from '@/helpers'
import { StyleSheet } from 'react-native'
import { ViewPosition } from '../constants'

// Position native style sheet.
const viewPositionStyleSheet = StyleSheet.create({
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
})
// Position native style map.
const VIEW_POSITION_STYLE = {
  [ViewPosition.RELATIVE]: viewPositionStyleSheet.positionRelative,
  [ViewPosition.ABSOLUTE]: viewPositionStyleSheet.positionAbsolute,
}
// Position native hook.
export const useViewPositionStyle = (position: ViewPosition) =>
  VIEW_POSITION_STYLE[position]

// Safe converting to size value.
export const useViewPositionValue = (position?: Position) => {
  if (position) return position.toValue()
}
