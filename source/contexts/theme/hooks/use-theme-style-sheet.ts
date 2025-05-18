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
        // Base background colors.
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
        // Base foreground colors.
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
        // Inverse foreground colors.
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
        // Base font family.
        fontFamilyBase: {
          fontFamily: themeContext.fontFamilyBase,
        },
        fontFamilyTypographic: {
          fontFamily: themeContext.fontFamilyTypographic,
        },
        // Base font weights.
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
        fontWeightBaseSemiBold: {
          fontWeight: themeContext.fontWeightBaseSemiBold,
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
        // Base font sizes.
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
        // Base spacings.
        marginTopBaseX6S: {
          marginTop: themeContext.spacingBaseX6S,
        },
        paddingTopBaseX6S: {
          paddingTop: themeContext.spacingBaseX6S,
        },
        marginLeftBaseX6S: {
          marginLeft: themeContext.spacingBaseX6S,
        },
        paddingLeftBaseX6S: {
          paddingLeft: themeContext.spacingBaseX6S,
        },
        marginRightBaseX6S: {
          marginRight: themeContext.spacingBaseX6S,
        },
        paddingRightBaseX6S: {
          paddingRight: themeContext.spacingBaseX6S,
        },
        marginBottomBaseX6S: {
          marginBottom: themeContext.spacingBaseX6S,
        },
        paddingBottomBaseX6S: {
          paddingBottom: themeContext.spacingBaseX6S,
        },
        marginTopBaseX5S: {
          marginTop: themeContext.spacingBaseX5S,
        },
        paddingTopBaseX5S: {
          paddingTop: themeContext.spacingBaseX5S,
        },
        marginLeftBaseX5S: {
          marginLeft: themeContext.spacingBaseX5S,
        },
        paddingLeftBaseX5S: {
          paddingLeft: themeContext.spacingBaseX5S,
        },
        marginRightBaseX5S: {
          marginRight: themeContext.spacingBaseX5S,
        },
        paddingRightBaseX5S: {
          paddingRight: themeContext.spacingBaseX5S,
        },
        marginBottomBaseX5S: {
          marginBottom: themeContext.spacingBaseX5S,
        },
        paddingBottomBaseX5S: {
          paddingBottom: themeContext.spacingBaseX5S,
        },
        marginTopBaseX4S: {
          marginTop: themeContext.spacingBaseX4S,
        },
        paddingTopBaseX4S: {
          paddingTop: themeContext.spacingBaseX4S,
        },
        marginLeftBaseX4S: {
          marginLeft: themeContext.spacingBaseX4S,
        },
        paddingLeftBaseX4S: {
          paddingLeft: themeContext.spacingBaseX4S,
        },
        marginRightBaseX4S: {
          marginRight: themeContext.spacingBaseX4S,
        },
        paddingRightBaseX4S: {
          paddingRight: themeContext.spacingBaseX4S,
        },
        marginBottomBaseX4S: {
          marginBottom: themeContext.spacingBaseX4S,
        },
        paddingBottomBaseX4S: {
          paddingBottom: themeContext.spacingBaseX4S,
        },
        marginTopBaseX3S: {
          marginTop: themeContext.spacingBaseX3S,
        },
        paddingTopBaseX3S: {
          paddingTop: themeContext.spacingBaseX3S,
        },
        marginLeftBaseX3S: {
          marginLeft: themeContext.spacingBaseX3S,
        },
        paddingLeftBaseX3S: {
          paddingLeft: themeContext.spacingBaseX3S,
        },
        marginRightBaseX3S: {
          marginRight: themeContext.spacingBaseX3S,
        },
        paddingRightBaseX3S: {
          paddingRight: themeContext.spacingBaseX3S,
        },
        marginBottomBaseX3S: {
          marginBottom: themeContext.spacingBaseX3S,
        },
        paddingBottomBaseX3S: {
          paddingBottom: themeContext.spacingBaseX3S,
        },
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
        // Base border widths.
        borderWidthBaseSM: {
          borderWidth: themeContext.borderWidthBaseSM,
        },
        borderWidthBaseMD: {
          borderWidth: themeContext.borderWidthBaseMD,
        },
        borderWidthBaseLG: {
          borderWidth: themeContext.borderWidthBaseLG,
        },
        borderWidthTopBaseSM: {
          borderTopWidth: themeContext.borderWidthBaseSM,
        },
        borderWidthTopBaseMD: {
          borderTopWidth: themeContext.borderWidthBaseMD,
        },
        borderWidthTopBaseLG: {
          borderTopWidth: themeContext.borderWidthBaseLG,
        },
        borderWidthLeftBaseSM: {
          borderLeftWidth: themeContext.borderWidthBaseSM,
        },
        borderWidthLeftBaseMD: {
          borderLeftWidth: themeContext.borderWidthBaseMD,
        },
        borderWidthLeftBaseLG: {
          borderLeftWidth: themeContext.borderWidthBaseLG,
        },
        borderWidthRightBaseSM: {
          borderRightWidth: themeContext.borderWidthBaseSM,
        },
        borderWidthRightBaseMD: {
          borderRightWidth: themeContext.borderWidthBaseMD,
        },
        borderWidthRightBaseLG: {
          borderRightWidth: themeContext.borderWidthBaseLG,
        },
        borderWidthBottomBaseSM: {
          borderBottomWidth: themeContext.borderWidthBaseSM,
        },
        borderWidthBottomBaseMD: {
          borderBottomWidth: themeContext.borderWidthBaseMD,
        },
        borderWidthBottomBaseLG: {
          borderBottomWidth: themeContext.borderWidthBaseLG,
        },
        // Base border radiuses.
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
