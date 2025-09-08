/**
 * View border color enumerated constants.
 * Should be used to control view border color with property.
 * @see View.BorderColor
 */
export enum ViewBorderColor {
  BASE_100,
  BASE_200,
  BASE_300,
  BASE_400,
  BASE_500,
  BASE_600,
  BASE_700,
  BASE_800,
  BASE_900,
}

/**
 * Border width enumerated constants.
 * Should be used to control themed border width.
 * Includes matches for all theme base border width tokens.
 * @see View.BorderWidth
 */
export enum ViewBorderWidth {
  SM,
  MD,
  LG,
}

/**
 * View component supported border radius enumerated constants.
 * Includes matches for all theme base border radius tokens and maximum one.
 * @see View.BorderRadius
 */
export enum ViewBorderRadius {
  XS,
  SM,
  MD,
  LG,
  XL,
  MAX,
}
