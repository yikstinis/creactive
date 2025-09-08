import type { Dimension } from '@/helpers'
import { StyleSheet } from 'react-native'
import { ViewPosition } from '../constants'

const viewPositionStyleSheet = StyleSheet.create({
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
})
const VIEW_POSITION_STYLE = {
  [ViewPosition.RELATIVE]: viewPositionStyleSheet.positionRelative,
  [ViewPosition.ABSOLUTE]: viewPositionStyleSheet.positionAbsolute,
}
export const useViewPositionStyle = (position?: ViewPosition) =>
  VIEW_POSITION_STYLE[position]

const VIEW_POSITION_VALUE = {
  [ViewPosition.RELATIVE]: 'relative' as const,
  [ViewPosition.ABSOLUTE]: 'absolute' as const,
}
export const useViewPositionValue = (position?: ViewPosition) =>
  VIEW_POSITION_VALUE[position]

export const useViewPositionDimensionValue = (dimension?: Dimension) =>
  dimension?.toValue()
