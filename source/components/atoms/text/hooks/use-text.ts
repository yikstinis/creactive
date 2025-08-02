import { useThemeContext } from '@/contexts'
import { StyleSheet } from 'react-native'
import {
  TextAlign,
  TextDecoration,
  TextLineHeight,
  TextTag,
} from '../constants'

const textDecorationStyleSheet = StyleSheet.create({
  textDecorationNone: {
    textDecorationLine: 'none',
  },
  textDecorationUnderline: {
    textDecorationLine: 'underline',
  },
})
const TEXT_DECORATION_STYLES = {
  [TextDecoration.NONE]: textDecorationStyleSheet.textDecorationNone,
  [TextDecoration.UNDERLINE]: textDecorationStyleSheet.textDecorationUnderline,
}
export const useTextDecorationStyle = (textDecoration: TextDecoration) =>
  TEXT_DECORATION_STYLES[textDecoration]

const TEXT_DECORATION_VALUE = {
  [TextDecoration.NONE]: 'none' as const,
  [TextDecoration.UNDERLINE]: 'underline' as const,
}
export const useTextDecorationValue = (textDecoration: TextDecoration) =>
  TEXT_DECORATION_VALUE[textDecoration]

const textAlignStyleSheet = StyleSheet.create({
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
const TEXT_ALIGN_STYLES = {
  [TextAlign.LEFT]: textAlignStyleSheet.textAlignLeft,
  [TextAlign.CENTER]: textAlignStyleSheet.textAlignCenter,
  [TextAlign.RIGHT]: textAlignStyleSheet.textAlignRight,
}
export const useTextAlignStyle = (align: TextAlign) => TEXT_ALIGN_STYLES[align]

const TEXT_ALIGN_VALUE = {
  [TextAlign.LEFT]: 'left' as const,
  [TextAlign.CENTER]: 'center' as const,
  [TextAlign.RIGHT]: 'right' as const,
}
export const useTextAlignValue = (align: TextAlign) => TEXT_ALIGN_VALUE[align]

export const TEXT_THEME_LINE_HEIGHT_KEY = {
  [TextLineHeight.NONE]: 'lineHeightBaseNone' as const,
  [TextLineHeight.TIGHT]: 'lineHeightBaseTight' as const,
  [TextLineHeight.SNUG]: 'lineHeightBaseSnug' as const,
  [TextLineHeight.NORMAL]: 'lineHeightBaseNormal' as const,
  [TextLineHeight.RELAXED]: 'lineHeightBaseRelaxed' as const,
  [TextLineHeight.LOOSE]: 'lineHeightBaseLoose' as const,
}
export const useTextLineHeightValue = (lineHeight: TextLineHeight) =>
  useThemeContext()[TEXT_THEME_LINE_HEIGHT_KEY[lineHeight]]

const TEXT_TAG_VALUE = {
  [TextTag.SPAN]: 'span' as const,
  [TextTag.P]: 'p' as const,
  [TextTag.H1]: 'h1' as const,
  [TextTag.H2]: 'h2' as const,
  [TextTag.H3]: 'h3' as const,
  [TextTag.H4]: 'h4' as const,
  [TextTag.H5]: 'h5' as const,
  [TextTag.H6]: 'h6' as const,
}
export const useTextTag = (tag: TextTag) => TEXT_TAG_VALUE[tag]
