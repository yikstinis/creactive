import { useThemeContext } from '@/contexts'
import type { Role } from 'react-native'
import { Text as ReactNativeText, StyleSheet } from 'react-native'
import {
  TEXT_TYPE_HEADING,
  TextFontSize,
  TextFontWeight,
  TextRole,
  TextType,
} from './constants'
import type { BaseStyleSheetParameters, TextComponent } from './text.types'

/**
 * Creates optimized static stylesheet for component.
 * We should put here as much styles as possible to improve performance.
 * Syles, created here can't be changed during component lifecycle.
 */
const createBaseStyleSheet = ({
  fontFamilyBase,
  fontWeightBaseThin,
  fontWeightBaseExtraLight,
  fontWeightBaseLight,
  fontWeightBaseRegular,
  fontWeightBaseSemibold,
  fontWeightBaseBold,
  fontWeightBaseExtraBold,
  fontWeightBaseBlack,
  fontSizeBaseX2S,
  fontSizeBaseXS,
  fontSizeBaseSM,
  fontSizeBaseMD,
  fontSizeBaseLG,
  fontSizeBaseXL,
  fontSizeBaseX2L,
  fontSizeBaseX3L,
  fontSizeBaseX4L,
  fontSizeBaseX5L,
}: BaseStyleSheetParameters) =>
  StyleSheet.create({
    fontFamilyBase: {
      fontFamily: fontFamilyBase,
    },
    fontWeightThin: {
      fontWeight: fontWeightBaseThin,
    },
    fontWeightExtraLight: {
      fontWeight: fontWeightBaseExtraLight,
    },
    fontWeightLight: {
      fontWeight: fontWeightBaseLight,
    },
    fontWeightBaseRegular: {
      fontWeight: fontWeightBaseRegular,
    },
    fontWeightBaseSemibold: {
      fontWeight: fontWeightBaseSemibold,
    },
    fontWeightBaseBold: {
      fontWeight: fontWeightBaseBold,
    },
    fontWeightBaseExtraBold: {
      fontWeight: fontWeightBaseExtraBold,
    },
    fontWeightBaseBlack: {
      fontWeight: fontWeightBaseBlack,
    },
    fontSizeBaseX2S: {
      fontSize: fontSizeBaseX2S,
    },
    fontSizeBaseXS: {
      fontSize: fontSizeBaseXS,
    },
    fontSizeBaseSM: {
      fontSize: fontSizeBaseSM,
    },
    fontSizeBaseMD: {
      fontSize: fontSizeBaseMD,
    },
    fontSizeBaseLG: {
      fontSize: fontSizeBaseLG,
    },
    fontSizeBaseXL: {
      fontSize: fontSizeBaseXL,
    },
    fontSizeBaseX2L: {
      fontSize: fontSizeBaseX2L,
    },
    fontSizeBaseX3L: {
      fontSize: fontSizeBaseX3L,
    },
    fontSizeBaseX4L: {
      fontSize: fontSizeBaseX4L,
    },
    fontSizeBaseX5L: {
      fontSize: fontSizeBaseX5L,
    },
  })

export const Text: TextComponent = ({
  type,
  fontWeight = TextFontWeight.REGULAR,
  fontSize = TextFontSize.MD,
  children,
}) => {
  const themeContext = useThemeContext()

  const getRole = () => {
    // Casting paragraph role type because it is supported by react-native-web.
    // As a result - text would be rendered to paragraph tag...
    if (TextType.P === type) return TextRole.PARAGRAPH as Role
    if (TEXT_TYPE_HEADING.includes(type)) return TextRole.HEADING
  }

  const getAriaLevel = () => {
    if (TEXT_TYPE_HEADING.includes(type)) {
      if (type === TextType.H1) return 1
      if (type === TextType.H2) return 2
      if (type === TextType.H3) return 3
      if (type === TextType.H4) return 4
      if (type === TextType.H5) return 5
      if (type === TextType.H6) return 6
    }
  }

  const baseStyleSheet = createBaseStyleSheet({
    fontFamilyBase: themeContext.fontFamilyBase,
    fontWeightBaseThin: themeContext.fontWeightBaseThin,
    fontWeightBaseExtraLight: themeContext.fontWeightBaseExtraLight,
    fontWeightBaseLight: themeContext.fontWeightBaseLight,
    fontWeightBaseRegular: themeContext.fontWeightBaseRegular,
    fontWeightBaseSemibold: themeContext.fontWeightBaseSemibold,
    fontWeightBaseBold: themeContext.fontWeightBaseBold,
    fontWeightBaseExtraBold: themeContext.fontWeightBaseExtraBold,
    fontWeightBaseBlack: themeContext.fontWeightBaseBlack,
    fontSizeBaseX2S: themeContext.fontSizeBaseX2S,
    fontSizeBaseXS: themeContext.fontSizeBaseXS,
    fontSizeBaseSM: themeContext.fontSizeBaseSM,
    fontSizeBaseMD: themeContext.fontSizeBaseMD,
    fontSizeBaseLG: themeContext.fontSizeBaseLG,
    fontSizeBaseXL: themeContext.fontSizeBaseXL,
    fontSizeBaseX2L: themeContext.fontSizeBaseX2L,
    fontSizeBaseX3L: themeContext.fontSizeBaseX3L,
    fontSizeBaseX4L: themeContext.fontSizeBaseX4L,
    fontSizeBaseX5L: themeContext.fontSizeBaseX5L,
  })

  const getFontWeightStyles = () => {
    switch (fontWeight) {
      case TextFontWeight.THIN:
        return baseStyleSheet.fontWeightThin
      case TextFontWeight.EXTRA_LIGHT:
        return baseStyleSheet.fontWeightExtraLight
      case TextFontWeight.LIGHT:
        return baseStyleSheet.fontWeightLight
      case TextFontWeight.REGULAR:
        return baseStyleSheet.fontWeightBaseRegular
      case TextFontWeight.SEMIBOLD:
        return baseStyleSheet.fontWeightBaseSemibold
      case TextFontWeight.BOLD:
        return baseStyleSheet.fontWeightBaseBold
      case TextFontWeight.EXTRA_BOLD:
        return baseStyleSheet.fontWeightBaseExtraBold
      case TextFontWeight.BLACK:
        return baseStyleSheet.fontWeightBaseBlack
    }
  }

  const getFontSizeStyles = () => {
    switch (fontSize) {
      case TextFontSize.X2S:
        return baseStyleSheet.fontSizeBaseX2S
      case TextFontSize.XS:
        return baseStyleSheet.fontSizeBaseXS
      case TextFontSize.SM:
        return baseStyleSheet.fontSizeBaseSM
      case TextFontSize.MD:
        return baseStyleSheet.fontSizeBaseMD
      case TextFontSize.LG:
        return baseStyleSheet.fontSizeBaseLG
      case TextFontSize.XL:
        return baseStyleSheet.fontSizeBaseXL
      case TextFontSize.X2L:
        return baseStyleSheet.fontSizeBaseX2L
      case TextFontSize.X3L:
        return baseStyleSheet.fontSizeBaseX3L
      case TextFontSize.X4L:
        return baseStyleSheet.fontSizeBaseX4L
      case TextFontSize.X5L:
        return baseStyleSheet.fontSizeBaseX5L
    }
  }

  return (
    <ReactNativeText
      role={getRole()}
      aria-level={getAriaLevel()}
      style={[
        baseStyleSheet.fontFamilyBase,
        getFontWeightStyles(),
        getFontSizeStyles(),
      ]}
    >
      {children}
    </ReactNativeText>
  )
}
Text.Type = TextType
Text.FontWeight = TextFontWeight
Text.FontSize = TextFontSize
