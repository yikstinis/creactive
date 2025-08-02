import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'
import {
  TextAlign,
  TextColor,
  TextDecoration,
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
  useTextDecorationStyle,
  useTextFontFamilyStyle,
  useTextFontSizeStyle,
  useTextFontSizeValue,
  useTextFontWeightStyle,
  useTextLineHeightValue,
  useTextOpacityValue,
} from './hooks'
import type {
  TextComponent,
  TextMeasureCallback,
  TextProperties,
  TextReference,
} from './text.types'

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
const Text = forwardRef<TextReference, TextProperties>(
  (
    {
      testId,
      textAlign = TextAlign.LEFT,
      textDecoration = TextDecoration.NONE,
      fontFamily = TextFontFamily.BASE,
      fontWeight = TextFontWeight.REGULAR,
      fontSize = TextFontSize.MD,
      lineHeight = TextLineHeight.NORMAL,
      maxLines,
      color = TextColor.BASE_800,
      opacity,
      children,
    },
    ref
  ) => {
    const nativeTextRef = useRef<ReactNativeText | undefined>(undefined)

    useImperativeHandle(ref, () => ({
      measure: (callback: TextMeasureCallback) => {
        nativeTextRef.current?.measure((x, y, width, height) => {
          callback(x, y, width, height)
        })
      },
    }))

    return (
      <ReactNativeText
        testID={testId}
        ref={nativeTextRef}
        style={[
          textStyleSheet.default,
          useTextAlignStyle(textAlign),
          useTextDecorationStyle(textDecoration),
          useTextFontFamilyStyle(fontFamily),
          useTextFontWeightStyle(fontWeight),
          useTextFontSizeStyle(fontSize),
          getLineHeightStyleSheet(
            useTextFontSizeValue(fontSize),
            useTextLineHeightValue(lineHeight)
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
)
;(Text as TextComponent).Tag = TextTag
;(Text as TextComponent).TextAlign = TextAlign
;(Text as TextComponent).TextDecoration = TextDecoration
;(Text as TextComponent).FontFamily = TextFontFamily
;(Text as TextComponent).FontWeight = TextFontWeight
;(Text as TextComponent).FontSize = TextFontSize
;(Text as TextComponent).LineHeight = TextLineHeight
;(Text as TextComponent).Color = TextColor
export default Text as TextComponent
