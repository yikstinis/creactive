import { Font } from '@/helpers'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Text as ReactNativeText, StyleSheet } from 'react-native'
import {
  TextAlign,
  TextBackgroundColor,
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
  useTextBackgroundColorStyle,
  useTextColorStyle,
  useTextDecorationStyle,
  useTextFontFamily,
  useTextFontFamilyStyle,
  useTextFontSize,
  useTextFontSizeStyle,
  useTextFontWeight,
  useTextFontWeightStyle,
  useTextLineHeight,
  useTextOpacity,
} from './hooks'
import type {
  TextComponent,
  TextMeasureCallback,
  TextProperties,
  TextReference,
} from './text.types'

const Text = forwardRef<TextReference, TextProperties>(function Text(
  {
    testId,
    textAlign = TextAlign.LEFT,
    textDecoration = TextDecoration.NONE,
    fontFamily = TextFontFamily.DEFAULT,
    fontWeight = TextFontWeight.REGULAR,
    fontSize = TextFontSize.MD,
    lineHeight = TextLineHeight.NORMAL,
    maxLines,
    color = TextColor.BASE_800,
    backgroundColor,
    opacity,
    children,
  },
  ref,
) {
  const nativeTextRef = useRef<ReactNativeText>(null)

  useImperativeHandle(ref, () => ({
    measure: (callback: TextMeasureCallback) => {
      nativeTextRef.current?.measure((x, y, width, height) => {
        callback(x, y, width, height)
      })
    },
  }))

  const font = new Font(
    useTextFontFamily(fontFamily),
    useTextFontWeight(fontWeight),
    useTextFontSize(fontSize),
    useTextLineHeight(lineHeight),
  )
  const lineHeightStyleSheet = getLineHeightStyleSheet(
    font.toSizeValue() as number,
    font.toLineHeightValue(),
  )

  return (
    <ReactNativeText
      testID={testId}
      ref={nativeTextRef}
      style={[
        textStyleSheet.default,
        useTextAlignStyle(textAlign),
        useTextDecorationStyle(textDecoration),
        useTextFontFamilyStyle(font),
        useTextFontWeightStyle(font),
        useTextFontSizeStyle(font),
        lineHeightStyleSheet.textLineHeight,
        useTextColorStyle(color),
        useTextBackgroundColorStyle(backgroundColor),
        {
          opacity: useTextOpacity(opacity),
        },
      ]}
      numberOfLines={maxLines}
    >
      {children}
    </ReactNativeText>
  )
})
const textStyleSheet = StyleSheet.create({
  default: {
    display: 'inline',
    margin: 0,
    padding: 0,
    position: 'static',
    listStyle: 'none',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    whiteSpace: 'pre-wrap',
    borderWidth: 0,
  },
})
;(Text as TextComponent).Tag = TextTag
;(Text as TextComponent).TextAlign = TextAlign
;(Text as TextComponent).TextDecoration = TextDecoration
;(Text as TextComponent).FontFamily = TextFontFamily
;(Text as TextComponent).FontWeight = TextFontWeight
;(Text as TextComponent).FontSize = TextFontSize
;(Text as TextComponent).LineHeight = TextLineHeight
;(Text as TextComponent).Color = TextColor
;(Text as TextComponent).BackgroundColor = TextBackgroundColor
export default Text as TextComponent
