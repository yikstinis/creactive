import { BorderRadius } from '@/constants'
import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { Dimension } from '@/helpers'
import type { PercentDimension } from '@/helpers'

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
