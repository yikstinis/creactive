import type { FunctionComponent, PropsWithChildren } from 'react'
import type { TextType } from './constants'

export type BaseStyleSheetParameters = {
  fontFamilyDefault: string
}
export interface TextProps extends PropsWithChildren {
  /**
   * Specific text type if required.
   * Affects appearance, accessibility and semantics.
   * To access types use Text.Type instead of trying to import TexType.
   */
  type?: TextType
}
export type TextComponent = FunctionComponent<TextProps> & {
  Type: Record<keyof typeof TextType, TextType>
}
