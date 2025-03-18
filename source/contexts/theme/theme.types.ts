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
  fontWeightBaseThin: ThemeFontWeight
  /**
   * Base extra-light font weight token.
   * Use for large, airy headings or subtle interface elements.
   * Slightly more readable than extra-thin, but still decorative.
   */
  fontWeightBaseExtraLight: ThemeFontWeight
  /**
   * Base light font weight token.
   * Suitable for subheadings, muted captions, and soft labels.
   */
  fontWeightBaseLight: ThemeFontWeight
  /**
   * Base regular font weight token.
   * For the most common text elements in your interface.
   * When unsure about font weight, this is the default option.
   */
  fontWeightBaseRegular: ThemeFontWeight
  /**
   * Base medium font weight token.
   * Suitable for labels, buttons, and small subheadings.
   * Slightly emphasized, providing better readability.
   */
  fontWeightBaseMedium: ThemeFontWeight
  /**
   * Base semi-bold font weight token.
   * Provides stronger emphasis without being overwhelming.
   * Ideal for section headers, emphasized text, and card titles.
   */
  fontWeightBaseSemibold: ThemeFontWeight
  /**
   * Base bold font weight token.
   * For high emphasis on important elements.
   * Use for main headings and strong call-to-action buttons.
   */
  fontWeightBaseBold: ThemeFontWeight
  /**
   * Extra-bold font weight token.
   * Perfect for promo banners and large impactful headings.
   */
  fontWeightBaseExtraBold: ThemeFontWeight
  /**
   * Base black font weight token.
   * Extreme emphasis for rare, dramatic cases.
   * Great for headlines in posters and highly attention-grabbing elements.
   */
  fontWeightBaseBlack: ThemeFontWeight
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
}
export type ThemeContextProviderProps = PropsWithChildren<
  Partial<ThemeContextValue>
>
export type ThemeContextProviderComponent =
  FunctionComponent<ThemeContextProviderProps>
