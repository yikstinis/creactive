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
        // Base background color styles.
        colorBackgroundBase100: {
          backgroundColor: themeContext.colorBackgroundBase100,
        },
        colorBackgroundBase200: {
          backgroundColor: themeContext.colorBackgroundBase200,
        },
        colorBackgroundBase300: {
          backgroundColor: themeContext.colorBackgroundBase300,
        },
        colorBackgroundBase400: {
          backgroundColor: themeContext.colorBackgroundBase400,
        },
        colorBackgroundBase500: {
          backgroundColor: themeContext.colorBackgroundBase500,
        },
        colorBackgroundBase600: {
          backgroundColor: themeContext.colorBackgroundBase600,
        },
        colorBackgroundBase700: {
          backgroundColor: themeContext.colorBackgroundBase700,
        },
        colorBackgroundBase800: {
          backgroundColor: themeContext.colorBackgroundBase800,
        },
        colorBackgroundBase900: {
          backgroundColor: themeContext.colorBackgroundBase900,
        },
        // Base border colors.
        colorBorderBase100: {
          borderColor: themeContext.colorBorderBase100,
        },
        colorBorderBase200: {
          borderColor: themeContext.colorBorderBase200,
        },
        colorBorderBase300: {
          borderColor: themeContext.colorBorderBase300,
        },
        colorBorderBase400: {
          borderColor: themeContext.colorBorderBase400,
        },
        colorBorderBase500: {
          borderColor: themeContext.colorBorderBase500,
        },
        colorBorderBase600: {
          borderColor: themeContext.colorBorderBase600,
        },
        colorBorderBase700: {
          borderColor: themeContext.colorBorderBase700,
        },
        colorBorderBase800: {
          borderColor: themeContext.colorBorderBase800,
        },
        colorBorderBase900: {
          borderColor: themeContext.colorBorderBase900,
        },
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
        // Base spacing styles.
        // Base X2S spacing styles.
        marginTopBaseX2S: {
          marginTop: themeContext.spacingBaseX2S,
        },
        paddingTopBaseX2S: {
          paddingTop: themeContext.spacingBaseX2S,
        },
        marginLeftBaseX2S: {
          marginLeft: themeContext.spacingBaseX2S,
        },
        paddingLeftBaseX2S: {
          paddingLeft: themeContext.spacingBaseX2S,
        },
        marginRightBaseX2S: {
          marginRight: themeContext.spacingBaseX2S,
        },
        paddingRightBaseX2S: {
          paddingRight: themeContext.spacingBaseX2S,
        },
        marginBottomBaseX2S: {
          marginBottom: themeContext.spacingBaseX2S,
        },
        paddingBottomBaseX2S: {
          paddingBottom: themeContext.spacingBaseX2S,
        },
        // Base XS spacing styles.
        marginTopBaseXS: {
          marginTop: themeContext.spacingBaseXS,
        },
        paddingTopBaseXS: {
          paddingTop: themeContext.spacingBaseXS,
        },
        marginLeftBaseXS: {
          marginLeft: themeContext.spacingBaseXS,
        },
        paddingLeftBaseXS: {
          paddingLeft: themeContext.spacingBaseXS,
        },
        marginRightBaseXS: {
          marginRight: themeContext.spacingBaseXS,
        },
        paddingRightBaseXS: {
          paddingRight: themeContext.spacingBaseXS,
        },
        marginBottomBaseXS: {
          marginBottom: themeContext.spacingBaseXS,
        },
        paddingBottomBaseXS: {
          paddingBottom: themeContext.spacingBaseXS,
        },
        // Base SM spacing styles.
        marginTopBaseSM: {
          marginTop: themeContext.spacingBaseSM,
        },
        paddingTopBaseSM: {
          paddingTop: themeContext.spacingBaseSM,
        },
        marginLeftBaseSM: {
          marginLeft: themeContext.spacingBaseSM,
        },
        paddingLeftBaseSM: {
          paddingLeft: themeContext.spacingBaseSM,
        },
        marginRightBaseSM: {
          marginRight: themeContext.spacingBaseSM,
        },
        paddingRightBaseSM: {
          paddingRight: themeContext.spacingBaseSM,
        },
        marginBottomBaseSM: {
          marginBottom: themeContext.spacingBaseSM,
        },
        paddingBottomBaseSM: {
          paddingBottom: themeContext.spacingBaseSM,
        },
        // Base MD spacing styles.
        marginTopBaseMD: {
          marginTop: themeContext.spacingBaseMD,
        },
        paddingTopBaseMD: {
          paddingTop: themeContext.spacingBaseMD,
        },
        marginLeftBaseMD: {
          marginLeft: themeContext.spacingBaseMD,
        },
        paddingLeftBaseMD: {
          paddingLeft: themeContext.spacingBaseMD,
        },
        marginRightBaseMD: {
          marginRight: themeContext.spacingBaseMD,
        },
        paddingRightBaseMD: {
          paddingRight: themeContext.spacingBaseMD,
        },
        marginBottomBaseMD: {
          marginBottom: themeContext.spacingBaseMD,
        },
        paddingBottomBaseMD: {
          paddingBottom: themeContext.spacingBaseMD,
        },
        // Base LG spacing styles.
        marginTopBaseLG: {
          marginTop: themeContext.spacingBaseLG,
        },
        paddingTopBaseLG: {
          paddingTop: themeContext.spacingBaseLG,
        },
        marginLeftBaseLG: {
          marginLeft: themeContext.spacingBaseLG,
        },
        paddingLeftBaseLG: {
          paddingLeft: themeContext.spacingBaseLG,
        },
        marginRightBaseLG: {
          marginRight: themeContext.spacingBaseLG,
        },
        paddingRightBaseLG: {
          paddingRight: themeContext.spacingBaseLG,
        },
        marginBottomBaseLG: {
          marginBottom: themeContext.spacingBaseLG,
        },
        paddingBottomBaseLG: {
          paddingBottom: themeContext.spacingBaseLG,
        },
        // Base XL spacing styles.
        marginTopBaseXL: {
          marginTop: themeContext.spacingBaseXL,
        },
        paddingTopBaseXL: {
          paddingTop: themeContext.spacingBaseXL,
        },
        marginLeftBaseXL: {
          marginLeft: themeContext.spacingBaseXL,
        },
        paddingLeftBaseXL: {
          paddingLeft: themeContext.spacingBaseXL,
        },
        marginRightBaseXL: {
          marginRight: themeContext.spacingBaseXL,
        },
        paddingRightBaseXL: {
          paddingRight: themeContext.spacingBaseXL,
        },
        marginBottomBaseXL: {
          marginBottom: themeContext.spacingBaseXL,
        },
        paddingBottomBaseXL: {
          paddingBottom: themeContext.spacingBaseXL,
        },
        // Base X2L spacing styles.
        marginTopBaseX2L: {
          marginTop: themeContext.spacingBaseX2L,
        },
        paddingTopBaseX2L: {
          paddingTop: themeContext.spacingBaseX2L,
        },
        marginLeftBaseX2L: {
          marginLeft: themeContext.spacingBaseX2L,
        },
        paddingLeftBaseX2L: {
          paddingLeft: themeContext.spacingBaseX2L,
        },
        marginRightBaseX2L: {
          marginRight: themeContext.spacingBaseX2L,
        },
        paddingRightBaseX2L: {
          paddingRight: themeContext.spacingBaseX2L,
        },
        marginBottomBaseX2L: {
          marginBottom: themeContext.spacingBaseX2L,
        },
        paddingBottomBaseX2L: {
          paddingBottom: themeContext.spacingBaseX2L,
        },
        // Base X3L spacing styles.
        marginTopBaseX3L: {
          marginTop: themeContext.spacingBaseX3L,
        },
        paddingTopBaseX3L: {
          paddingTop: themeContext.spacingBaseX3L,
        },
        marginLeftBaseX3L: {
          marginLeft: themeContext.spacingBaseX3L,
        },
        paddingLeftBaseX3L: {
          paddingLeft: themeContext.spacingBaseX3L,
        },
        marginRightBaseX3L: {
          marginRight: themeContext.spacingBaseX3L,
        },
        paddingRightBaseX3L: {
          paddingRight: themeContext.spacingBaseX3L,
        },
        marginBottomBaseX3L: {
          marginBottom: themeContext.spacingBaseX3L,
        },
        paddingBottomBaseX3L: {
          paddingBottom: themeContext.spacingBaseX3L,
        },
        // Base X4L spacing styles.
        marginTopBaseX4L: {
          marginTop: themeContext.spacingBaseX4L,
        },
        paddingTopBaseX4L: {
          paddingTop: themeContext.spacingBaseX4L,
        },
        marginLeftBaseX4L: {
          marginLeft: themeContext.spacingBaseX4L,
        },
        paddingLeftBaseX4L: {
          paddingLeft: themeContext.spacingBaseX4L,
        },
        marginRightBaseX4L: {
          marginRight: themeContext.spacingBaseX4L,
        },
        paddingRightBaseX4L: {
          paddingRight: themeContext.spacingBaseX4L,
        },
        marginBottomBaseX4L: {
          marginBottom: themeContext.spacingBaseX4L,
        },
        paddingBottomBaseX4L: {
          paddingBottom: themeContext.spacingBaseX4L,
        },
        // Base X5L spacing styles.
        marginTopBaseX5L: {
          marginTop: themeContext.spacingBaseX5L,
        },
        paddingTopBaseX5L: {
          paddingTop: themeContext.spacingBaseX5L,
        },
        marginLeftBaseX5L: {
          marginLeft: themeContext.spacingBaseX5L,
        },
        paddingLeftBaseX5L: {
          paddingLeft: themeContext.spacingBaseX5L,
        },
        marginRightBaseX5L: {
          marginRight: themeContext.spacingBaseX5L,
        },
        paddingRightBaseX5L: {
          paddingRight: themeContext.spacingBaseX5L,
        },
        marginBottomBaseX5L: {
          marginBottom: themeContext.spacingBaseX5L,
        },
        paddingBottomBaseX5L: {
          paddingBottom: themeContext.spacingBaseX5L,
        },
        // Base X6L spacing styles.
        marginTopBaseX6L: {
          marginTop: themeContext.spacingBaseX6L,
        },
        paddingTopBaseX6L: {
          paddingTop: themeContext.spacingBaseX6L,
        },
        marginLeftBaseX6L: {
          marginLeft: themeContext.spacingBaseX6L,
        },
        paddingLeftBaseX6L: {
          paddingLeft: themeContext.spacingBaseX6L,
        },
        marginRightBaseX6L: {
          marginRight: themeContext.spacingBaseX6L,
        },
        paddingRightBaseX6L: {
          paddingRight: themeContext.spacingBaseX6L,
        },
        marginBottomBaseX6L: {
          marginBottom: themeContext.spacingBaseX6L,
        },
        paddingBottomBaseX6L: {
          paddingBottom: themeContext.spacingBaseX6L,
        },
        // Base X7L spacing styles.
        marginTopBaseX7L: {
          marginTop: themeContext.spacingBaseX7L,
        },
        paddingTopBaseX7L: {
          paddingTop: themeContext.spacingBaseX7L,
        },
        marginLeftBaseX7L: {
          marginLeft: themeContext.spacingBaseX7L,
        },
        paddingLeftBaseX7L: {
          paddingLeft: themeContext.spacingBaseX7L,
        },
        marginRightBaseX7L: {
          marginRight: themeContext.spacingBaseX7L,
        },
        paddingRightBaseX7L: {
          paddingRight: themeContext.spacingBaseX7L,
        },
        marginBottomBaseX7L: {
          marginBottom: themeContext.spacingBaseX7L,
        },
        paddingBottomBaseX7L: {
          paddingBottom: themeContext.spacingBaseX7L,
        },
        // Border width.
        borderWidthBaseSM: {
          borderWidth: themeContext.borderWidthBaseSM,
        },
        borderWidthBaseMD: {
          borderWidth: themeContext.borderWidthBaseMD,
        },
        borderWidthBaseLG: {
          borderWidth: themeContext.borderWidthBaseLG,
        },
        // Border radius.
        borderRadiusBaseXS: {
          borderRadius: themeContext.borderRadiusBaseXS,
        },
        borderRadiusBaseSM: {
          borderRadius: themeContext.borderRadiusBaseSM,
        },
        borderRadiusBaseMD: {
          borderRadius: themeContext.borderRadiusBaseMD,
        },
        borderRadiusBaseLG: {
          borderRadius: themeContext.borderRadiusBaseLG,
        },
        borderRadiusBaseXL: {
          borderRadius: themeContext.borderRadiusBaseXL,
        },
      }),
    [themeContext]
  )
}
