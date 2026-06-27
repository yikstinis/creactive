import { useThemeContext } from '@/contexts'
import { StyleSheet } from 'react-native'
import { TextAlign, TextDecoration, TextLineHeight } from '../constants'

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
export const useTextDecoration = (textDecoration: TextDecoration) =>
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
export const useTextAlign = (align: TextAlign) => TEXT_ALIGN_VALUE[align]

export const TEXT_LINE_HEIGHT_KEY = {
  [TextLineHeight.NONE]: 'lineHeightBaseNone' as const,
  [TextLineHeight.TIGHT]: 'lineHeightBaseTight' as const,
  [TextLineHeight.SNUG]: 'lineHeightBaseSnug' as const,
  [TextLineHeight.NORMAL]: 'lineHeightBaseNormal' as const,
  [TextLineHeight.RELAXED]: 'lineHeightBaseRelaxed' as const,
  [TextLineHeight.LOOSE]: 'lineHeightBaseLoose' as const,
}
export const useTextLineHeight = (lineHeight: TextLineHeight) =>
  useThemeContext()[TEXT_LINE_HEIGHT_KEY[lineHeight]]
