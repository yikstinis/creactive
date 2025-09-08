import type { Fraction } from '@/helpers'
import type { Color, FontWeight } from '@/types'
import type {
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import type {
  TextAlign,
  TextColor,
  TextDecoration,
  TextFontFamily,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextTag,
} from './constants'

/**
 * Provided by component reference object measure callback.
 * Allows to access component layout element position and size.
 * TODO: Describe arguments...
 */
export type TextMeasureCallback = (
  x: number,
  y: number,
  width: number,
  height: number,
) => void

/**
 * Text component reference object.
 * Allows to access text measurement method.
 */
export interface TextReference {
  measure(callback: TextMeasureCallback): void
}

export interface TextProperties extends PropsWithChildren {
  /**
   * Allows to select text component in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @see Text.Tag
   * @default undefined - renders into SPAN element
   */
  tag?: TextTag
  /**
   * Inner text will be aligned according to this value.
   * @see Text.Align
   * @default Text.Align.LEFT
   */
  textAlign?: TextAlign
  /**
   * Text decoration.
   * @see Text.Decoration
   * @default Text.Decoration.NONE
   */
  textDecoration?: TextDecoration
  /**
   * Themed font family.
   * @see Text.FontFamily
   * @default Text.FontFamily.BASE
   */
  fontFamily?: TextFontFamily
  /**
   * Themed font weight.
   * @see Text.FontWeight
   * @default Text.FontWeight.REGULAR
   */
  fontWeight?: TextFontWeight
  /**
   * Themed font size.
   * @see Text.FontSize
   * @default Text.FontSize.MD
   */
  fontSize?: TextFontSize
  /**
   * Themed line heidht.
   * @see Text.LineHeight
   * @default Text.LineHeight.NORMAL
   */
  lineHeight?: TextLineHeight
  /**
   * Maximum number of lines to display.
   * @default undefined
   */
  maxLines?: number
  /**
   * Themed or transparent color.
   * @see Text.Color
   * @default Text.Color.BASE_800
   */
  color?: TextColor
  /**
   * Text opacity.
   * @see Fraction
   * @default undefined
   */
  opacity?: Fraction
}
export type TextComponent = ForwardRefExoticComponent<
  PropsWithoutRef<TextProperties> & RefAttributes<TextReference>
> & {
  Tag: Record<keyof typeof TextTag, TextTag>
  TextAlign: Record<keyof typeof TextAlign, TextAlign>
  TextDecoration: Record<keyof typeof TextDecoration, TextDecoration>
  FontFamily: Record<keyof typeof TextFontFamily, TextFontFamily>
  FontWeight: Record<keyof typeof TextFontWeight, TextFontWeight>
  FontSize: Record<keyof typeof TextFontSize, TextFontSize>
  LineHeight: Record<keyof typeof TextLineHeight, TextLineHeight>
  Color: Record<keyof typeof TextColor, TextColor>
}
/**
 * Styled text properties type.
 * Used to render text component on web.
 */
export type TextStyledProperties = {
  values: {
    textAlign: 'left' | 'center' | 'right'
    textDecoration: 'none' | 'underline'
    fontFamily: string
    fontWeight: FontWeight
    fontSize: number
    lineHeight: number
    maxLines: number
    color: Color
    opacity?: number
  }
}
