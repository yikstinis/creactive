import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { ViewBorderColor, ViewBorderWidth } from '../constants'

const VIEW_BORDER_COLOR_THEME_KEY = {
  [ViewBorderColor.BASE_100]: 'colorBorderBase100' as const,
  [ViewBorderColor.BASE_200]: 'colorBorderBase200' as const,
  [ViewBorderColor.BASE_300]: 'colorBorderBase300' as const,
  [ViewBorderColor.BASE_400]: 'colorBorderBase400' as const,
  [ViewBorderColor.BASE_500]: 'colorBorderBase500' as const,
  [ViewBorderColor.BASE_600]: 'colorBorderBase600' as const,
  [ViewBorderColor.BASE_700]: 'colorBorderBase700' as const,
  [ViewBorderColor.BASE_800]: 'colorBorderBase800' as const,
  [ViewBorderColor.BASE_900]: 'colorBorderBase900' as const,
}
export const useViewBorderColorStyle = (borderColor?: ViewBorderColor) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderColor === undefined) return undefined
  return themeStyleSheet[VIEW_BORDER_COLOR_THEME_KEY[borderColor]]
}
export const useViewBorderColorValue = (borderColor?: ViewBorderColor) => {
  const themeContext = useThemeContext()
  if (borderColor === undefined) return undefined
  return themeContext[VIEW_BORDER_COLOR_THEME_KEY[borderColor]].toValue()
}

const VIEW_BORDER_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBaseLG' as const,
}
export const useViewBorderWidthStyle = (borderWidth?: ViewBorderWidth) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderWidth === undefined) return undefined
  return themeStyleSheet[VIEW_BORDER_WIDTH_THEME_STYLE_KEY[borderWidth]]
}

const VIEW_BORDER_TOP_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthTopBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthTopBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthTopBaseLG' as const,
}
export const useViewBorderTopWidthStyle = (borderWidth?: ViewBorderWidth) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderWidth === undefined) return undefined
  return themeStyleSheet[VIEW_BORDER_TOP_WIDTH_THEME_STYLE_KEY[borderWidth]]
}

const VIEW_BORDER_LEFT_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthLeftBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthLeftBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthLeftBaseLG' as const,
}
export const useViewBorderLeftWidthStyle = (borderWidth?: ViewBorderWidth) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderWidth === undefined) return undefined
  return themeStyleSheet[VIEW_BORDER_LEFT_WIDTH_THEME_STYLE_KEY[borderWidth]]
}

const VIEW_BORDER_RIGHT_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthRightBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthRightBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthRightBaseLG' as const,
}
export const useViewBorderRightWidthStyle = (borderWidth?: ViewBorderWidth) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderWidth === undefined) return undefined
  return themeStyleSheet[VIEW_BORDER_RIGHT_WIDTH_THEME_STYLE_KEY[borderWidth]]
}

const VIEW_BORDER_BOTTOM_WIDTH_THEME_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBottomBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBottomBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBottomBaseLG' as const,
}
export const useViewBorderBottomWidthStyle = (borderWidth?: ViewBorderWidth) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderWidth === undefined) return undefined
  return themeStyleSheet[VIEW_BORDER_BOTTOM_WIDTH_THEME_STYLE_KEY[borderWidth]]
}

const VIEW_BORDER_WIDTH_THEME_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBaseLG' as const,
}
export const useViewBorderWidthValue = (borderWidth?: ViewBorderWidth) => {
  const themeContext = useThemeContext()
  if (borderWidth === undefined) return undefined
  return themeContext[VIEW_BORDER_WIDTH_THEME_KEY[borderWidth]].toValue()
}
