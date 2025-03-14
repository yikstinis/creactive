import type { FunctionComponent, PropsWithChildren } from 'react'
import type {
  TextAlign,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
  TextType,
} from './constants'

export interface TextProps extends PropsWithChildren {
  /**
   * Specific text type if required.
   * Affects appearance, accessibility and semantics.
   * Allows to control HTML element, that will be to rendered.
   * @default undefined - renders into DIV element
   */
  type?: TextType
  /**
   * Text component align control property.
   * Inner text will be aligned according to this value.
   * @default Text.Align.LEFT
   */
  align?: TextAlign
  /**
   * Font weight property.
   * Changes font weight, depending on theme.
   * Uses base font weight tokens for mapping.
   * @default Text.FontWeight.REGULAR
   */
  fontWeight?: TextFontWeight
  /**
   * Specific text size if required.
   * Will change text size, depending on theme.
   * Uses base font size tokens for mapping.
   * @default Text.FontSize.MD
   */
  fontSize?: TextFontSize
  /**
   * Text line height property.
   * Depends on configured theme token.
   * Calculates using base font size and base line height ratio.
   * @default Text.LineHeight.NONE
   */
  lineHeight?: TextLineHeight
}
export type TextComponent = FunctionComponent<TextProps> & {
  Type: Record<keyof typeof TextType, TextType>
  Align: Record<keyof typeof TextAlign, TextAlign>
  FontWeight: Record<keyof typeof TextFontWeight, TextFontWeight>
  FontSize: Record<keyof typeof TextFontSize, TextFontSize>
  LineHeight: Record<keyof typeof TextLineHeight, TextLineHeight>
}
