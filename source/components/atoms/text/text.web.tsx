import { forwardRef, useImperativeHandle, useRef } from 'react'
import { TextStyled } from './components'
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
import {
  useTextAlignValue,
  useTextColorValue,
  useTextDecorationValue,
  useTextFontFamilyValue,
  useTextFontSizeValue,
  useTextFontWeightValue,
  useTextLineHeightValue,
  useTextOpacityValue,
  useTextTag,
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
    tag,
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
  ref,
) {
  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    measure: (callback: TextMeasureCallback) => {
      const boundingClientRect = elementRef.current?.getBoundingClientRect()
      if (boundingClientRect) {
        callback(
          boundingClientRect.x,
          boundingClientRect.y,
          boundingClientRect.width,
          boundingClientRect.height,
        )
      }
    },
  }))

  const fontSizeValue = useTextFontSizeValue(fontSize)
  const lineHeightValue = useTextLineHeightValue(lineHeight)

  return (
    <TextStyled
      data-testid={testId}
      ref={elementRef}
      as={useTextTag(tag)}
      css={{
        textAlign: useTextAlignValue(textAlign),
        textDecoration: useTextDecorationValue(textDecoration),
        fontFamily: useTextFontFamilyValue(fontFamily),
        fontWeight: useTextFontWeightValue(fontWeight),
        fontSize: fontSizeValue,
        lineHeight: fontSizeValue * lineHeightValue,
        maxLines,
        color: useTextColorValue(color),
        opacity: useTextOpacityValue(opacity),
      }}
    >
      {children}
    </TextStyled>
  )
})
;(Text as TextComponent).Tag = TextTag
;(Text as TextComponent).TextAlign = TextAlign
;(Text as TextComponent).TextDecoration = TextDecoration
;(Text as TextComponent).FontFamily = TextFontFamily
;(Text as TextComponent).FontWeight = TextFontWeight
;(Text as TextComponent).FontSize = TextFontSize
;(Text as TextComponent).LineHeight = TextLineHeight
;(Text as TextComponent).Color = TextColor
export default Text as TextComponent
