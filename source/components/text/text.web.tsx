import { forwardRef, useImperativeHandle, useRef } from 'react'
import { StyledText } from './components'
import {
  TEXT_HTML_TAG,
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
  useTextColorCSSValue,
  useTextFontSizeTokenValue,
  useTextFontWeightCSSValue,
  useTextFountFamilyCSSValue,
  useTextLineHeightTokenValue,
  useTextOpacityValue,
} from './hooks'
import type {
  TextComponent,
  TextMeasureCallback,
  TextProps,
  TextRef,
} from './text.types'

const Text = forwardRef<TextRef, TextProps>(
  (
    {
      tag,
      align = TextAlign.LEFT,
      decoration = TextDecoration.NONE,
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
    const elementRef = useRef<HTMLElement>(null)

    useImperativeHandle(ref, () => ({
      measure: (callback: TextMeasureCallback) => {
        const boundingClientRect = elementRef.current?.getBoundingClientRect()
        if (boundingClientRect) {
          callback(
            boundingClientRect.x,
            boundingClientRect.y,
            boundingClientRect.width,
            boundingClientRect.height
          )
        }
      },
    }))

    const fontSizeValue = useTextFontSizeTokenValue(fontSize)
    const lineHeightValue = useTextLineHeightTokenValue(lineHeight)

    return (
      <StyledText
        ref={elementRef}
        as={TEXT_HTML_TAG[tag]}
        align={align}
        decoration={decoration}
        fontFamily={useTextFountFamilyCSSValue(fontFamily)}
        fontWeight={useTextFontWeightCSSValue(fontWeight)}
        fontSize={fontSizeValue}
        lineHeight={fontSizeValue * lineHeightValue}
        maxLines={maxLines}
        color={useTextColorCSSValue(color)}
        opacity={useTextOpacityValue(opacity)}
      >
        {children}
      </StyledText>
    )
  }
)
;(Text as TextComponent).Tag = TextTag
;(Text as TextComponent).Align = TextAlign
;(Text as TextComponent).Decoration = TextDecoration
;(Text as TextComponent).FontFamily = TextFontFamily
;(Text as TextComponent).FontWeight = TextFontWeight
;(Text as TextComponent).FontSize = TextFontSize
;(Text as TextComponent).LineHeight = TextLineHeight
;(Text as TextComponent).Color = TextColor
export default Text as TextComponent
