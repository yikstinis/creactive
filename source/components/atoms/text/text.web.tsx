import { Font } from '@/helpers'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { TextStyled } from './components'
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
import {
  useTextAlign,
  useTextBackgroundColor,
  useTextColor,
  useTextDecoration,
  useTextFontFamily,
  useTextFontSize,
  useTextFontWeight,
  useTextLineHeight,
  useTextOpacity,
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
    tag = TextTag.SPAN,
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

  const themeFontFamily = useTextFontFamily(fontFamily)
  const themeFontWeight = useTextFontWeight(fontWeight)
  const themeFontSize = useTextFontSize(fontSize)
  const themeLineHeight = useTextLineHeight(lineHeight)

  const font = useMemo(
    () =>
      new Font(
        themeFontFamily,
        themeFontWeight,
        themeFontSize,
        themeLineHeight,
      ),
    [themeFontFamily, themeFontWeight, themeFontSize, themeLineHeight],
  )

  return (
    <TextStyled
      data-testid={testId}
      ref={elementRef}
      as={useTextTag(tag)}
      css={{
        textAlign: useTextAlign(textAlign),
        textDecoration: useTextDecoration(textDecoration),
        fontFamily: font.toFamilyValue(),
        fontWeight: font.toWeightValue(),
        fontSize: font.toSizeValue(),
        lineHeight: font.calculateLineHeight(),
        maxLines,
        color: useTextColor(color),
        backgroundColor: useTextBackgroundColor(backgroundColor),
        opacity: useTextOpacity(opacity),
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
;(Text as TextComponent).BackgroundColor = TextBackgroundColor
export default Text as TextComponent
