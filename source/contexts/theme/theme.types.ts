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
   * Base foreground 100 color token.
   * The least contrasting color in the foreground palette.
   * Intended for nearly invisible elements.
   */
  colorForegroundBase100: Color
  /**
   * Base foreground 200 color token.
   * Still meant to be barely visible.
   * Can help create a subtle sense of hierarchy.
   */
  colorForegroundBase200: Color
  /**
   * Base foreground 300 color token.
   * Suitable for slightly readable text or elements.
   */
  colorForegroundBase300: Color
  /**
   * Base foreground 400 color token.
   * A secondary color for secondary elements.
   * If a secondary element has multiple levels, this is for the lower one.
   */
  colorForegroundBase400: Color
  /**
   * Base foreground 500 color token.
   * Also useful for secondary elements on low-contrast backgrounds.
   */
  colorForegroundBase500: Color
  /**
   * Base foreground 600 color token.
   * Ideal for secondary elements and less prominent text.
   */
  colorForegroundBase600: Color
  /**
   * Base foreground 700 color token.
   * Used for default elements on higher contrast backgrounds.
   * Also suitable for slightly subdued elements.
   */
  colorForegroundBase700: Color
  /**
   * Base foreground 800 color token.
   * The default value for the text component.
   * Ideal for high-contrast text and key elements.
   */
  colorForegroundBase800: Color
  /**
   * Base foreground 900 color token.
   * Similar to 800 but better suited for lower-contrast backgrounds.
   */
  colorForegroundBase900: Color
  /**
   * Inverse foreground 100 color token.
   * The least contrasting color in the inverse foreground palette.
   * Intended for nearly invisible elements on inverse backgrounds.
   */
  colorForegroundInverse100: Color
  /**
   * Inverse foreground 200 color token.
   * Can help create a subtle sense of hierarchy on inverse backgrounds.
   * Also almost invisible, but a bit more contrasting than 100.
   */
  colorForegroundInverse200: Color
  /**
   * Inverse foreground 300 color token.
   * Suitable for slightly readable text or elements on inverse backgrounds.
   */
  colorForegroundInverse300: Color
  /**
   * Inverse foreground 400 color token.
   * A secondary color for secondary elements on inverse backgrounds.
   * If a secondary element has multiple levels, this is for the lower one.
   */
  colorForegroundInverse400: Color
  /**
   * Inverse foreground 500 color token.
   * Also useful for secondary elements on low-contrast inverse backgrounds.
   */
  colorForegroundInverse500: Color
  /**
   * Inverse foreground 600 color token.
   * Ideal for secondary elements on inverse backgrounds.
   */
  colorForegroundInverse600: Color
  /**
   * Inverse foreground 700 color token.
   * Used for default elements on higher contrast inverse backgrounds.
   * Also suitable for slightly subdued elements.
   */
  colorForegroundInverse700: Color
  /**
   * Inverse foreground 800 color token.
   * Ideal for high-contrast text on inverse background.
   */
  colorForegroundInverse800: Color
  /**
   * Inverse foreground 900 color token.
   * Similar to 800 but can be a bit more contrasting.
   * Suitable when you need even more contrast on inverse background.
   */
  colorForegroundInverse900: Color
  /**
   * Base font family token.
   * Supposed to be used by most components.
   * If you don't known what font family to use - use this one.
   */
  fontFamilyBase: string
  /**
   * Base thin font weight token.
   * Ideal for very delicate and decorative, large, elegant hero text.
   */
  fontWeightBaseThin: FontWeight
  /**
   * Base extra-light font weight token.
   * Use for large, airy headings or subtle interface elements.
   * Slightly more readable than extra-thin, but still decorative.
   */
  fontWeightBaseExtraLight: FontWeight
  /**
   * Base light font weight token.
   * Suitable for subheadings, muted captions, and soft labels.
   */
  fontWeightBaseLight: FontWeight
  /**
   * Base regular font weight token.
   * For the most common text elements in your interface.
   * When unsure about font weight, this is the default option.
   */
  fontWeightBaseRegular: FontWeight
  /**
   * Base medium font weight token.
   * Suitable for labels, buttons, and small subheadings.
   * Slightly emphasized, providing better readability.
   */
  fontWeightBaseMedium: FontWeight
  /**
   * Base semi-bold font weight token.
   * Provides stronger emphasis without being overwhelming.
   * Ideal for section headers, emphasized text, and card titles.
   */
  fontWeightBaseSemibold: FontWeight
  /**
   * Base bold font weight token.
   * For high emphasis on important elements.
   * Use for main headings and strong call-to-action buttons.
   */
  fontWeightBaseBold: FontWeight
  /**
   * Extra-bold font weight token.
   * Perfect for promo banners and large impactful headings.
   */
  fontWeightBaseExtraBold: FontWeight
  /**
   * Base black font weight token.
   * Extreme emphasis for rare, dramatic cases.
   * Great for headlines in posters and highly attention-grabbing elements.
   */
  fontWeightBaseBlack: FontWeight
  /**
   * Base 2 times extra-small font size token.
   * Use this size for tiny text elements like captions.
   * It represents the smallest readable text in your interface.
   */
  fontSizeBaseX2S: number
  /**
   * Base extra-small font size token.
   * Suitable for subtitles or the smallest readable text, for example.
   */
  fontSizeBaseXS: number
  /**
   * Base small font size token.
   * Can be used for smaller labels or captions among medium text.
   * Also suitable for titles in smaller 2x small text.
   */
  fontSizeBaseSM: number
  /**
   * Base medium font size token.
   * Intended for most text elements.
   * If unsure about which font size to use, this is the default option.
   */
  fontSizeBaseMD: number
  /**
   * Base large font size token.
   * Suitable for fourth-level page titles.
   * Can also be used for larger labels or captions among medium text.
   */
  fontSizeBaseLG: number
  /**
   * Base extra-large font size token.
   * Ideal for third-level page titles.
   * Can also be used for larger labels or captions within medium text.
   */
  fontSizeBaseXL: number
  /**
   * Base 2 times extra-large font size token.
   * Typically used for second-level page titles.
   */
  fontSizeBaseX2L: number
  /**
   * Base 3 times extra-large font size token.
   * Designed for first-level page titles.
   * Can also be used for labels or captions within huge text.
   */
  fontSizeBaseX3L: number
  /**
   * Base 4 times extra-large font size token.
   * Ideal for huge text labels and captions.
   */
  fontSizeBaseX4L: number
  /**
   * Base 5 times extra-large font size token.
   * Use this size for enormous text elements like hero titles.
   * It should be the largest font size in your interface.
   */
  fontSizeBaseX5L: number
  /**
   * Base none line height token.
   * Use for elements with no line height, like buttons, badges, and tags.
   */
  lineHeightBaseNone: number
  /**
   * Base tight line height token.
   * For compact text elements with closely packed lines.
   */
  lineHeightBaseTight: number
  /**
   * Base snug line height token.
   * Ideal for compact text that still needs some breathing room.
   */
  lineHeightBaseSnug: number
  /**
   * Base normal line height token.
   * Standard line height for most text elements.
   * Use for general content in your interface.
   */
  lineHeightBaseNormal: number
  /**
   * Base relaxed line height token.
   * Provides more space between lines.
   * Ideal for body text or large blocks of content.
   */
  lineHeightBaseRelaxed: number
  /**
   * Base loose line height token.
   * Very spacious and airy, great for large headings.
   * Suitable for text elements that need a lot of breathing room.
   */
  lineHeightBaseLoose: number
  /**
   * Base 2 times extra-small spacing token.
   * Rarely used – best for tight icon/text gaps or hairline adjustments.
   */
  spacingBaseX2S: number
  /**
   * Extra-small base spacing token.
   * Ideal for compact elements like tag paddings or small icon separation.
   */
  spacingBaseXS: number
  /**
   * Small base spacing token.
   * Great for dense layouts, or minor gaps.
   */
  spacingBaseSM: number
  /**
   * Base medium spacing token.
   * Good default for most components like cards, inputs, or buttons.
   */
  spacingBaseMD: number
  /**
   * Large base spacing token.
   * Nice for separating grouped elements or setting consistent gaps.
   */
  spacingBaseLG: number
  /**
   * Extra-large base spacing token.
   * Useful between sections or to give components more breathing.
   */
  spacingBaseXL: number
  /**
   * Base 2 times extra-large spacing token.
   * Fits well in modals or larger layout divisions.
   */
  spacingBaseX2L: number
  /**
   * Base 3 times extra-large spacing token.
   * Helps emphasize hierarchy between layout blocks.
   */
  spacingBaseX3L: number
  /**
   * Base 4 times extra-large spacing token.
   * Ideal for responsive paddings, section and outer margins.
   */
  spacingBaseX4L: number
  /**
   * Base 5 times extra-large spacing token.
   * Great for container paddings, grid gaps, or large components.
   */
  spacingBaseX5L: number
  /**
   * Base 6 times extra-large spacing token.
   * Works well in modal layouts or for generous top-level spacing.
   */
  spacingBaseX6L: number
  /**
   * Base 7 times extra-large spacing token.
   * Used for large layout sections or when significant whitespace is needed.
   */
  spacingBaseX7L: number
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
