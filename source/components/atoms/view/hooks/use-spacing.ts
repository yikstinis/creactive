import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { ViewSpacing } from '../constants'

const VIEW_MARGIN_TOP_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'marginTopBaseX6S' as const,
  [ViewSpacing.X5S]: 'marginTopBaseX5S' as const,
  [ViewSpacing.X4S]: 'marginTopBaseX4S' as const,
  [ViewSpacing.X3S]: 'marginTopBaseX3S' as const,
  [ViewSpacing.X2S]: 'marginTopBaseX2S' as const,
  [ViewSpacing.XS]: 'marginTopBaseXS' as const,
  [ViewSpacing.SM]: 'marginTopBaseSM' as const,
  [ViewSpacing.MD]: 'marginTopBaseMD' as const,
  [ViewSpacing.LG]: 'marginTopBaseLG' as const,
  [ViewSpacing.XL]: 'marginTopBaseXL' as const,
  [ViewSpacing.X2L]: 'marginTopBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginTopBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginTopBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginTopBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginTopBaseX6L' as const,
}
export const useViewMarginTopStyle = (marginTop?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_TOP_THEME_STYLE_KEY[marginTop]]

const VIEW_PADDING_TOP_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'paddingTopBaseX6S' as const,
  [ViewSpacing.X5S]: 'paddingTopBaseX5S' as const,
  [ViewSpacing.X4S]: 'paddingTopBaseX4S' as const,
  [ViewSpacing.X3S]: 'paddingTopBaseX3S' as const,
  [ViewSpacing.X2S]: 'paddingTopBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingTopBaseXS' as const,
  [ViewSpacing.SM]: 'paddingTopBaseSM' as const,
  [ViewSpacing.MD]: 'paddingTopBaseMD' as const,
  [ViewSpacing.LG]: 'paddingTopBaseLG' as const,
  [ViewSpacing.XL]: 'paddingTopBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingTopBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingTopBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingTopBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingTopBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingTopBaseX6L' as const,
}
export const useViewPaddingTopStyle = (paddingTop?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_TOP_THEME_STYLE_KEY[paddingTop]]

const VIEW_MARGIN_LEFT_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'marginLeftBaseX6S' as const,
  [ViewSpacing.X5S]: 'marginLeftBaseX5S' as const,
  [ViewSpacing.X4S]: 'marginLeftBaseX4S' as const,
  [ViewSpacing.X3S]: 'marginLeftBaseX3S' as const,
  [ViewSpacing.X2S]: 'marginLeftBaseX2S' as const,
  [ViewSpacing.XS]: 'marginLeftBaseXS' as const,
  [ViewSpacing.SM]: 'marginLeftBaseSM' as const,
  [ViewSpacing.MD]: 'marginLeftBaseMD' as const,
  [ViewSpacing.LG]: 'marginLeftBaseLG' as const,
  [ViewSpacing.XL]: 'marginLeftBaseXL' as const,
  [ViewSpacing.X2L]: 'marginLeftBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginLeftBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginLeftBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginLeftBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginLeftBaseX6L' as const,
}
export const useViewMarginLeftStyle = (marginLeft?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_LEFT_THEME_STYLE_KEY[marginLeft]]

const VIEW_PADDING_LEFT_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'paddingLeftBaseX6S' as const,
  [ViewSpacing.X5S]: 'paddingLeftBaseX5S' as const,
  [ViewSpacing.X4S]: 'paddingLeftBaseX4S' as const,
  [ViewSpacing.X3S]: 'paddingLeftBaseX3S' as const,
  [ViewSpacing.X2S]: 'paddingLeftBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingLeftBaseXS' as const,
  [ViewSpacing.SM]: 'paddingLeftBaseSM' as const,
  [ViewSpacing.MD]: 'paddingLeftBaseMD' as const,
  [ViewSpacing.LG]: 'paddingLeftBaseLG' as const,
  [ViewSpacing.XL]: 'paddingLeftBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingLeftBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingLeftBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingLeftBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingLeftBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingLeftBaseX6L' as const,
}
export const useViewPaddingLeftStyle = (paddingLeft?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_LEFT_THEME_STYLE_KEY[paddingLeft]]

const VIEW_MARGIN_RIGHT_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'marginRightBaseX6S' as const,
  [ViewSpacing.X5S]: 'marginRightBaseX5S' as const,
  [ViewSpacing.X4S]: 'marginRightBaseX4S' as const,
  [ViewSpacing.X3S]: 'marginRightBaseX3S' as const,
  [ViewSpacing.X2S]: 'marginRightBaseX2S' as const,
  [ViewSpacing.XS]: 'marginRightBaseXS' as const,
  [ViewSpacing.SM]: 'marginRightBaseSM' as const,
  [ViewSpacing.MD]: 'marginRightBaseMD' as const,
  [ViewSpacing.LG]: 'marginRightBaseLG' as const,
  [ViewSpacing.XL]: 'marginRightBaseXL' as const,
  [ViewSpacing.X2L]: 'marginRightBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginRightBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginRightBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginRightBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginRightBaseX6L' as const,
}
export const useViewMarginRightStyle = (marginRight?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_RIGHT_THEME_STYLE_KEY[marginRight]]

const VIEW_PADDING_RIGHT_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'paddingRightBaseX6S' as const,
  [ViewSpacing.X5S]: 'paddingRightBaseX5S' as const,
  [ViewSpacing.X4S]: 'paddingRightBaseX4S' as const,
  [ViewSpacing.X3S]: 'paddingRightBaseX3S' as const,
  [ViewSpacing.X2S]: 'paddingRightBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingRightBaseXS' as const,
  [ViewSpacing.SM]: 'paddingRightBaseSM' as const,
  [ViewSpacing.MD]: 'paddingRightBaseMD' as const,
  [ViewSpacing.LG]: 'paddingRightBaseLG' as const,
  [ViewSpacing.XL]: 'paddingRightBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingRightBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingRightBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingRightBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingRightBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingRightBaseX6L' as const,
}
export const useViewPaddingRightStyle = (paddingRight?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_RIGHT_THEME_STYLE_KEY[paddingRight]]

const VIEW_MARGIN_BOTTOM_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'marginBottomBaseX6S' as const,
  [ViewSpacing.X5S]: 'marginBottomBaseX5S' as const,
  [ViewSpacing.X4S]: 'marginBottomBaseX4S' as const,
  [ViewSpacing.X3S]: 'marginBottomBaseX3S' as const,
  [ViewSpacing.X2S]: 'marginBottomBaseX2S' as const,
  [ViewSpacing.XS]: 'marginBottomBaseXS' as const,
  [ViewSpacing.SM]: 'marginBottomBaseSM' as const,
  [ViewSpacing.MD]: 'marginBottomBaseMD' as const,
  [ViewSpacing.LG]: 'marginBottomBaseLG' as const,
  [ViewSpacing.XL]: 'marginBottomBaseXL' as const,
  [ViewSpacing.X2L]: 'marginBottomBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginBottomBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginBottomBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginBottomBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginBottomBaseX6L' as const,
}
export const useViewMarginBottomStyle = (marginBottom?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_MARGIN_BOTTOM_THEME_STYLE_KEY[marginBottom]]

const VIEW_PADDING_BOTTOM_THEME_STYLE_KEY = {
  [ViewSpacing.X6S]: 'paddingBottomBaseX6S' as const,
  [ViewSpacing.X5S]: 'paddingBottomBaseX5S' as const,
  [ViewSpacing.X4S]: 'paddingBottomBaseX4S' as const,
  [ViewSpacing.X3S]: 'paddingBottomBaseX3S' as const,
  [ViewSpacing.X2S]: 'paddingBottomBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingBottomBaseXS' as const,
  [ViewSpacing.SM]: 'paddingBottomBaseSM' as const,
  [ViewSpacing.MD]: 'paddingBottomBaseMD' as const,
  [ViewSpacing.LG]: 'paddingBottomBaseLG' as const,
  [ViewSpacing.XL]: 'paddingBottomBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingBottomBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingBottomBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingBottomBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingBottomBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingBottomBaseX6L' as const,
}
export const useViewPaddingBottomStyle = (paddingBottom?: ViewSpacing) =>
  useThemeStyleSheet()[VIEW_PADDING_BOTTOM_THEME_STYLE_KEY[paddingBottom]]

const VIEW_SPACING_THEME_TOKEN_KEY = {
  [ViewSpacing.X6S]: 'spacingBaseX6S' as const,
  [ViewSpacing.X5S]: 'spacingBaseX5S' as const,
  [ViewSpacing.X4S]: 'spacingBaseX4S' as const,
  [ViewSpacing.X3S]: 'spacingBaseX3S' as const,
  [ViewSpacing.X2S]: 'spacingBaseX2S' as const,
  [ViewSpacing.XS]: 'spacingBaseXS' as const,
  [ViewSpacing.SM]: 'spacingBaseSM' as const,
  [ViewSpacing.MD]: 'spacingBaseMD' as const,
  [ViewSpacing.LG]: 'spacingBaseLG' as const,
  [ViewSpacing.XL]: 'spacingBaseXL' as const,
  [ViewSpacing.X2L]: 'spacingBaseX2L' as const,
  [ViewSpacing.X3L]: 'spacingBaseX3L' as const,
  [ViewSpacing.X4L]: 'spacingBaseX4L' as const,
  [ViewSpacing.X5L]: 'spacingBaseX5L' as const,
  [ViewSpacing.X6L]: 'spacingBaseX6L' as const,
}
export const useViewSpacingValue = (spacing?: ViewSpacing) =>
  useThemeContext()[VIEW_SPACING_THEME_TOKEN_KEY[spacing]]
