import { useThemeContext } from '@/contexts/theme'
import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

// Create tailwind-like style sheet for each theme token.
// Some styles are shared across multiple components.
// We also export this hook outside just in case.
export const useThemeStyleSheet = () => {
  const themeContext = useThemeContext()
  // Re-creating style sheet only when theme context changes.
  return useMemo(
    () =>
      StyleSheet.create({
        // Font family styles.
        fontFamilyBase: {
          fontFamily: themeContext.fontFamilyBase,
        },
        // Base font weight styles.
        fontWeightBaseThin: {
          fontWeight: themeContext.fontWeightBaseThin,
        },
        fontWeightBaseExtraLight: {
          fontWeight: themeContext.fontWeightBaseExtraLight,
        },
        fontWeightBaseLight: {
          fontWeight: themeContext.fontWeightBaseLight,
        },
        fontWeightBaseRegular: {
          fontWeight: themeContext.fontWeightBaseRegular,
        },
        fontWeightBaseMedium: {
          fontWeight: themeContext.fontWeightBaseMedium,
        },
        fontWeightBaseSemibold: {
          fontWeight: themeContext.fontWeightBaseSemibold,
        },
        fontWeightBaseBold: {
          fontWeight: themeContext.fontWeightBaseBold,
        },
        fontWeightBaseExtraBold: {
          fontWeight: themeContext.fontWeightBaseExtraBold,
        },
        fontWeightBaseBlack: {
          fontWeight: themeContext.fontWeightBaseBlack,
        },
        // Base font size styles.
        fontSizeBaseX2S: {
          fontSize: themeContext.fontSizeBaseX2S,
        },
        fontSizeBaseXS: {
          fontSize: themeContext.fontSizeBaseXS,
        },
        fontSizeBaseSM: {
          fontSize: themeContext.fontSizeBaseSM,
        },
        fontSizeBaseMD: {
          fontSize: themeContext.fontSizeBaseMD,
        },
        fontSizeBaseLG: {
          fontSize: themeContext.fontSizeBaseLG,
        },
        fontSizeBaseXL: {
          fontSize: themeContext.fontSizeBaseXL,
        },
        fontSizeBaseX2L: {
          fontSize: themeContext.fontSizeBaseX2L,
        },
        fontSizeBaseX3L: {
          fontSize: themeContext.fontSizeBaseX3L,
        },
        fontSizeBaseX4L: {
          fontSize: themeContext.fontSizeBaseX4L,
        },
        fontSizeBaseX5L: {
          fontSize: themeContext.fontSizeBaseX5L,
        },
      }),
    [themeContext]
  )
}
