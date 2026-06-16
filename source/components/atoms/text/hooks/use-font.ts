import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import {
  FONT_FAMILY_DEFAULT,
  FONT_FAMILY_DEFAULT_ANDROID_BY_WEIGHT,
} from '@/contexts/theme/constants'
import { Platform } from 'react-native'
import { TextFontFamily, TextFontSize, TextFontWeight } from '../constants'

const TEXT_THEME_FONT_FAMILY_KEY = {
  [TextFontFamily.DEFAULT]: 'fontFamilyDefault' as const,
  [TextFontFamily.TYPOGRAPHIC]: 'fontFamilyTypographic' as const,
}

// Android collapses any numeric font weight below 700 to its "normal" face.
// So SEMIBOLD (600) would otherwise render identically to REGULAR (400).
// This only applies when the consumer hasn't themed away from the library's default Android font.
// In that case, swap in the closest distinct named system family for the requested weight.
const resolveAndroidFontFamilyByWeight = (
  fontFamily: string,
  fontWeight: number,
) =>
  fontFamily === FONT_FAMILY_DEFAULT
    ? (FONT_FAMILY_DEFAULT_ANDROID_BY_WEIGHT[fontWeight] ?? fontFamily)
    : fontFamily

export const useTextFontFamilyStyle = (
  fontFamily: TextFontFamily,
  fontWeight: TextFontWeight,
) => {
  const themeStyleSheet = useThemeStyleSheet()
  const fontWeightValue = useTextFontWeightValue(fontWeight)
  const fontFamilyStyle =
    themeStyleSheet[TEXT_THEME_FONT_FAMILY_KEY[fontFamily]]
  if (Platform.OS !== 'android' || fontFamily !== TextFontFamily.DEFAULT) {
    return fontFamilyStyle
  }
  return {
    ...fontFamilyStyle,
    fontFamily: resolveAndroidFontFamilyByWeight(
      fontFamilyStyle.fontFamily,
      fontWeightValue,
    ),
  }
}
export const useTextFontFamilyValue = (
  fontFamily: TextFontFamily,
  fontWeight: TextFontWeight,
) => {
  const themeContext = useThemeContext()
  const fontWeightValue = useTextFontWeightValue(fontWeight)
  const fontFamilyValue = themeContext[TEXT_THEME_FONT_FAMILY_KEY[fontFamily]]
  if (Platform.OS !== 'android' || fontFamily !== TextFontFamily.DEFAULT) {
    return fontFamilyValue
  }
  return resolveAndroidFontFamilyByWeight(fontFamilyValue, fontWeightValue)
}

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
