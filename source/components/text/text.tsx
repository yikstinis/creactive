import { useThemeContext } from '@/contexts'
import type { Role } from 'react-native'
import { Text as ReactNativeText, StyleSheet } from 'react-native'
import {
  TEXT_TYPE_HEADING,
  TextFontSize,
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
      style={[baseStyleSheet.fontFamilyBase, getFontSizeStyles()]}
    >
      {children}
    </ReactNativeText>
  )
}
Text.Type = TextType
Text.FontSize = TextFontSize
