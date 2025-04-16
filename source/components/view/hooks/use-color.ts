import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import type { Color } from '@/types'
import {
  VIEW_THEME_BACKGROUND_COLOR_KEY,
  VIEW_THEME_BORDER_COLOR_KEY,
  ViewBackgroundColor,
  ViewBorderColor,
} from '../constants'

// Border color style.
export const useViewBorderColorStyle = (borderColor?: ViewBorderColor) =>
  useThemeStyleSheet()[VIEW_THEME_BORDER_COLOR_KEY[borderColor]]
// Vorder color CSS value.
export const useViewBorderColorCSSValue = (borderColor?: ViewBorderColor) =>
  useThemeContext()[VIEW_THEME_BORDER_COLOR_KEY[borderColor]]

// Use native background color hook.
export const useViewBackgroundColorStyle = (
  backgroundColor: ViewBackgroundColor | Color
) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (backgroundColor === undefined) return undefined
  if (backgroundColor in ViewBackgroundColor) {
    return themeStyleSheet[
      VIEW_THEME_BACKGROUND_COLOR_KEY[
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
  if (backgroundColor === undefined) return undefined
  if (backgroundColor in ViewBackgroundColor) {
    return themeContext[
      VIEW_THEME_BACKGROUND_COLOR_KEY[
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
