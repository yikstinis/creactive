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
// Mapped to themed native style sheet keys view border width constants.
export const ViewBorderWidthThemeStyleSheetKey = {
  [ViewBorderWidth.SM]: 'borderWidthBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBaseLG' as const,
}
// Mapped to theme token keys view border width constants.
export const ViewBorderWidthThemeTokenKey = {
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
// Mapped to themed native style sheet keys view border radius constants.
export const ViewBorderRadiusThemeStyleSheetKey = {
  [ViewBorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBaseXL' as const,
}
// Mapped to theme token keys view border radius constants.
export const ViewBorderRadiusThemeTokenKey = {
  [ViewBorderRadius.XS]: 'borderRadiusBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBaseXL' as const,
}
