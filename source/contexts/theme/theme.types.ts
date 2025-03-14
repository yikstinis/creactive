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
   * For the most delicate and subtle elements.
   * It should be kind of sleek and lightweight text.
   */
  fontWeightBaseThin: ThemeFontWeight
  /**
   * Base extra-light font weight token.
   * Slightly heavier than thin but still very light.
   * Suitable for subtle text elements that require a bit more presence.
   */
  fontWeightBaseExtraLight: ThemeFontWeight
  /**
   * Base light font weight token.
   * Can be used for secondary text for example.
   */
  fontWeightBaseLight: ThemeFontWeight
  /**
   * Base regular font weight token.
   * For the most common text elements of your interface.
   * If you don't known what font weight to use - use this one.
   */
  fontWeightBaseRegular: ThemeFontWeight
  /**
   * Base medium font weight token.
   * Variant for highlit regular text a bit.
   * Not as strong as semibold, but still more noticeable.
   */
  fontWeightBaseMedium: ThemeFontWeight
  /**
   * Base semi-bold font weight token.
   * Suits for titles and headings when font size is smaller.
   */
  fontWeightBaseSemibold: ThemeFontWeight
  /**
   * Base bold font weight token.
   * Supposed to be used for titles and headings.
   */
  fontWeightBaseBold: ThemeFontWeight
  /**
   * Extra-bold font weight token.
   * Maybe if you need to highlight something inside title or heading.
   */
  fontWeightBaseExtraBold: ThemeFontWeight
  /**
   * Base black font wieght token.
   * The heaviest font weight variant.
   * Should be used for huge text elements like hero title and etc.
   */
  fontWeightBaseBlack: ThemeFontWeight
  /**
   * Base 2 times extra-small font size token.
   * Use this size for tiny text elements like captions.
   * It is like the smallest readable text in your interface.
   */
  fontSizeBaseX2S: number
  /**
   * Base extra-small font size token.
   * Can be a kind of subtitle for smallest readable text for example.
   */
  fontSizeBaseXS: number
  /**
   * Base small font size token.
   * Can be used for smaller labels or captions among medium text.
   * It also can be used as a title font size for smaller 2 times small text.
   */
  fontSizeBaseSM: number
  /**
   * Base medium font size token.
   * Supposed to be used for most of the text elements.
   * If you don't known what font size to use - use this one.
   */
  fontSizeBaseMD: number
  /**
   * Base large font size token.
   * Can be used for fourth-level page title.
   * Can be used for some larger labels or captions among medium text.
   */
  fontSizeBaseLG: number
  /**
   * Base extra-large font size token.
   * Can be used for third-level page title.
   * Also can be used for some larger labels or captions among medium text.
   */
  fontSizeBaseXL: number
  /**
   * Base 2 times extra-large font size token.
   * Supposed to be used for second-level page title.
   */
  fontSizeBaseX2L: number
  /**
   * Base 3 times extra-large font size token.
   * Supposed to be used for first-level page title.
   * Can be also used for labels or captions among hudge text.
   */
  fontSizeBaseX3L: number
  /**
   * Base 4 times extra-large font size token.
   * Can be used for hudge text labels and captions.
   */
  fontSizeBaseX4L: number
  /**
   * Base 5 times extra-large font size token.
   * Use this size for huge text elements like hero title.
   * Supposed to be the largest font size in your interface.
   */
  fontSizeBaseX5L: number

  lineHeightBaseNone: number
  lineHeightBaseTight: number
  lineHeightBaseSnug: number
  lineHeightBaseNormal: number
  lineHeightBaseRelaxed: number
  lineHeightBaseLoose: number
}
export type ThemeContextProviderProps = PropsWithChildren<
  Partial<ThemeContextValue>
>
export type ThemeContextProviderComponent =
  FunctionComponent<ThemeContextProviderProps>
