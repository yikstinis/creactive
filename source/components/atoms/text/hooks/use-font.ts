import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import { TextFontFamily, TextFontSize, TextFontWeight } from '../constants'

const TEXT_THEME_FONT_FAMILY_KEY = {
  [TextFontFamily.BASE]: 'fontFamilyBase' as const,
  [TextFontFamily.TYPOGRAPHIC]: 'fontFamilyTypographic' as const,
}
export const useTextFontFamilyStyle = (fontFamily: TextFontFamily) =>
  useThemeStyleSheet()[TEXT_THEME_FONT_FAMILY_KEY[fontFamily]]
export const useTextFontFamilyValue = (fontFamily: TextFontFamily) =>
  useThemeContext()[TEXT_THEME_FONT_FAMILY_KEY[fontFamily]]

export const TEXT_THEME_FONT_WEIGHT_KEY = {
  [TextFontWeight.THIN]: 'fontWeightBaseThin' as const,
  [TextFontWeight.EXTRA_LIGHT]: 'fontWeightBaseExtraLight' as const,
  [TextFontWeight.LIGHT]: 'fontWeightBaseLight' as const,
  [TextFontWeight.REGULAR]: 'fontWeightBaseRegular' as const,
  [TextFontWeight.MEDIUM]: 'fontWeightBaseMedium' as const,
  [TextFontWeight.SEMIBOLD]: 'fontWeightBaseSemiBold' as const,
  [TextFontWeight.BOLD]: 'fontWeightBaseBold' as const,
  [TextFontWeight.EXTRA_BOLD]: 'fontWeightBaseExtraBold' as const,
  [TextFontWeight.BLACK]: 'fontWeightBaseBlack' as const,
}
export const useTextFontWeightStyle = (fontWeight: TextFontWeight) =>
  useThemeStyleSheet()[TEXT_THEME_FONT_WEIGHT_KEY[fontWeight]]
export const useTextFontWeightValue = (fontWeight: TextFontWeight) =>
  useThemeContext()[TEXT_THEME_FONT_WEIGHT_KEY[fontWeight]]

export const TEXT_THEME_FONT_SIZE_KEY = {
  [TextFontSize.X2S]: 'fontSizeBaseX2S' as const,
  [TextFontSize.XS]: 'fontSizeBaseXS' as const,
  [TextFontSize.SM]: 'fontSizeBaseSM' as const,
  [TextFontSize.MD]: 'fontSizeBaseMD' as const,
  [TextFontSize.LG]: 'fontSizeBaseLG' as const,
  [TextFontSize.XL]: 'fontSizeBaseXL' as const,
  [TextFontSize.X2L]: 'fontSizeBaseX2L' as const,
  [TextFontSize.X3L]: 'fontSizeBaseX3L' as const,
  [TextFontSize.X4L]: 'fontSizeBaseX4L' as const,
  [TextFontSize.X5L]: 'fontSizeBaseX5L' as const,
  [TextFontSize.X6L]: 'fontSizeBaseX6L' as const,
}
export const useTextFontSizeStyle = (fontSize: TextFontSize) =>
  useThemeStyleSheet()[TEXT_THEME_FONT_SIZE_KEY[fontSize]]
export const useTextFontSizeValue = (fontSize: TextFontSize) =>
  useThemeContext()[TEXT_THEME_FONT_SIZE_KEY[fontSize]]
