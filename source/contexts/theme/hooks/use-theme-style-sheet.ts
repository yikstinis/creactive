import { useThemeContext } from '@/contexts/theme'
import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

// Create tailwind-like style sheet for each theme token.
// Some styles are shared across multiple components.
// We also export this hook outside just in case.
export const useThemeStyleSheet = () => {
  const themeContext = useThemeContext()
  // We do support 18 React version without compiler.
  // We have to memorize context values to avoid extra re-renders.
  return useMemo(
    () =>
      StyleSheet.create({
        colorBackgroundBase100: {
          backgroundColor: themeContext.colorBackgroundBase100.toValue(),
        },
        colorBackgroundBase200: {
          backgroundColor: themeContext.colorBackgroundBase200.toValue(),
        },
        colorBackgroundBase300: {
          backgroundColor: themeContext.colorBackgroundBase300.toValue(),
        },
        colorBackgroundBase400: {
          backgroundColor: themeContext.colorBackgroundBase400.toValue(),
        },
        colorBackgroundBase500: {
          backgroundColor: themeContext.colorBackgroundBase500.toValue(),
        },
        colorBackgroundBase600: {
          backgroundColor: themeContext.colorBackgroundBase600.toValue(),
        },
        colorBackgroundBase700: {
          backgroundColor: themeContext.colorBackgroundBase700.toValue(),
        },
        colorBackgroundBase800: {
          backgroundColor: themeContext.colorBackgroundBase800.toValue(),
        },
        colorBackgroundBase900: {
          backgroundColor: themeContext.colorBackgroundBase900.toValue(),
        },

        colorBackgroundPrimary100: {
          backgroundColor: themeContext.colorBackgroundPrimary100.toValue(),
        },
        colorBackgroundPrimary200: {
          backgroundColor: themeContext.colorBackgroundPrimary200.toValue(),
        },
        colorBackgroundPrimary300: {
          backgroundColor: themeContext.colorBackgroundPrimary300.toValue(),
        },
        colorBackgroundPrimary400: {
          backgroundColor: themeContext.colorBackgroundPrimary400.toValue(),
        },
        colorBackgroundPrimary500: {
          backgroundColor: themeContext.colorBackgroundPrimary500.toValue(),
        },
        colorBackgroundPrimary600: {
          backgroundColor: themeContext.colorBackgroundPrimary600.toValue(),
        },
        colorBackgroundPrimary700: {
          backgroundColor: themeContext.colorBackgroundPrimary700.toValue(),
        },
        colorBackgroundPrimary800: {
          backgroundColor: themeContext.colorBackgroundPrimary800.toValue(),
        },
        colorBackgroundPrimary900: {
          backgroundColor: themeContext.colorBackgroundPrimary900.toValue(),
        },

        colorBackgroundAccent100: {
          backgroundColor: themeContext.colorBackgroundAccent100.toValue(),
        },
        colorBackgroundAccent200: {
          backgroundColor: themeContext.colorBackgroundAccent200.toValue(),
        },
        colorBackgroundAccent300: {
          backgroundColor: themeContext.colorBackgroundAccent300.toValue(),
        },
        colorBackgroundAccent400: {
          backgroundColor: themeContext.colorBackgroundAccent400.toValue(),
        },
        colorBackgroundAccent500: {
          backgroundColor: themeContext.colorBackgroundAccent500.toValue(),
        },
        colorBackgroundAccent600: {
          backgroundColor: themeContext.colorBackgroundAccent600.toValue(),
        },
        colorBackgroundAccent700: {
          backgroundColor: themeContext.colorBackgroundAccent700.toValue(),
        },
        colorBackgroundAccent800: {
          backgroundColor: themeContext.colorBackgroundAccent800.toValue(),
        },
        colorBackgroundAccent900: {
          backgroundColor: themeContext.colorBackgroundAccent900.toValue(),
        },

        colorBackgroundSubaccent100: {
          backgroundColor: themeContext.colorBackgroundSubaccent100.toValue(),
        },
        colorBackgroundSubaccent200: {
          backgroundColor: themeContext.colorBackgroundSubaccent200.toValue(),
        },
        colorBackgroundSubaccent300: {
          backgroundColor: themeContext.colorBackgroundSubaccent300.toValue(),
        },
        colorBackgroundSubaccent400: {
          backgroundColor: themeContext.colorBackgroundSubaccent400.toValue(),
        },
        colorBackgroundSubaccent500: {
          backgroundColor: themeContext.colorBackgroundSubaccent500.toValue(),
        },
        colorBackgroundSubaccent600: {
          backgroundColor: themeContext.colorBackgroundSubaccent600.toValue(),
        },
        colorBackgroundSubaccent700: {
          backgroundColor: themeContext.colorBackgroundSubaccent700.toValue(),
        },
        colorBackgroundSubaccent800: {
          backgroundColor: themeContext.colorBackgroundSubaccent800.toValue(),
        },
        colorBackgroundSubaccent900: {
          backgroundColor: themeContext.colorBackgroundSubaccent900.toValue(),
        },

        colorBorderBase100: {
          borderColor: themeContext.colorBorderBase100.toValue(),
        },
        colorBorderBase200: {
          borderColor: themeContext.colorBorderBase200.toValue(),
        },
        colorBorderBase300: {
          borderColor: themeContext.colorBorderBase300.toValue(),
        },
        colorBorderBase400: {
          borderColor: themeContext.colorBorderBase400.toValue(),
        },
        colorBorderBase500: {
          borderColor: themeContext.colorBorderBase500.toValue(),
        },
        colorBorderBase600: {
          borderColor: themeContext.colorBorderBase600.toValue(),
        },
        colorBorderBase700: {
          borderColor: themeContext.colorBorderBase700.toValue(),
        },
        colorBorderBase800: {
          borderColor: themeContext.colorBorderBase800.toValue(),
        },
        colorBorderBase900: {
          borderColor: themeContext.colorBorderBase900.toValue(),
        },

        outlineColorBorderBase100: {
          outlineColor: themeContext.colorBorderBase100.toValue(),
        },
        outlineColorBorderBase200: {
          outlineColor: themeContext.colorBorderBase200.toValue(),
        },
        outlineColorBorderBase300: {
          outlineColor: themeContext.colorBorderBase300.toValue(),
        },
        outlineColorBorderBase400: {
          outlineColor: themeContext.colorBorderBase400.toValue(),
        },
        outlineColorBorderBase500: {
          outlineColor: themeContext.colorBorderBase500.toValue(),
        },
        outlineColorBorderBase600: {
          outlineColor: themeContext.colorBorderBase600.toValue(),
        },
        outlineColorBorderBase700: {
          outlineColor: themeContext.colorBorderBase700.toValue(),
        },
        outlineColorBorderBase800: {
          outlineColor: themeContext.colorBorderBase800.toValue(),
        },
        outlineColorBorderBase900: {
          outlineColor: themeContext.colorBorderBase900.toValue(),
        },

        colorForegroundBase100: {
          color: themeContext.colorForegroundBase100.toValue(),
        },
        colorForegroundBase200: {
          color: themeContext.colorForegroundBase200.toValue(),
        },
        colorForegroundBase300: {
          color: themeContext.colorForegroundBase300.toValue(),
        },
        colorForegroundBase400: {
          color: themeContext.colorForegroundBase400.toValue(),
        },
        colorForegroundBase500: {
          color: themeContext.colorForegroundBase500.toValue(),
        },
        colorForegroundBase600: {
          color: themeContext.colorForegroundBase600.toValue(),
        },
        colorForegroundBase700: {
          color: themeContext.colorForegroundBase700.toValue(),
        },
        colorForegroundBase800: {
          color: themeContext.colorForegroundBase800.toValue(),
        },
        colorForegroundBase900: {
          color: themeContext.colorForegroundBase900.toValue(),
        },

        colorForegroundInverse100: {
          color: themeContext.colorForegroundInverse100.toValue(),
        },
        colorForegroundInverse200: {
          color: themeContext.colorForegroundInverse200.toValue(),
        },
        colorForegroundInverse300: {
          color: themeContext.colorForegroundInverse300.toValue(),
        },
        colorForegroundInverse400: {
          color: themeContext.colorForegroundInverse400.toValue(),
        },
        colorForegroundInverse500: {
          color: themeContext.colorForegroundInverse500.toValue(),
        },
        colorForegroundInverse600: {
          color: themeContext.colorForegroundInverse600.toValue(),
        },
        colorForegroundInverse700: {
          color: themeContext.colorForegroundInverse700.toValue(),
        },
        colorForegroundInverse800: {
          color: themeContext.colorForegroundInverse800.toValue(),
        },
        colorForegroundInverse900: {
          color: themeContext.colorForegroundInverse900.toValue(),
        },

        colorForegroundFailure100: {
          color: themeContext.colorForegroundFailure100.toValue(),
        },
        colorForegroundFailure200: {
          color: themeContext.colorForegroundFailure200.toValue(),
        },
        colorForegroundFailure300: {
          color: themeContext.colorForegroundFailure300.toValue(),
        },
        colorForegroundFailure400: {
          color: themeContext.colorForegroundFailure400.toValue(),
        },
        colorForegroundFailure500: {
          color: themeContext.colorForegroundFailure500.toValue(),
        },
        colorForegroundFailure600: {
          color: themeContext.colorForegroundFailure600.toValue(),
        },
        colorForegroundFailure700: {
          color: themeContext.colorForegroundFailure700.toValue(),
        },
        colorForegroundFailure800: {
          color: themeContext.colorForegroundFailure800.toValue(),
        },
        colorForegroundFailure900: {
          color: themeContext.colorForegroundFailure900.toValue(),
        },

        fontFamilyDefault: {
          fontFamily: themeContext.fontFamilyDefault,
        },
        fontFamilyTypographic: {
          fontFamily: themeContext.fontFamilyTypographic,
        },

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
        fontSizeBaseX6L: {
          fontSize: themeContext.fontSizeBaseX6L,
        },

        gapBaseX6S: {
          gap: themeContext.spacingBaseX6S,
        },
        gapBaseX5S: {
          gap: themeContext.spacingBaseX5S,
        },
        gapBaseX4S: {
          gap: themeContext.spacingBaseX4S,
        },
        gapBaseX3S: {
          gap: themeContext.spacingBaseX3S,
        },
        gapBaseX2S: {
          gap: themeContext.spacingBaseX2S,
        },
        gapBaseXS: {
          gap: themeContext.spacingBaseXS,
        },
        gapBaseSM: {
          gap: themeContext.spacingBaseSM,
        },
        gapBaseMD: {
          gap: themeContext.spacingBaseMD,
        },
        gapBaseLG: {
          gap: themeContext.spacingBaseLG,
        },
        gapBaseXL: {
          gap: themeContext.spacingBaseXL,
        },
        gapBaseX2L: {
          gap: themeContext.spacingBaseX2L,
        },
        gapBaseX3L: {
          gap: themeContext.spacingBaseX3L,
        },
        gapBaseX4L: {
          gap: themeContext.spacingBaseX4L,
        },
        gapBaseX5L: {
          gap: themeContext.spacingBaseX5L,
        },
        gapBaseX6L: {
          gap: themeContext.spacingBaseX6L,
        },

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

        borderWidthBaseSM: {
          borderWidth: themeContext.borderWidthBaseSM.toValue() as number,
        },
        borderWidthBaseMD: {
          borderWidth: themeContext.borderWidthBaseMD.toValue() as number,
        },
        borderWidthBaseLG: {
          borderWidth: themeContext.borderWidthBaseLG.toValue() as number,
        },
        borderWidthTopBaseSM: {
          borderTopWidth: themeContext.borderWidthBaseSM.toValue() as number,
        },
        borderWidthTopBaseMD: {
          borderTopWidth: themeContext.borderWidthBaseMD.toValue() as number,
        },
        borderWidthTopBaseLG: {
          borderTopWidth: themeContext.borderWidthBaseLG.toValue() as number,
        },
        borderWidthLeftBaseSM: {
          borderLeftWidth: themeContext.borderWidthBaseSM.toValue() as number,
        },
        borderWidthLeftBaseMD: {
          borderLeftWidth: themeContext.borderWidthBaseMD.toValue() as number,
        },
        borderWidthLeftBaseLG: {
          borderLeftWidth: themeContext.borderWidthBaseLG.toValue() as number,
        },
        borderWidthRightBaseSM: {
          borderRightWidth: themeContext.borderWidthBaseSM.toValue() as number,
        },
        borderWidthRightBaseMD: {
          borderRightWidth: themeContext.borderWidthBaseMD.toValue() as number,
        },
        borderWidthRightBaseLG: {
          borderRightWidth: themeContext.borderWidthBaseLG.toValue() as number,
        },
        borderWidthBottomBaseSM: {
          borderBottomWidth: themeContext.borderWidthBaseSM.toValue() as number,
        },
        borderWidthBottomBaseMD: {
          borderBottomWidth: themeContext.borderWidthBaseMD.toValue() as number,
        },
        borderWidthBottomBaseLG: {
          borderBottomWidth: themeContext.borderWidthBaseLG.toValue() as number,
        },

        borderRadiusBaseXS: {
          borderRadius: themeContext.borderRadiusBaseXS.toValue() as number,
        },
        borderRadiusBaseSM: {
          borderRadius: themeContext.borderRadiusBaseSM.toValue() as number,
        },
        borderRadiusBaseMD: {
          borderRadius: themeContext.borderRadiusBaseMD.toValue() as number,
        },
        borderRadiusBaseLG: {
          borderRadius: themeContext.borderRadiusBaseLG.toValue() as number,
        },
        borderRadiusBaseXL: {
          borderRadius: themeContext.borderRadiusBaseXL.toValue() as number,
        },
        borderRadiusBaseX2L: {
          borderRadius: themeContext.borderRadiusBaseX2L.toValue() as number,
        },
        borderRadiusBaseX3L: {
          borderRadius: themeContext.borderRadiusBaseX3L.toValue() as number,
        },
        borderRadiusBaseX4L: {
          borderRadius: themeContext.borderRadiusBaseX4L.toValue() as number,
        },
        borderRadiusBaseX5L: {
          borderRadius: themeContext.borderRadiusBaseX5L.toValue() as number,
        },
        borderRadiusBaseX6L: {
          borderRadius: themeContext.borderRadiusBaseX6L.toValue() as number,
        },
        borderRadiusBaseX7L: {
          borderRadius: themeContext.borderRadiusBaseX7L.toValue() as number,
        },
        borderTopLeftRadiusBaseXS: {
          borderTopLeftRadius: themeContext.borderRadiusBaseXS.toValue() as number,
        },
        borderTopLeftRadiusBaseSM: {
          borderTopLeftRadius: themeContext.borderRadiusBaseSM.toValue() as number,
        },
        borderTopLeftRadiusBaseMD: {
          borderTopLeftRadius: themeContext.borderRadiusBaseMD.toValue() as number,
        },
        borderTopLeftRadiusBaseLG: {
          borderTopLeftRadius: themeContext.borderRadiusBaseLG.toValue() as number,
        },
        borderTopLeftRadiusBaseXL: {
          borderTopLeftRadius: themeContext.borderRadiusBaseXL.toValue() as number,
        },
        borderTopLeftRadiusBaseX2L: {
          borderTopLeftRadius: themeContext.borderRadiusBaseX2L.toValue() as number,
        },
        borderTopLeftRadiusBaseX3L: {
          borderTopLeftRadius: themeContext.borderRadiusBaseX3L.toValue() as number,
        },
        borderTopLeftRadiusBaseX4L: {
          borderTopLeftRadius: themeContext.borderRadiusBaseX4L.toValue() as number,
        },
        borderTopLeftRadiusBaseX5L: {
          borderTopLeftRadius: themeContext.borderRadiusBaseX5L.toValue() as number,
        },
        borderTopLeftRadiusBaseX6L: {
          borderTopLeftRadius: themeContext.borderRadiusBaseX6L.toValue() as number,
        },
        borderTopLeftRadiusBaseX7L: {
          borderTopLeftRadius: themeContext.borderRadiusBaseX7L.toValue() as number,
        },
        borderTopRightRadiusBaseXS: {
          borderTopRightRadius: themeContext.borderRadiusBaseXS.toValue() as number,
        },
        borderTopRightRadiusBaseSM: {
          borderTopRightRadius: themeContext.borderRadiusBaseSM.toValue() as number,
        },
        borderTopRightRadiusBaseMD: {
          borderTopRightRadius: themeContext.borderRadiusBaseMD.toValue() as number,
        },
        borderTopRightRadiusBaseLG: {
          borderTopRightRadius: themeContext.borderRadiusBaseLG.toValue() as number,
        },
        borderTopRightRadiusBaseXL: {
          borderTopRightRadius: themeContext.borderRadiusBaseXL.toValue() as number,
        },
        borderTopRightRadiusBaseX2L: {
          borderTopRightRadius: themeContext.borderRadiusBaseX2L.toValue() as number,
        },
        borderTopRightRadiusBaseX3L: {
          borderTopRightRadius: themeContext.borderRadiusBaseX3L.toValue() as number,
        },
        borderTopRightRadiusBaseX4L: {
          borderTopRightRadius: themeContext.borderRadiusBaseX4L.toValue() as number,
        },
        borderTopRightRadiusBaseX5L: {
          borderTopRightRadius: themeContext.borderRadiusBaseX5L.toValue() as number,
        },
        borderTopRightRadiusBaseX6L: {
          borderTopRightRadius: themeContext.borderRadiusBaseX6L.toValue() as number,
        },
        borderTopRightRadiusBaseX7L: {
          borderTopRightRadius: themeContext.borderRadiusBaseX7L.toValue() as number,
        },
        borderBottomLeftRadiusBaseXS: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseXS.toValue() as number,
        },
        borderBottomLeftRadiusBaseSM: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseSM.toValue() as number,
        },
        borderBottomLeftRadiusBaseMD: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseMD.toValue() as number,
        },
        borderBottomLeftRadiusBaseLG: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseLG.toValue() as number,
        },
        borderBottomLeftRadiusBaseXL: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseXL.toValue() as number,
        },
        borderBottomLeftRadiusBaseX2L: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseX2L.toValue() as number,
        },
        borderBottomLeftRadiusBaseX3L: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseX3L.toValue() as number,
        },
        borderBottomLeftRadiusBaseX4L: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseX4L.toValue() as number,
        },
        borderBottomLeftRadiusBaseX5L: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseX5L.toValue() as number,
        },
        borderBottomLeftRadiusBaseX6L: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseX6L.toValue() as number,
        },
        borderBottomLeftRadiusBaseX7L: {
          borderBottomLeftRadius: themeContext.borderRadiusBaseX7L.toValue() as number,
        },
        borderBottomRightRadiusBaseXS: {
          borderBottomRightRadius: themeContext.borderRadiusBaseXS.toValue() as number,
        },
        borderBottomRightRadiusBaseSM: {
          borderBottomRightRadius: themeContext.borderRadiusBaseSM.toValue() as number,
        },
        borderBottomRightRadiusBaseMD: {
          borderBottomRightRadius: themeContext.borderRadiusBaseMD.toValue() as number,
        },
        borderBottomRightRadiusBaseLG: {
          borderBottomRightRadius: themeContext.borderRadiusBaseLG.toValue() as number,
        },
        borderBottomRightRadiusBaseXL: {
          borderBottomRightRadius: themeContext.borderRadiusBaseXL.toValue() as number,
        },
        borderBottomRightRadiusBaseX2L: {
          borderBottomRightRadius: themeContext.borderRadiusBaseX2L.toValue() as number,
        },
        borderBottomRightRadiusBaseX3L: {
          borderBottomRightRadius: themeContext.borderRadiusBaseX3L.toValue() as number,
        },
        borderBottomRightRadiusBaseX4L: {
          borderBottomRightRadius: themeContext.borderRadiusBaseX4L.toValue() as number,
        },
        borderBottomRightRadiusBaseX5L: {
          borderBottomRightRadius: themeContext.borderRadiusBaseX5L.toValue() as number,
        },
        borderBottomRightRadiusBaseX6L: {
          borderBottomRightRadius: themeContext.borderRadiusBaseX6L.toValue() as number,
        },
        borderBottomRightRadiusBaseX7L: {
          borderBottomRightRadius: themeContext.borderRadiusBaseX7L.toValue() as number,
        },
      }),
    [themeContext],
  )
}
