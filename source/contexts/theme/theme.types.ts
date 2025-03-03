import type { FunctionComponent, PropsWithChildren } from 'react'

/**
 * Theme context value interface.
 * Contains all theme tokens you may need.
 * This tokens are used inside components for styling.
 * This tokens can be also accesed via theme context outside.
 */
export interface ThemeContextValue {
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
export type ThemeContextProviderProps = PropsWithChildren<
  Partial<ThemeContextValue>
>
export type ThemeContextProviderComponent =
  FunctionComponent<ThemeContextProviderProps>
