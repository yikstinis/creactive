/**
 * Border width enumerated constants.
 * Should be used to control themed border width.
 * Includes matches for all theme base border width tokens.
 */
export enum ViewBorderWidth {
  SM,
  MD,
  LG,
}
// Theme border width key map.
export const VIEW_THEME_BORDER_WIDTH_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBaseLG' as const,
}

/**
 * View component supported border radius enumerated constants.
 * Includes matches for all theme base border radius tokens and maximum one.
 */
export enum ViewBorderRadius {
  XS,
  SM,
  MD,
  LG,
  XL,
  MAX,
}
// Theme border radius key map.
export const VIEW_THEME_BORDER_RADIUS_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBaseXL' as const,
}
