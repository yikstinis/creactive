import type { FontFamily } from './constants'

/**
 * Font family accepted when constructing a {@link Font}: a built-in enum member or a custom family name.
 * Use to type theme configuration that allows overriding the default or typographic font family.
 */
export type FontFamilyValue = FontFamily | string

/**
 * Serialized font weight as a string-coerced numeric weight value.
 * Use when passing a weight value to a style property directly.
 */
export type FontWeightValue =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
