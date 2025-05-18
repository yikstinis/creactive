import { Text as ReactNativeText, StyleSheet } from 'react-native'
import {
  TextAlign,
  TextColor,
  TextFontFamily,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextTag,
} from './constants'
import { getLineHeightStyleSheet } from './helpers'
import {
  useTextAlignStyle,
  useTextColorStyle,
  useTextFontSizeStyle,
  useTextFontSizeTokenValue,
  useTextFontWeightStyle,
  useTextFountFamilyStyle,
  useTextLineHeightTokenValue,
  useTextOpacityValue,
} from './hooks'
import type { TextComponent } from './text.types'

const textStyleSheet = StyleSheet.create({
  default: {
    display: 'inline',
    margin: 0,
    padding: 0,
    position: 'static',
    listStyle: 'none',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    textDecoration: 'none',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    borderWidth: 0,
  },
})
const Text: TextComponent = ({
  align = TextAlign.LEFT,
  fontFamily = TextFontFamily.BASE,
  fontWeight = TextFontWeight.REGULAR,
  fontSize = TextFontSize.MD,
  lineHeight = TextLineHeight.NORMAL,
  maxLines,
  color = TextColor.BASE_800,
  opacity,
  children,
}) => {
  return (
    <ReactNativeText
      style={[
        textStyleSheet.default,
        useTextAlignStyle(align),
        useTextFountFamilyStyle(fontFamily),
        useTextFontWeightStyle(fontWeight),
        useTextFontSizeStyle(fontSize),
        getLineHeightStyleSheet(
          useTextFontSizeTokenValue(fontSize),
          useTextLineHeightTokenValue(lineHeight)
        ),
        useTextColorStyle(color),
        {
          opacity: useTextOpacityValue(opacity),
        },
      ]}
      numberOfLines={maxLines}
    >
      {children}
    </ReactNativeText>
  )
}
Text.Tag = TextTag
Text.Align = TextAlign
Text.FontFamily = TextFontFamily
Text.FontWeight = TextFontWeight
Text.FontSize = TextFontSize
Text.LineHeight = TextLineHeight
Text.Color = TextColor
export default Text
