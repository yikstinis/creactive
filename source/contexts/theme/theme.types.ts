import type { FunctionComponent, PropsWithChildren } from 'react'

/**
 * Theme font weight type.
 * Should be used to specify theme font weight.
 */
export type ThemeFontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

/**
 * Theme context value interface.
 * Contains all theme tokens you may need.
 * This tokens are used inside components for styling.
 * This tokens can be also accesed via theme context outside.
 */
export interface ThemeContextValue {
  fontFamilyBase: string
  fontWeightBaseThin: ThemeFontWeight
  fontWeightBaseExtraLight: ThemeFontWeight
  fontWeightBaseLight: ThemeFontWeight
  fontWeightBaseRegular: ThemeFontWeight
  fontWeightBaseSemibold: ThemeFontWeight
  fontWeightBaseBold: ThemeFontWeight
  fontWeightBaseExtraBold: ThemeFontWeight
  fontWeightBaseBlack: ThemeFontWeight
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
