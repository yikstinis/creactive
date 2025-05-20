import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { StyleSheet } from 'react-native'
import {
  VIEW_THEME_BORDER_RADIUS_BOTTOM_LEFT_KEY,
  VIEW_THEME_BORDER_RADIUS_BOTTOM_RIGHT_KEY,
  VIEW_THEME_BORDER_RADIUS_KEY,
  VIEW_THEME_BORDER_RADIUS_TOP_LEFT_KEY,
  VIEW_THEME_BORDER_RADIUS_TOP_RIGHT_KEY,
  VIEW_THEME_BORDER_WIDTH_BOTTOM_STYLE_KEY,
  VIEW_THEME_BORDER_WIDTH_KEY,
  VIEW_THEME_BORDER_WIDTH_LEFT_STYLE_KEY,
  VIEW_THEME_BORDER_WIDTH_RIGHT_STYLE_KEY,
  VIEW_THEME_BORDER_WIDTH_TOP_STYLE_KEY,
  ViewBorderRadius,
  ViewBorderWidth,
} from '../constants'

// Border width style.
export const useViewBorderWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_THEME_BORDER_WIDTH_KEY[borderWidth]] ?? {
    borderWidth: 0,
  }
// Border width top style.
export const useViewBorderWidthTopStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_THEME_BORDER_WIDTH_TOP_STYLE_KEY[borderWidth]] ?? {
    borderTopWidth: undefined,
  }
// Border width left style.
export const useViewBorderWidthLeftStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_THEME_BORDER_WIDTH_LEFT_STYLE_KEY[borderWidth]] ?? {
    borderLeftWidth: undefined,
  }
// Border width right style.
export const useViewBorderWidthRightStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[
    VIEW_THEME_BORDER_WIDTH_RIGHT_STYLE_KEY[borderWidth]
  ] ?? {
    borderRightWidth: undefined,
  }
// Border width bottom style.
export const useViewBorderWidthBottomStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[
    VIEW_THEME_BORDER_WIDTH_BOTTOM_STYLE_KEY[borderWidth]
  ] ?? {
    borderBottomWidth: undefined,
  }

// Border width token value.
export const useViewBorderWidthCSSValue = (borderWidth?: ViewBorderWidth) => {
  const themeContext = useThemeContext()
  if (borderWidth === undefined) return '0px'
  return `${themeContext[VIEW_THEME_BORDER_WIDTH_KEY[borderWidth]]}px`
}

// Non-themed border style.
const viewBorderStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderRadius: '50%',
  },
})
// Border radius style.
export const useViewBorderRadiusStyle = (borderRadius?: ViewBorderRadius) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_THEME_BORDER_RADIUS_KEY[borderRadius]]
}
export const useViewBorderRadiusTopLeftStyle = (
  borderRadius?: ViewBorderRadius
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_THEME_BORDER_RADIUS_TOP_LEFT_KEY[borderRadius]]
}
export const useViewBorderRadiusTopRightStyle = (
  borderRadius?: ViewBorderRadius
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_THEME_BORDER_RADIUS_TOP_RIGHT_KEY[borderRadius]]
}
export const useViewBorderRadiusBottomLeftStyle = (
  borderRadius?: ViewBorderRadius
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_THEME_BORDER_RADIUS_BOTTOM_LEFT_KEY[borderRadius]]
}
export const useViewBorderRadiusBottomRightStyle = (
  borderRadius?: ViewBorderRadius
) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[VIEW_THEME_BORDER_RADIUS_BOTTOM_RIGHT_KEY[borderRadius]]
}
// Border radius CSS value.
export const useViewBorderRadiusCSSValue = (
  borderRadius?: ViewBorderRadius
): undefined | '50%' | `${number}px` => {
  const themeContext = useThemeContext()
  if (borderRadius === undefined) return undefined
  if (borderRadius === ViewBorderRadius.MAX) return '50%'
  return `${themeContext[VIEW_THEME_BORDER_RADIUS_KEY[borderRadius]]}px`
}
