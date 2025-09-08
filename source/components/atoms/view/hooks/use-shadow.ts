import { StyleSheet } from 'react-native'
import { ViewBoxShadow } from '../constants'

const VIEW_BOX_SHADOW_VALUE = {
  [ViewBoxShadow.SM]: [
    '0 1px 3px 0 rgba(0,0,0,0.1)',
    '0 1px 2px -1px rgba(0,0,0,0.1)',
  ].join(','),
  [ViewBoxShadow.MD]: [
    '0 4px 6px -1px rgba(0,0,0,0.1)',
    '0 2px 4px -2px rgba(0,0,0,0.1)',
  ].join(','),
  [ViewBoxShadow.LG]: [
    '0 10px 15px -3px rgba(0,0,0,0.1)',
    '0 4px 6px -4px rgba(0,0,0,0.1)',
  ].join(','),
}
export const useViewBoxShadowValue = (boxShadow?: ViewBoxShadow) =>
  VIEW_BOX_SHADOW_VALUE[boxShadow]

const viewBoxShadowStyleSheet = StyleSheet.create({
  boxShadowSM: {
    boxShadow: VIEW_BOX_SHADOW_VALUE[ViewBoxShadow.SM],
  },
  boxShadowMD: {
    boxShadow: VIEW_BOX_SHADOW_VALUE[ViewBoxShadow.MD],
  },
  boxShadowLG: {
    boxShadow: VIEW_BOX_SHADOW_VALUE[ViewBoxShadow.LG],
  },
})
const VIEW_BOX_SHADOW_STYLE = {
  [ViewBoxShadow.SM]: viewBoxShadowStyleSheet.boxShadowSM,
  [ViewBoxShadow.MD]: viewBoxShadowStyleSheet.boxShadowMD,
  [ViewBoxShadow.LG]: viewBoxShadowStyleSheet.boxShadowLG,
}
export const useViewBoxShadowStyle = (boxShadow?: ViewBoxShadow) =>
  VIEW_BOX_SHADOW_STYLE[boxShadow]
