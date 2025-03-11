import type { FunctionComponent, PropsWithChildren } from 'react'
import type { TextFontSize, TextFontWeight, TextType } from './constants'

export interface TextProps extends PropsWithChildren {
  /**
   * Specific text type if required.
   * Affects appearance, accessibility and semantics.
   * To access types use Text.Type instead of trying to import TexType.
   */
  type?: TextType
  /**
   * Specific text font weight if required.
   * Will change text weight, depending on configured theme.
   * Component maps font weight into matching theme base font weight value.
   */
  fontWeight?: TextFontWeight
  /**
   * Specific text size if required.
   * Will change text size, depending on configured theme.
   * Component maps font size into matching theme base font size value.
   */
  fontSize?: TextFontSize
}
export type TextComponent = FunctionComponent<TextProps> & {
  Type: Record<keyof typeof TextType, TextType>
  FontWeight: Record<keyof typeof TextFontWeight, TextFontWeight>
  FontSize: Record<keyof typeof TextFontSize, TextFontSize>
}
