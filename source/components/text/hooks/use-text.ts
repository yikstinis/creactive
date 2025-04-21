import { useThemeContext } from '@/contexts'
import { StyleSheet } from 'react-native'
import {
  TEXT_THEME_LINE_HEIGHT_KEY,
  TextAlign,
  TextLineHeight,
} from '../constants'

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

export const useTextLineHeightTokenValue = (lineHeight: TextLineHeight) =>
  useThemeContext()[TEXT_THEME_LINE_HEIGHT_KEY[lineHeight]]
