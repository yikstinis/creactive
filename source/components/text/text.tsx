import { useThemeStyleSheet } from '@/hooks'
import type { Role } from 'react-native'
import { Text as ReactNativeText } from 'react-native'
import {
  TEXT_TYPE_HEADING,
  TextFontSize,
  TextFontWeight,
  TextRole,
  TextType,
} from './constants'
import type { TextComponent } from './text.types'

export const Text: TextComponent = ({
  type,
  fontWeight = TextFontWeight.REGULAR,
  fontSize = TextFontSize.MD,
  children,
}) => {
  const themeStyleSheet = useThemeStyleSheet()

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

  const getFontWeightStyle = () => {
    switch (fontWeight) {
      case TextFontWeight.THIN:
        return themeStyleSheet.fontWeightBaseThin
      case TextFontWeight.EXTRA_LIGHT:
        return themeStyleSheet.fontWeightBaseExtraLight
      case TextFontWeight.LIGHT:
        return themeStyleSheet.fontWeightBaseLight
      case TextFontWeight.REGULAR:
        return themeStyleSheet.fontWeightBaseRegular
      case TextFontWeight.SEMIBOLD:
        return themeStyleSheet.fontWeightBaseSemibold
      case TextFontWeight.BOLD:
        return themeStyleSheet.fontWeightBaseBold
      case TextFontWeight.EXTRA_BOLD:
        return themeStyleSheet.fontWeightBaseExtraBold
      case TextFontWeight.BLACK:
        return themeStyleSheet.fontWeightBaseBlack
    }
  }

  const getFontSizeStyle = () => {
    switch (fontSize) {
      case TextFontSize.X2S:
        return themeStyleSheet.fontSizeBaseX2S
      case TextFontSize.XS:
        return themeStyleSheet.fontSizeBaseXS
      case TextFontSize.SM:
        return themeStyleSheet.fontSizeBaseSM
      case TextFontSize.MD:
        return themeStyleSheet.fontSizeBaseMD
      case TextFontSize.LG:
        return themeStyleSheet.fontSizeBaseLG
      case TextFontSize.XL:
        return themeStyleSheet.fontSizeBaseXL
      case TextFontSize.X2L:
        return themeStyleSheet.fontSizeBaseX2L
      case TextFontSize.X3L:
        return themeStyleSheet.fontSizeBaseX3L
      case TextFontSize.X4L:
        return themeStyleSheet.fontSizeBaseX4L
      case TextFontSize.X5L:
        return themeStyleSheet.fontSizeBaseX5L
    }
  }

  return (
    <ReactNativeText
      role={getRole()}
      aria-level={getAriaLevel()}
      style={[
        themeStyleSheet.fontFamilyBase,
        getFontWeightStyle(),
        getFontSizeStyle(),
      ]}
    >
      {children}
    </ReactNativeText>
  )
}
Text.Type = TextType
Text.FontWeight = TextFontWeight
Text.FontSize = TextFontSize
