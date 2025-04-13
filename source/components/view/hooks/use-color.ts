import { useThemeContext } from '@/contexts'
import { useThemeStyleSheet } from '@/hooks'
import type { Color } from '@/types'
import { StyleSheet } from 'react-native'
import {
  ViewBackgroundColor,
  ViewBackgroundColorStyleSheetKey,
  ViewBackgroundColorThemeTokenKey,
  ViewBorderColor,
  ViewBorderColorStyleSheetKey,
  ViewBorderColorThemeTokenKey,
} from '../constants'

// View border color hook.
export const useViewBorderColorStyle = (borderColor?: ViewBorderColor) =>
  useThemeStyleSheet()[ViewBorderColorStyleSheetKey[borderColor]]

// View border color CSS value hook.
export const useViewBorderColorCSSValue = (borderColor?: ViewBorderColor) =>
  useThemeContext()[ViewBorderColorThemeTokenKey[borderColor]]

// View background color style sheet.
const viewBackgroundColorStyleSheet = StyleSheet.create({
  backgroundColorTransparent: {
    backgroundColor: 'transparent',
  },
})
// Use native background color hook.
export const useViewBackgroundColorStyle = (
  backgroundColor: ViewBackgroundColor | Color
) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (backgroundColor in ViewBackgroundColor) {
    if (backgroundColor === ViewBackgroundColor.TRANSPARENT) {
      return viewBackgroundColorStyleSheet.backgroundColorTransparent
    }
    return themeStyleSheet[
      ViewBackgroundColorStyleSheetKey[
        backgroundColor as
          | ViewBackgroundColor.BASE_100
          | ViewBackgroundColor.BASE_200
          | ViewBackgroundColor.BASE_300
          | ViewBackgroundColor.BASE_400
          | ViewBackgroundColor.BASE_500
          | ViewBackgroundColor.BASE_600
          | ViewBackgroundColor.BASE_700
          | ViewBackgroundColor.BASE_800
          | ViewBackgroundColor.BASE_900
      ]
    ]
  }
  return {
    backgroundColor: backgroundColor as Color,
  }
}
// Use background color CSS value hook.
export const useViewBackgroundColorCSSValue = (
  backgroundColor: ViewBackgroundColor | Color
) => {
  const themeContext = useThemeContext()
  if (backgroundColor in ViewBackgroundColor) {
    if (backgroundColor === ViewBackgroundColor.TRANSPARENT) {
      return 'transparent'
    }
    return themeContext[
      ViewBackgroundColorThemeTokenKey[
        backgroundColor as
          | ViewBackgroundColor.BASE_100
          | ViewBackgroundColor.BASE_200
          | ViewBackgroundColor.BASE_300
          | ViewBackgroundColor.BASE_400
          | ViewBackgroundColor.BASE_500
          | ViewBackgroundColor.BASE_600
          | ViewBackgroundColor.BASE_700
          | ViewBackgroundColor.BASE_800
          | ViewBackgroundColor.BASE_900
      ]
    ]
  }
  return backgroundColor as Color
}
