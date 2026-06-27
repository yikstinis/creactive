import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { Dimension } from '@/helpers'
import type { PercentDimension } from '@/helpers'
import { BorderRadius, ViewBorderColor, ViewBorderWidth } from '../constants'

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

const BORDER_RADIUS_THEME_STYLE_KEY = {
  [BorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [BorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [BorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [BorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [BorderRadius.XL]: 'borderRadiusBaseXL' as const,
  [BorderRadius.X2L]: 'borderRadiusBaseX2L' as const,
  [BorderRadius.X3L]: 'borderRadiusBaseX3L' as const,
  [BorderRadius.X4L]: 'borderRadiusBaseX4L' as const,
  [BorderRadius.X5L]: 'borderRadiusBaseX5L' as const,
  [BorderRadius.X6L]: 'borderRadiusBaseX6L' as const,
  [BorderRadius.X7L]: 'borderRadiusBaseX7L' as const,
}
export const useBorderRadiusStyle = (borderRadius?: BorderRadius | PercentDimension) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderRadius === undefined) return undefined
  if (borderRadius instanceof Dimension) return { borderRadius: borderRadius.toValue() }
  return themeStyleSheet[BORDER_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const BORDER_TOP_LEFT_RADIUS_THEME_STYLE_KEY = {
  [BorderRadius.XS]: 'borderTopLeftRadiusBaseXS' as const,
  [BorderRadius.SM]: 'borderTopLeftRadiusBaseSM' as const,
  [BorderRadius.MD]: 'borderTopLeftRadiusBaseMD' as const,
  [BorderRadius.LG]: 'borderTopLeftRadiusBaseLG' as const,
  [BorderRadius.XL]: 'borderTopLeftRadiusBaseXL' as const,
  [BorderRadius.X2L]: 'borderTopLeftRadiusBaseX2L' as const,
  [BorderRadius.X3L]: 'borderTopLeftRadiusBaseX3L' as const,
  [BorderRadius.X4L]: 'borderTopLeftRadiusBaseX4L' as const,
  [BorderRadius.X5L]: 'borderTopLeftRadiusBaseX5L' as const,
  [BorderRadius.X6L]: 'borderTopLeftRadiusBaseX6L' as const,
  [BorderRadius.X7L]: 'borderTopLeftRadiusBaseX7L' as const,
}
export const useBorderTopLeftRadiusStyle = (borderRadius?: BorderRadius | PercentDimension) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderRadius === undefined) return undefined
  if (borderRadius instanceof Dimension) return { borderTopLeftRadius: borderRadius.toValue() }
  return themeStyleSheet[BORDER_TOP_LEFT_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const BORDER_TOP_RIGHT_RADIUS_THEME_STYLE_KEY = {
  [BorderRadius.XS]: 'borderTopRightRadiusBaseXS' as const,
  [BorderRadius.SM]: 'borderTopRightRadiusBaseSM' as const,
  [BorderRadius.MD]: 'borderTopRightRadiusBaseMD' as const,
  [BorderRadius.LG]: 'borderTopRightRadiusBaseLG' as const,
  [BorderRadius.XL]: 'borderTopRightRadiusBaseXL' as const,
  [BorderRadius.X2L]: 'borderTopRightRadiusBaseX2L' as const,
  [BorderRadius.X3L]: 'borderTopRightRadiusBaseX3L' as const,
  [BorderRadius.X4L]: 'borderTopRightRadiusBaseX4L' as const,
  [BorderRadius.X5L]: 'borderTopRightRadiusBaseX5L' as const,
  [BorderRadius.X6L]: 'borderTopRightRadiusBaseX6L' as const,
  [BorderRadius.X7L]: 'borderTopRightRadiusBaseX7L' as const,
}
export const useBorderTopRightRadiusStyle = (borderRadius?: BorderRadius | PercentDimension) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderRadius === undefined) return undefined
  if (borderRadius instanceof Dimension) return { borderTopRightRadius: borderRadius.toValue() }
  return themeStyleSheet[BORDER_TOP_RIGHT_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const BORDER_BOTTOM_LEFT_RADIUS_THEME_STYLE_KEY = {
  [BorderRadius.XS]: 'borderBottomLeftRadiusBaseXS' as const,
  [BorderRadius.SM]: 'borderBottomLeftRadiusBaseSM' as const,
  [BorderRadius.MD]: 'borderBottomLeftRadiusBaseMD' as const,
  [BorderRadius.LG]: 'borderBottomLeftRadiusBaseLG' as const,
  [BorderRadius.XL]: 'borderBottomLeftRadiusBaseXL' as const,
  [BorderRadius.X2L]: 'borderBottomLeftRadiusBaseX2L' as const,
  [BorderRadius.X3L]: 'borderBottomLeftRadiusBaseX3L' as const,
  [BorderRadius.X4L]: 'borderBottomLeftRadiusBaseX4L' as const,
  [BorderRadius.X5L]: 'borderBottomLeftRadiusBaseX5L' as const,
  [BorderRadius.X6L]: 'borderBottomLeftRadiusBaseX6L' as const,
  [BorderRadius.X7L]: 'borderBottomLeftRadiusBaseX7L' as const,
}
export const useBorderBottomLeftRadiusStyle = (borderRadius?: BorderRadius | PercentDimension) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderRadius === undefined) return undefined
  if (borderRadius instanceof Dimension) return { borderBottomLeftRadius: borderRadius.toValue() }
  return themeStyleSheet[BORDER_BOTTOM_LEFT_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const BORDER_BOTTOM_RIGHT_RADIUS_THEME_STYLE_KEY = {
  [BorderRadius.XS]: 'borderBottomRightRadiusBaseXS' as const,
  [BorderRadius.SM]: 'borderBottomRightRadiusBaseSM' as const,
  [BorderRadius.MD]: 'borderBottomRightRadiusBaseMD' as const,
  [BorderRadius.LG]: 'borderBottomRightRadiusBaseLG' as const,
  [BorderRadius.XL]: 'borderBottomRightRadiusBaseXL' as const,
  [BorderRadius.X2L]: 'borderBottomRightRadiusBaseX2L' as const,
  [BorderRadius.X3L]: 'borderBottomRightRadiusBaseX3L' as const,
  [BorderRadius.X4L]: 'borderBottomRightRadiusBaseX4L' as const,
  [BorderRadius.X5L]: 'borderBottomRightRadiusBaseX5L' as const,
  [BorderRadius.X6L]: 'borderBottomRightRadiusBaseX6L' as const,
  [BorderRadius.X7L]: 'borderBottomRightRadiusBaseX7L' as const,
}
export const useBorderBottomRightRadiusStyle = (
  borderRadius?: BorderRadius | PercentDimension,
) => {
  const themeStyleSheet = useThemeStyleSheet()
  if (borderRadius === undefined) return undefined
  if (borderRadius instanceof Dimension) return { borderBottomRightRadius: borderRadius.toValue() }
  return themeStyleSheet[BORDER_BOTTOM_RIGHT_RADIUS_THEME_STYLE_KEY[borderRadius]]
}

const BORDER_RADIUS_THEME_KEY = {
  [BorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [BorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [BorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [BorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [BorderRadius.XL]: 'borderRadiusBaseXL' as const,
  [BorderRadius.X2L]: 'borderRadiusBaseX2L' as const,
  [BorderRadius.X3L]: 'borderRadiusBaseX3L' as const,
  [BorderRadius.X4L]: 'borderRadiusBaseX4L' as const,
  [BorderRadius.X5L]: 'borderRadiusBaseX5L' as const,
  [BorderRadius.X6L]: 'borderRadiusBaseX6L' as const,
  [BorderRadius.X7L]: 'borderRadiusBaseX7L' as const,
}
export const useBorderRadiusValue = (borderRadius?: BorderRadius | PercentDimension) => {
  const themeContext = useThemeContext()
  if (borderRadius === undefined) return undefined
  if (borderRadius instanceof Dimension) return borderRadius.toValue()
  return themeContext[BORDER_RADIUS_THEME_KEY[borderRadius]].toValue()
}
