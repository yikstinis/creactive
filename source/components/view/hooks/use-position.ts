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
const ViewPositionStyle = {
  [ViewPosition.RELATIVE]: viewPositionStyleSheet.positionRelative,
  [ViewPosition.ABSOLUTE]: viewPositionStyleSheet.positionAbsolute,
}
// Position native hook.
export const useViewPositionStyle = (position: ViewPosition) =>
  ViewPositionStyle[position]

// Safe converting to size value.
export const useViewPositionValue = (position?: Position) => {
  if (position) return position.toValue()
}
