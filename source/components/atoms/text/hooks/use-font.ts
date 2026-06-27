import { useThemeContext, useThemeStyleSheet } from '@/contexts'
import {
  FONT_FAMILY_DEFAULT,
  FONT_FAMILY_DEFAULT_ANDROID_BY_WEIGHT,
} from '@/contexts/theme/constants'
import { Platform } from 'react-native'
import { TextFontFamily, TextFontSize, TextFontWeight } from '../constants'

const TEXT_FONT_FAMILY_KEY = {
  [TextFontFamily.DEFAULT]: 'fontFamilyDefault' as const,
  [TextFontFamily.TYPOGRAPHIC]: 'fontFamilyTypographic' as const,
}

// Android collapses numeric font weights below 700 to its "normal" face, so SEMIBOLD (600)
// renders identically to REGULAR (400) without this workaround. Only applies to the library's
// default Android font — swaps in the closest distinct named system family for the weight.
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
  const fontWeightValue = useTextFontWeight(fontWeight)
  const fontFamilyStyle =
    themeStyleSheet[TEXT_FONT_FAMILY_KEY[fontFamily]]
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
export const useTextFontFamily = (
  fontFamily: TextFontFamily,
  fontWeight: TextFontWeight,
) => {
  const themeContext = useThemeContext()
  const fontWeightValue = useTextFontWeight(fontWeight)
  const fontFamilyValue = themeContext[TEXT_FONT_FAMILY_KEY[fontFamily]]
  if (Platform.OS !== 'android' || fontFamily !== TextFontFamily.DEFAULT) {
    return fontFamilyValue
  }
  return resolveAndroidFontFamilyByWeight(fontFamilyValue, fontWeightValue)
}

export const TEXT_FONT_WEIGHT_KEY = {
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
  useThemeStyleSheet()[TEXT_FONT_WEIGHT_KEY[fontWeight]]
export const useTextFontWeight = (fontWeight: TextFontWeight) =>
  useThemeContext()[TEXT_FONT_WEIGHT_KEY[fontWeight]]

export const TEXT_FONT_SIZE_KEY = {
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
  useThemeStyleSheet()[TEXT_FONT_SIZE_KEY[fontSize]]
export const useTextFontSize = (fontSize: TextFontSize) =>
  useThemeContext()[TEXT_FONT_SIZE_KEY[fontSize]].toValue()
