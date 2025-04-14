import { StyleSheet } from 'react-native'
import { ViewBoxShadow } from '../constants'

// View box shadow mapped to CSS value.
const BOX_SHADOW_CSS_VALUE = {
  [ViewBoxShadow.SM]:
    '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
  [ViewBoxShadow.MD]:
    '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  [ViewBoxShadow.LG]:
    '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
}
export const useViewBoxShadowCSSValue = (boxShadow?: ViewBoxShadow) =>
  BOX_SHADOW_CSS_VALUE[boxShadow] ?? undefined

const viewBoxShadowStyleSheet = StyleSheet.create({
  boxShadowSM: {
    boxShadow: BOX_SHADOW_CSS_VALUE[ViewBoxShadow.SM],
  },
  boxShadowMD: {
    boxShadow: BOX_SHADOW_CSS_VALUE[ViewBoxShadow.MD],
  },
  boxShadowLG: {
    boxShadow: BOX_SHADOW_CSS_VALUE[ViewBoxShadow.LG],
  },
})
const BOX_SHADOW_STYLE = {
  [ViewBoxShadow.SM]: viewBoxShadowStyleSheet.boxShadowSM,
  [ViewBoxShadow.MD]: viewBoxShadowStyleSheet.boxShadowMD,
  [ViewBoxShadow.LG]: viewBoxShadowStyleSheet.boxShadowLG,
}
export const useViewBoxShadowStyle = (boxShadow?: ViewBoxShadow) =>
  BOX_SHADOW_STYLE[boxShadow] ?? undefined
