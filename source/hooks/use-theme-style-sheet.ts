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
        // Foreground color styles.
        colorForegroundBase100: {
          color: themeContext.colorForegroundBase100,
        },
        colorForegroundBase200: {
          color: themeContext.colorForegroundBase200,
        },
        colorForegroundBase300: {
          color: themeContext.colorForegroundBase300,
        },
        colorForegroundBase400: {
          color: themeContext.colorForegroundBase400,
        },
        colorForegroundBase500: {
          color: themeContext.colorForegroundBase500,
        },
        colorForegroundBase600: {
          color: themeContext.colorForegroundBase600,
        },
        colorForegroundBase700: {
          color: themeContext.colorForegroundBase700,
        },
        colorForegroundBase800: {
          color: themeContext.colorForegroundBase800,
        },
        colorForegroundBase900: {
          color: themeContext.colorForegroundBase900,
        },
        colorForegroundInverse100: {
          color: themeContext.colorForegroundInverse100,
        },
        colorForegroundInverse200: {
          color: themeContext.colorForegroundInverse200,
        },
        colorForegroundInverse300: {
          color: themeContext.colorForegroundInverse300,
        },
        colorForegroundInverse400: {
          color: themeContext.colorForegroundInverse400,
        },
        colorForegroundInverse500: {
          color: themeContext.colorForegroundInverse500,
        },
        colorForegroundInverse600: {
          color: themeContext.colorForegroundInverse600,
        },
        colorForegroundInverse700: {
          color: themeContext.colorForegroundInverse700,
        },
        colorForegroundInverse800: {
          color: themeContext.colorForegroundInverse800,
        },
        colorForegroundInverse900: {
          color: themeContext.colorForegroundInverse900,
        },
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
