import type { Color, FontWeight } from '@/types'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type {
  TextAlign,
  TextColor,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextTag,
} from './constants'

export interface TextProps extends PropsWithChildren {
  /**
   * Allows to control HTML tag to render.
   * Makes no sense on native platforms.
   * @see Text.Tag
   * @default undefined - renders into DIV element
   */
  tag?: TextTag
  /**
   * Inner text will be aligned according to this value.
   * @see Text.Align
   * @default Text.Align.LEFT
   */
  align?: TextAlign
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
}
export type TextComponent = FunctionComponent<TextProps> & {
  Tag: Record<keyof typeof TextTag, TextTag>
  Align: Record<keyof typeof TextAlign, TextAlign>
  FontWeight: Record<keyof typeof TextFontWeight, TextFontWeight>
  FontSize: Record<keyof typeof TextFontSize, TextFontSize>
  LineHeight: Record<keyof typeof TextLineHeight, TextLineHeight>
  Color: Record<keyof typeof TextColor, TextColor>
}
// For web version styled component.
export type StyledTextrops = Pick<TextProps, 'align' | 'maxLines'> & {
  fontFamily: string
  fontWeight: FontWeight
  fontSize: number
  lineHeight: number
  color: Color | 'transparent'
}
