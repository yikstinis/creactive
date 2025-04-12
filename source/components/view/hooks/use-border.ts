import { useThemeContext } from '@/contexts'
import { useThemeStyleSheet } from '@/hooks'
import { StyleSheet } from 'react-native'
import {
  ViewBorderRadius,
  ViewBorderRadiusThemeStyleSheetKey,
  ViewBorderRadiusThemeTokenKey,
  ViewBorderWidth,
  ViewBorderWidthThemeStyleSheetKey,
  ViewBorderWidthThemeTokenKey,
} from '../constants'

// Border width native style hook.
export const useViewBorderWidthStyle = (borderWidth?: ViewBorderWidth) =>
  useThemeStyleSheet()[ViewBorderWidthThemeStyleSheetKey[borderWidth]]

// Spacing token value.
export const useViewBorderWidthTokenValue = (borderWidth?: ViewBorderWidth) =>
  useThemeContext()[ViewBorderWidthThemeTokenKey[borderWidth]] ?? 0

// Non-themed border style sheet.
const viewBorderStyleSheet = StyleSheet.create({
  borderRadiusMax: {
    borderRadius: '50%',
  },
})
// Border radius native style hook.
export const useViewBorderRadiusStyle = (borderRadius?: ViewBorderRadius) => {
  const themeStyleSheet = useThemeStyleSheet()
  return borderRadius === ViewBorderRadius.MAX
    ? viewBorderStyleSheet.borderRadiusMax
    : themeStyleSheet[ViewBorderRadiusThemeStyleSheetKey[borderRadius]]
}
// Border radius CSS value hook.
export const useViewBorderRadiusCSSValue = (
  borderRadius?: ViewBorderRadius
): undefined | '50%' | `${number}px` => {
  const themeContext = useThemeContext()
  if (borderRadius === undefined) return undefined
  if (borderRadius === ViewBorderRadius.MAX) return '50%'
  return `${themeContext[ViewBorderRadiusThemeTokenKey[borderRadius]]}px`
}
