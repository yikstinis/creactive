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
// Mapped to theme native style sheet keys view border radius constants.
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
