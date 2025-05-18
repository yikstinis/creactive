import type { Color, FontWeight } from '@/types'
import type { FunctionComponent, PropsWithChildren } from 'react'

/**
 * Theme context value interface.
 * Provides access to all themable tokens.
 * Library components use this tokens for styling.
 * Can be accessed via theme context outside when need.
 */
export interface ThemeContextValue {
  /**
   * Least contrast base background color.
   * @default rgb(198,198,202)
   */
  colorBackgroundBase100: Color
  /**
   * Dim base background color.
   * @default rgb(212,212,216)
   */
  colorBackgroundBase200: Color
  /**
   * Mix of dim and muted base background color.
   * @default rgb(216,216,228)
   */
  colorBackgroundBase300: Color
  /**
   * Muted base background color.
   * @default rgb(218,218,234)
   */
  colorBackgroundBase400: Color
  /**
   * Mix of muted and subtle base background color.
   * @default rgb(224,224,238)
   */
  colorBackgroundBase500: Color
  /**
   * Subtle base background color.
   * @default rgb(244,244,245)
   */
  colorBackgroundBase600: Color
  /**
   * Mix of subtle and default base background color.
   * @default rgb(247,247,249)
   */
  colorBackgroundBase700: Color
  /**
   * Base default interface background color.
   * @default rgb(249,249,250)
   */
  colorBackgroundBase800: Color
  /**
   * Most contrast base background color.
   * @default rgb(254,254,255)
   */
  colorBackgroundBase900: Color

  /**
   * Least contrast base border color.
   * @default rgb(253,252,254)
   */
  colorBorderBase100: Color
  /**
   * Dim base border color.
   * @default rgb(249,249,250)
   */
  colorBorderBase200: Color
  /**
   * Mix of dim and muted base border color.
   * @default rgb(247,247,249)
   */
  colorBorderBase300: Color
  /**
   * Muted base border color.
   * @default rgb(244,244,245)
   */
  colorBorderBase400: Color
  /**
   * Mix of muted and subtle base border color.
   * @default rgb(224,224,238)
   */
  colorBorderBase500: Color
  /**
   * Subtle base border color.
   * @default rgb(218,218,234)
   */
  colorBorderBase600: Color
  /**
   * Mix of subtle and default base border color.
   * @default rgb(216,216,228)
   */
  colorBorderBase700: Color
  /**
   * Base default border color.
   * @default rgb(212,212,216)
   */
  colorBorderBase800: Color
  /**
   * Most contrast base border color.
   * @default rgb(198,198,202)
   */
  colorBorderBase900: Color

  /**
   * Least contrast base foreground color token.
   * @default rgb(102,102,116)
   */
  colorForegroundBase100: Color
  /**
   * Dim base foreground color.
   * @default rgb(82,82,92)
   */
  colorForegroundBase200: Color
  /**
   * Mix of dim and muted base foreground color.
   * @default rgb(74,74,88)
   */
  colorForegroundBase300: Color
  /**
   * Muted base foreground color.
   * @default rgb(63,63,70)
   */
  colorForegroundBase400: Color
  /**
   * Mix of muted and subtle base foreground color.
   * @default rgb(49,49,56)
   */
  colorForegroundBase500: Color
  /**
   * Subtle base foreground color.
   * @default rgb(39,39,42)
   */
  colorForegroundBase600: Color
  /**
   * Mix of subtle and default base foreground color.
   * @default rgb(30,30,34)
   */
  colorForegroundBase700: Color
  /**
   * Base default foreground color.
   * @default rgb(24,24,27)
   */
  colorForegroundBase800: Color
  /**
   * Most contrast base foreground color.
   * @default rgb(6,6,14)
   */
  colorForegroundBase900: Color

  /**
   * Least contrast inverse foreground color.
   * @default rgb(198,198,202)
   */
  colorForegroundInverse100: Color
  /**
   * Dim inverse foreground color.
   * @default rgb(212,212,216)
   */
  colorForegroundInverse200: Color
  /**
   * Mix of dim and muted inverse foreground color.
   * @default rgb(216,216,228)
   */
  colorForegroundInverse300: Color
  /**
   * Muted inverse foreground color.
   * @default rgb(218,218,234)
   */
  colorForegroundInverse400: Color
  /**
   * Mix of muted and subtle inverse foreground color.
   * @default rgb(224,224,238)
   */
  colorForegroundInverse500: Color
  /**
   * Subtle inverse foreground color.
   * @default rgb(244,244,245)
   */
  colorForegroundInverse600: Color
  /**
   * Mix of subtle and default inverse foreground color.
   * @default rgb(247,247,249)
   */
  colorForegroundInverse700: Color
  /**
   * Inverse default foreground color.
   * @default rgb(249,249,250)
   */
  colorForegroundInverse800: Color
  /**
   * Most contrast inverse foreground color.
   * @default rgb(254,254,255)
   */
  colorForegroundInverse900: Color

  /**
   * Base font family.
   * @see FONT_FAMILY_BASE
   */
  fontFamilyBase: string
  /**
   * Typographic font family.
   * @see FONT_FAMILY_TYPOGRAPHIC
   */
  fontFamilyTypographic: string

  /**
   * Base thin font weight.
   * @see FONT_WEIGHT_BASE_THIN
   * @default 100
   */
  fontWeightBaseThin: FontWeight
  /**
   * Base extra-light font weight.
   * @see FONT_WEIGHT_BASE_EXTRALIGHT
   * @default 200
   */
  fontWeightBaseExtraLight: FontWeight
  /**
   * Base light font weight.
   * @see FONT_WEIGHT_BASE_LIGHT
   * @default 300
   */
  fontWeightBaseLight: FontWeight
  /**
   * Base regular font weight.
   * @see FONT_WEIGHT_BASE_REGULAR
   * @default 400
   */
  fontWeightBaseRegular: FontWeight
  /**
   * Base medium font weight.
   * @see FONT_WEIGHT_BASE_MEDIUM
   * @default 500
   */
  fontWeightBaseMedium: FontWeight
  /**
   * Base semi-bold font weight.
   * @see FONT_WEIGHT_BASE_SEMIBOLD
   * @default 600
   */
  fontWeightBaseSemiBold: FontWeight
  /**
   * Base bold font weight.
   * @see FONT_WEIGHT_BASE_BOLD
   * @default 700
   */
  fontWeightBaseBold: FontWeight
  /**
   * Extra-bold font weight.
   * @see FONT_WEIGHT_BASE_EXTRABOLD
   * @default 800
   */
  fontWeightBaseExtraBold: FontWeight
  /**
   * Base black font weight.
   * @see FONT_WEIGHT_BASE_BLACK
   * @default 900
   */
  fontWeightBaseBlack: FontWeight

  /**
   * Base 2 times extra-small font size.
   * @see FONT_SIZE_BASE_X2S
   * @default 12
   */
  fontSizeBaseX2S: number
  /**
   * Base extra-small font size.
   * @see FONT_SIZE_BASE_XS
   * @default 14
   */
  fontSizeBaseXS: number
  /**
   * Base small font size.
   * @see FONT_SIZE_BASE_SM
   * @default 16
   */
  fontSizeBaseSM: number
  /**
   * Base medium font size.
   * @see FONT_SIZE_BASE_MD
   * @default 18
   */
  fontSizeBaseMD: number
  /**
   * Base large font size.
   * @see FONT_SIZE_BASE_LG
   * @default 20
   */
  fontSizeBaseLG: number
  /**
   * Base extra-large font size.
   * @see FONT_SIZE_BASE_XL
   * @default 24
   */
  fontSizeBaseXL: number
  /**
   * Base 2 times extra-large font size.
   * @see FONT_SIZE_BASE_X2L
   * @default 30
   */
  fontSizeBaseX2L: number
  /**
   * Base 3 times extra-large font size.
   * @see FONT_SIZE_BASE_X3L
   * @default 36
   */
  fontSizeBaseX3L: number
  /**
   * Base 4 times extra-large font size.
   * @see FONT_SIZE_BASE_X4L
   * @default 48
   */
  fontSizeBaseX4L: number
  /**
   * Base 5 times extra-large font size.
   * @see FONT_SIZE_BASE_X5L
   * @default 60
   */
  fontSizeBaseX5L: number

  /**
   * Base none line height.
   * @see LINE_HEIGHT_BASE_NONE
   * @default 1
   */
  lineHeightBaseNone: number
  /**
   * Base tight line height.
   * @see LINE_HEIGHT_BASE_TIGHT
   * @default 1.25
   */
  lineHeightBaseTight: number
  /**
   * Base snug line height.
   * @see LINE_HEIGHT_BASE_SNUG
   * @default 1.375
   */
  lineHeightBaseSnug: number
  /**
   * Base normal line height.
   * @see LINE_HEIGHT_BASE_NORMAL
   * @default 1.5
   */
  lineHeightBaseNormal: number
  /**
   * Base relaxed line height.
   * @see LINE_HEIGHT_BASE_RELAXED
   * @default 1.625
   */
  lineHeightBaseRelaxed: number
  /**
   * Base loose line height.
   * @see LINE_HEIGHT_BASE_LOOSE
   * @default 2
   */
  lineHeightBaseLoose: number

  /**
   * Base f spacing.
   * @see SPACING_BASE_X6S
   * @default 2
   */
  spacingBaseX6S: number
  /**
   * Base 5 times extra-small spacing.
   * @see SPACING_BASE_X5S
   * @default 4
   */
  spacingBaseX5S: number
  /**
   * Base 4 times extra-small spacing.
   * @see SPACING_BASE_X4S
   * @default 6
   */
  spacingBaseX4S: number
  /**
   * Base 3 times extra-small spacing.
   * @see SPACING_BASE_X3S
   * @default 8
   */
  spacingBaseX3S: number
  /**
   * Base 2 times extra-small spacing.
   * @see SPACING_BASE_X2S
   * @default 10
   */
  spacingBaseX2S: number
  /**
   * Base extra-small spacing.
   * @see SPACING_BASE_XS
   * @default 12
   */
  spacingBaseXS: number
  /**
   * Base small spacing.
   * @see SPACING_BASE_SM
   * @default 14
   */
  spacingBaseSM: number
  /**
   * Base medium spacing.
   * @see SPACING_BASE_MD
   * @default 16
   */
  spacingBaseMD: number
  /**
   * Base large spacing.
   * @see SPACING_BASE_LG
   * @default 18
   */
  spacingBaseLG: number
  /**
   * Base extra-large spacing.
   * @see SPACING_BASE_XL
   * @default 20
   */
  spacingBaseXL: number
  /**
   * Base 2 times extra-large spacing.
   * @see SPACING_BASE_X2L
   * @default 24
   */
  spacingBaseX2L: number
  /**
   * Base 3 times extra-large spacing.
   * @see SPACING_BASE_X3L
   * @default 28
   */
  spacingBaseX3L: number
  /**
   * Base 4 times extra-large spacing.
   * @see SPACING_BASE_X4L
   * @default 32
   */
  spacingBaseX4L: number
  /**
   * Base 5 times extra-large spacing.
   * @see SPACING_BASE_X5L
   * @default 36
   */
  spacingBaseX5L: number
  /**
   * Base 6 times extra-large spacing.
   * @see SPACING_BASE_X6L
   * @default 40
   */
  spacingBaseX6L: number

  /**
   * Small base border width token.
   * @default 0.5
   */
  borderWidthBaseSM: number
  /**
   * Medium base border width token.
   * @default 1
   */
  borderWidthBaseMD: number
  /**
   * Large base border width token.
   * @default 1.5
   */
  borderWidthBaseLG: number
  /**
   * Extra small border radius token.
   * @default 2
   */
  borderRadiusBaseXS: number
  /**
   * Small border radius token.
   * @default 4
   */
  borderRadiusBaseSM: number
  /**
   * Medium border radius token.
   * Default border radius when you need it.
   * @default 6
   */
  borderRadiusBaseMD: number
  /**
   * Large border radius token.
   * @default 8
   */
  borderRadiusBaseLG: number
  /**
   * Extra large border radius token.
   * @default 10
   */
  borderRadiusBaseXL: number
}
export type ThemeContextProviderProps = PropsWithChildren<
  Partial<ThemeContextValue>
>
export type ThemeContextProviderComponent =
  FunctionComponent<ThemeContextProviderProps>
