import { useThemeContext } from '@/contexts'
import { useThemeStyleSheet } from '@/hooks'
import { useMemo } from 'react'
import type { Role } from 'react-native'
import { Text as ReactNativeText, StyleSheet } from 'react-native'
import {
  TEXT_TYPE_HEADING,
  TextAlign,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextRole,
  TextType,
} from './constants'
import type { TextComponent } from './text.types'

const textStyleSheet = StyleSheet.create({
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
})

const lineHeightStyleSheetCache = new Map()
const getLineHeightStyleSheet = (fontSize: number, lineHeight: number) => {
  const cacheKey = [fontSize, lineHeight].join('-')
  if (lineHeightStyleSheetCache.has(cacheKey)) {
    return lineHeightStyleSheetCache.get(cacheKey)
  }
  const lineHeightStyleSheet = StyleSheet.create({
    textLineHeight: {
      lineHeight: fontSize * lineHeight,
    },
  })
  lineHeightStyleSheetCache.set(cacheKey, lineHeightStyleSheet)
  return lineHeightStyleSheet
}

export const Text: TextComponent = ({
  type,
  align = TextAlign.LEFT,
  fontWeight = TextFontWeight.REGULAR,
  fontSize = TextFontSize.MD,
  lineHeight = TextLineHeight.NONE,
  children,
}) => {
  const themeContext = useThemeContext()
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

  const getAlignStyle = () => {
    switch (align) {
      case TextAlign.LEFT:
        return textStyleSheet.textAlignLeft
      case TextAlign.CENTER:
        return textStyleSheet.textAlignCenter
      case TextAlign.RIGHT:
        return textStyleSheet.textAlignRight
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
      case TextFontWeight.MEDIUM:
        return themeStyleSheet.fontWeightBaseMedium
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

  const lineHeightStyle = useMemo(() => {
    const getFontSizeTokenValue = () => {
      switch (fontSize) {
        case TextFontSize.X2S:
          return themeContext.fontSizeBaseX2S
        case TextFontSize.XS:
          return themeContext.fontSizeBaseXS
        case TextFontSize.SM:
          return themeContext.fontSizeBaseSM
        case TextFontSize.MD:
          return themeContext.fontSizeBaseMD
        case TextFontSize.LG:
          return themeContext.fontSizeBaseLG
        case TextFontSize.XL:
          return themeContext.fontSizeBaseXL
        case TextFontSize.X2L:
          return themeContext.fontSizeBaseX2L
        case TextFontSize.X3L:
          return themeContext.fontSizeBaseX3L
        case TextFontSize.X4L:
          return themeContext.fontSizeBaseX4L
        case TextFontSize.X5L:
          return themeContext.fontSizeBaseX5L
      }
    }

    const getLineHeightTokenValue = () => {
      switch (lineHeight) {
        case TextLineHeight.NONE:
          return themeContext.lineHeightBaseNone
        case TextLineHeight.TIGHT:
          return themeContext.lineHeightBaseTight
        case TextLineHeight.SNUG:
          return themeContext.lineHeightBaseSnug
        case TextLineHeight.NORMAL:
          return themeContext.lineHeightBaseNormal
        case TextLineHeight.RELAXED:
          return themeContext.lineHeightBaseRelaxed
        case TextLineHeight.LOOSE:
          return themeContext.lineHeightBaseLoose
      }
    }

    const lineHeightStyleSheet = getLineHeightStyleSheet(
      getFontSizeTokenValue(),
      getLineHeightTokenValue()
    )
    return lineHeightStyleSheet.textLineHeight
  }, [fontSize, lineHeight, themeContext])

  return (
    <ReactNativeText
      role={getRole()}
      aria-level={getAriaLevel()}
      style={[
        themeStyleSheet.fontFamilyBase,
        getAlignStyle(),
        getFontWeightStyle(),
        getFontSizeStyle(),
        lineHeightStyle,
      ]}
    >
      {children}
    </ReactNativeText>
  )
}
Text.Type = TextType
Text.Align = TextAlign
Text.FontWeight = TextFontWeight
Text.FontSize = TextFontSize
Text.LineHeight = TextLineHeight
