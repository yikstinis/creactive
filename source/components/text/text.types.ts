import type { FunctionComponent, PropsWithChildren } from 'react'
import type { TextFontSize, TextType } from './constants'

export type BaseStyleSheetParameters = {
  fontFamilyBase: string
  fontSizeBaseX2S: number
  fontSizeBaseXS: number
  fontSizeBaseSM: number
  fontSizeBaseMD: number
  fontSizeBaseLG: number
  fontSizeBaseXL: number
  fontSizeBaseX2L: number
  fontSizeBaseX3L: number
  fontSizeBaseX4L: number
  fontSizeBaseX5L: number
}
export interface TextProps extends PropsWithChildren {
  /**
   * Specific text type if required.
   * Affects appearance, accessibility and semantics.
   * To access types use Text.Type instead of trying to import TexType.
   */
  type?: TextType
  /**
   * Specific text size if required.
   * Will change text size, depending on configured theme.
   * Component maps font size into matching theme base font size value.
   */
  fontSize?: TextFontSize
}
export type TextComponent = FunctionComponent<TextProps> & {
  Type: Record<keyof typeof TextType, TextType>
  FontSize: Record<keyof typeof TextFontSize, TextFontSize>
}
