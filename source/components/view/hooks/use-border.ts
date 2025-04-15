import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { StyleSheet } from 'react-native'
import {
  VIEW_THEME_BORDER_RADIUS_KEY,
  VIEW_THEME_BORDER_WIDTH_KEY,
  ViewBorderRadius,
  ViewBorderWidth,
} from '../constants'

// Border width style.
export const useViewBorderWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[VIEW_THEME_BORDER_WIDTH_KEY[borderWidth]]
// Border widht token value.
export const useViewBorderWidthTokenValue = (borderWidth?: ViewBorderWidth) =>
  useThemeContext()[VIEW_THEME_BORDER_WIDTH_KEY[borderWidth]] ?? 0

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
// Border radius CSS value.
export const useViewBorderRadiusCSSValue = (
  borderRadius?: ViewBorderRadius
): undefined | '50%' | `${number}px` => {
  const themeContext = useThemeContext()
  if (borderRadius === undefined) return undefined
  if (borderRadius === ViewBorderRadius.MAX) return '50%'
  return `${themeContext[VIEW_THEME_BORDER_RADIUS_KEY[borderRadius]]}px`
}
