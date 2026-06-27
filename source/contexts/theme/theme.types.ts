import type { PixelDimension, RGBColor } from '@/helpers'
import type { FontWeight } from '@/types'
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
   * @default rgb(215,215,220)
   */
  colorBackgroundBase100: RGBColor
  /**
   * Dim base background color.
   * @default rgb(220,220,225)
   */
  colorBackgroundBase200: RGBColor
  /**
   * Mix of dim and muted base background color.
   * @default rgb(225,225,230)
   */
  colorBackgroundBase300: RGBColor
  /**
   * Muted base background color.
   * @default rgb(230,230,235)
   */
  colorBackgroundBase400: RGBColor
  /**
   * Mix of muted and subtle base background color.
   * @default rgb(235,235,240)
   */
  colorBackgroundBase500: RGBColor
  /**
   * Subtle base background color.
   * @default rgb(240,240,245)
   */
  colorBackgroundBase600: RGBColor
  /**
   * Mix of subtle and default base background color.
   * @default rgb(245,245,250)
   */
  colorBackgroundBase700: RGBColor
  /**
   * Base default interface background color.
   * @default rgb(250,250,255)
   */
  colorBackgroundBase800: RGBColor
  /**
   * Most contrast base background color.
   * @default rgb(255,255,255)
   */
  colorBackgroundBase900: RGBColor

  /**
   * Least contrast primary background color.
   * @default rgb(40,40,45)
   */
  colorBackgroundPrimary100: RGBColor
  /**
   * Dim primary background color.
   * @default rgb(35,35,40)
   */
  colorBackgroundPrimary200: RGBColor
  /**
   * Mix of dim and muted primary background color.
   * @default rgb(30,30,35)
   */
  colorBackgroundPrimary300: RGBColor
  /**
   * Muted primary background color.
   * @default rgb(25,25,30)
   */
  colorBackgroundPrimary400: RGBColor
  /**
   * Mix of muted and subtle primary background color.
   * @default rgb(20,20,25)
   */
  colorBackgroundPrimary500: RGBColor
  /**
   * Subtle primary background color.
   * @default rgb(15,15,20)
   */
  colorBackgroundPrimary600: RGBColor
  /**
   * Mix of subtle and default primary background color.
   * @default rgb(10,10,15)
   */
  colorBackgroundPrimary700: RGBColor
  /**
   * Primary default background color.
   * @default rgb(5,5,10)
   */
  colorBackgroundPrimary800: RGBColor
  /**
   * Most contrast primary background color.
   * @default rgb(0,0,5)
   */
  colorBackgroundPrimary900: RGBColor

  /**
   * Least contrast accent background color.
   * @default rgb(200,225,252)
   */
  colorBackgroundAccent100: RGBColor
  /**
   * Dim accent background color.
   * @default rgb(180,215,249)
   */
  colorBackgroundAccent200: RGBColor
  /**
   * Mix of dim and muted accent background color.
   * @default rgb(160,205,246)
   */
  colorBackgroundAccent300: RGBColor
  /**
   * Muted accent background color.
   * @default rgb(140,195,243)
   */
  colorBackgroundAccent400: RGBColor
  /**
   * Mix of muted and subtle accent background color.
   * @default rgb(115,180,238)
   */
  colorBackgroundAccent500: RGBColor
  /**
   * Subtle accent background color.
   * @default rgb(95,168,233)
   */
  colorBackgroundAccent600: RGBColor
  /**
   * Mix of subtle and default accent background color.
   * @default rgb(75,155,225)
   */
  colorBackgroundAccent700: RGBColor
  /**
   * Accent default background color.
   * @default rgb(50,130,200)
   */
  colorBackgroundAccent800: RGBColor
  /**
   * Most contrast accent background color.
   * @default rgb(25,105,175)
   */
  colorBackgroundAccent900: RGBColor

  /**
   * Least contrast subaccent background color.
   * @default rgb(200,240,225)
   */
  colorBackgroundSubaccent100: RGBColor
  /**
   * Dim subaccent background color.
   * @default rgb(185,235,215)
   */
  colorBackgroundSubaccent200: RGBColor
  /**
   * Mix of dim and muted subaccent background color.
   * @default rgb(170,230,205)
   */
  colorBackgroundSubaccent300: RGBColor
  /**
   * Muted subaccent background color.
   * @default rgb(155,225,195)
   */
  colorBackgroundSubaccent400: RGBColor
  /**
   * Mix of muted and subtle subaccent background color.
   * @default rgb(145,222,190)
   */
  colorBackgroundSubaccent500: RGBColor
  /**
   * Subtle subaccent background color.
   * @default rgb(135,218,185)
   */
  colorBackgroundSubaccent600: RGBColor
  /**
   * Mix of subtle and default subaccent background color.
   * @default rgb(125,215,180)
   */
  colorBackgroundSubaccent700: RGBColor
  /**
   * Subaccent default background color.
   * @default rgb(100,195,160)
   */
  colorBackgroundSubaccent800: RGBColor
  /**
   * Most contrast subaccent background color.
   * @default rgb(75,175,140)
   */
  colorBackgroundSubaccent900: RGBColor

  /**
   * Least contrast base border color.
   * @default rgb(235,235,240)
   */
  colorBorderBase100: RGBColor
  /**
   * Dim base border color.
   * @default rgb(230,230,235)
   */
  colorBorderBase200: RGBColor
  /**
   * Mix of dim and muted base border color.
   * @default rgb(225,225,230)
   */
  colorBorderBase300: RGBColor
  /**
   * Muted base border color.
   * @default rgb(220,220,225)
   */
  colorBorderBase400: RGBColor
  /**
   * Mix of muted and subtle base border color.
   * @default rgb(215,215,220)
   */
  colorBorderBase500: RGBColor
  /**
   * Subtle base border color.
   * @default rgb(210,210,215)
   */
  colorBorderBase600: RGBColor
  /**
   * Mix of subtle and default base border color.
   * @default rgb(205,205,210)
   */
  colorBorderBase700: RGBColor
  /**
   * Base default border color.
   * @default rgb(200,200,205)
   */
  colorBorderBase800: RGBColor
  /**
   * Most contrast base border color.
   * @default rgb(195,195,200)
   */
  colorBorderBase900: RGBColor

  /**
   * Least contrast base foreground color token.
   * @default rgb(200,200,205)
   */
  colorForegroundBase100: RGBColor
  /**
   * Dim base foreground color.
   * @default rgb(175,175,180)
   */
  colorForegroundBase200: RGBColor
  /**
   * Mix of dim and muted base foreground color.
   * @default rgb(150,150,155)
   */
  colorForegroundBase300: RGBColor
  /**
   * Muted base foreground color.
   * @default rgb(125,125,130)
   */
  colorForegroundBase400: RGBColor
  /**
   * Mix of muted and subtle base foreground color.
   * @default rgb(100,100,105)
   */
  colorForegroundBase500: RGBColor
  /**
   * Subtle base foreground color.
   * @default rgb(75,75,80)
   */
  colorForegroundBase600: RGBColor
  /**
   * Mix of subtle and default base foreground color.
   * @default rgb(50,50,55)
   */
  colorForegroundBase700: RGBColor
  /**
   * Base default foreground color.
   * @default rgb(25,25,30)
   */
  colorForegroundBase800: RGBColor
  /**
   * Most contrast base foreground color.
   * @default rgb(0,0,5)
   */
  colorForegroundBase900: RGBColor

  /**
   * Least contrast inverse foreground color.
   * @default rgb(75,75,80)
   */
  colorForegroundInverse100: RGBColor
  /**
   * Dim inverse foreground color.
   * @default rgb(100,100,105)
   */
  colorForegroundInverse200: RGBColor
  /**
   * Mix of dim and muted inverse foreground color.
   * @default rgb(125,125,130)
   */
  colorForegroundInverse300: RGBColor
  /**
   * Muted inverse foreground color.
   * @default rgb(150,150,155)
   */
  colorForegroundInverse400: RGBColor
  /**
   * Mix of muted and subtle inverse foreground color.
   * @default rgb(175,175,180)
   */
  colorForegroundInverse500: RGBColor
  /**
   * Subtle inverse foreground color.
   * @default rgb(200,200,205)
   */
  colorForegroundInverse600: RGBColor
  /**
   * Mix of subtle and default inverse foreground color.
   * @default rgb(225,225,230)
   */
  colorForegroundInverse700: RGBColor
  /**
   * Inverse default foreground color.
   * @default rgb(250,250,255)
   */
  colorForegroundInverse800: RGBColor
  /**
   * Most contrast inverse foreground color.
   * @default rgb(255,255,255)
   */
  colorForegroundInverse900: RGBColor

  /**
   * Least contrast failure foreground color.
   * @default rgb(225,200,200)
   */
  colorForegroundFailure100: RGBColor
  /**
   * Dim failure foreground color.
   * @default rgb(220,175,175)
   */
  colorForegroundFailure200: RGBColor
  /**
   * Mix of dim and muted failure foreground color.
   * @default rgb(215,150,150)
   */
  colorForegroundFailure300: RGBColor
  /**
   * Muted failure foreground color.
   * @default rgb(210,125,125)
   */
  colorForegroundFailure400: RGBColor
  /**
   * Mix of muted and subtle failure foreground color.
   * @default rgb(205,100,100)
   */
  colorForegroundFailure500: RGBColor
  /**
   * Subtle failure foreground color.
   * @default rgb(200,75,75)
   */
  colorForegroundFailure600: RGBColor
  /**
   * Mix of subtle and default failure foreground color.
   * @default rgb(195,50,50)
   */
  colorForegroundFailure700: RGBColor
  /**
   * Failure default foreground color.
   * @default rgb(190,25,25)
   */
  colorForegroundFailure800: RGBColor
  /**
   * Most contrast failure foreground color.
   * @default rgb(185,0,0)
   */
  colorForegroundFailure900: RGBColor

  /**
   * Base font family.
   * @see FONT_FAMILY_DEFAULT
   */
  fontFamilyDefault: string
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
   * @default 10
   */
  fontSizeBaseX2S: number
  /**
   * Base extra-small font size.
   * @see FONT_SIZE_BASE_XS
   * @default 12
   */
  fontSizeBaseXS: number
  /**
   * Base small font size.
   * @see FONT_SIZE_BASE_SM
   * @default 14
   */
  fontSizeBaseSM: number
  /**
   * Base medium font size.
   * @see FONT_SIZE_BASE_MD
   * @default 16
   */
  fontSizeBaseMD: number
  /**
   * Base large font size.
   * @see FONT_SIZE_BASE_LG
   * @default 18
   */
  fontSizeBaseLG: number
  /**
   * Base extra-large font size.
   * @see FONT_SIZE_BASE_XL
   * @default 20
   */
  fontSizeBaseXL: number
  /**
   * Base 2 times extra-large font size.
   * @see FONT_SIZE_BASE_X2L
   * @default 24
   */
  fontSizeBaseX2L: number
  /**
   * Base 3 times extra-large font size.
   * @see FONT_SIZE_BASE_X3L
   * @default 30
   */
  fontSizeBaseX3L: number
  /**
   * Base 4 times extra-large font size.
   * @see FONT_SIZE_BASE_X4L
   * @default 36
   */
  fontSizeBaseX4L: number
  /**
   * Base 5 times extra-large font size.
   * @see FONT_SIZE_BASE_X5L
   * @default 48
   */
  fontSizeBaseX5L: number
  /**
   * Base 6 times extra-large font size.
   * @see FONT_SIZE_BASE_X6L
   * @default 60
   */
  fontSizeBaseX6L: number

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
  borderWidthBaseSM: PixelDimension
  /**
   * Medium base border width token.
   * @default 1
   */
  borderWidthBaseMD: PixelDimension
  /**
   * Large base border width token.
   * @default 1.5
   */
  borderWidthBaseLG: PixelDimension
  /**
   * Extra small border radius token.
   * @default 2
   */
  borderRadiusBaseXS: PixelDimension
  /**
   * Small border radius token.
   * @default 4
   */
  borderRadiusBaseSM: PixelDimension
  /**
   * Medium border radius token.
   * Default border radius when you need it.
   * @default 6
   */
  borderRadiusBaseMD: PixelDimension
  /**
   * Large border radius token.
   * @default 8
   */
  borderRadiusBaseLG: PixelDimension
  /**
   * Extra large border radius token.
   * @default 10
   */
  borderRadiusBaseXL: PixelDimension
  /**
   * Extra 2 large border radius token.
   * @default 12
   */
  borderRadiusBaseX2L: PixelDimension
  /**
   * Extra 3 large border radius token.
   * @default 16
   */
  borderRadiusBaseX3L: PixelDimension
  /**
   * Extra 4 large border radius token.
   * @default 18
   */
  borderRadiusBaseX4L: PixelDimension
  /**
   * Extra 5 large border radius token.
   * @default 20
   */
  borderRadiusBaseX5L: PixelDimension
  /**
   * Extra 6 large border radius token.
   * @default 24
   */
  borderRadiusBaseX6L: PixelDimension
  /**
   * Extra 7 large border radius token.
   * @default 28
   */
  borderRadiusBaseX7L: PixelDimension

  /**
   * Small base button height token.
   * @see BUTTON_HEIGHT_BASE_SM
   * @default 40
   */
  buttonHeightBaseSM: number
  /**
   * Medium base button height token.
   * @see BUTTON_HEIGHT_BASE_MD
   * @default 48
   */
  buttonHeightBaseMD: number
  /**
   * Large base button height token.
   * @see BUTTON_HEIGHT_BASE_LG
   * @default 56
   */
  buttonHeightBaseLG: number

  /**
   * Base small icon size.
   * @see ICON_SIZE_BASE_SM
   * @default 16
   */
  iconSizeBaseSM: PixelDimension
  /**
   * Base medium icon size.
   * @see ICON_SIZE_BASE_MD
   * @default 24
   */
  iconSizeBaseMD: PixelDimension
  /**
   * Base large icon size.
   * @see ICON_SIZE_BASE_LG
   * @default 32
   */
  iconSizeBaseLG: PixelDimension

  /**
   * Small base duration token.
   * @default 125
   */
  durationBaseSM: number
  /**
   * Medium base duration token.
   * @default 175
   */
  durationBaseMD: number
  /**
   * Large base duration token.
   * @default 225
   */
  durationBaseLG: number

  /**
   * Small complex duration token.
   * @default 500
   */
  durationComplexSM: number
  /**
   * Medium complex duration token.
   * @default 750
   */
  durationComplexMD: number
  /**
   * Large complex duration token.
   * @default 1000
   */
  durationComplexLG: number
}
export type ThemeContextProviderProps = PropsWithChildren<
  Partial<ThemeContextValue>
>
export type ThemeContextProviderComponent =
  FunctionComponent<ThemeContextProviderProps>
