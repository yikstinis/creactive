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
// Theme border top width style key map.
export const VIEW_THEME_BORDER_WIDTH_TOP_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthTopBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthTopBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthTopBaseLG' as const,
}
// Theme border left width style key map.
export const VIEW_THEME_BORDER_WIDTH_LEFT_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthLeftBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthLeftBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthLeftBaseLG' as const,
}
// Theme border right width style key map.
export const VIEW_THEME_BORDER_WIDTH_RIGHT_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthRightBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthRightBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthRightBaseLG' as const,
}
// Theme border bottom width style key map.
export const VIEW_THEME_BORDER_WIDTH_BOTTOM_STYLE_KEY = {
  [ViewBorderWidth.SM]: 'borderWidthBottomBaseSM' as const,
  [ViewBorderWidth.MD]: 'borderWidthBottomBaseMD' as const,
  [ViewBorderWidth.LG]: 'borderWidthBottomBaseLG' as const,
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
// Theme style sheet border radius style key map.
export const VIEW_THEME_BORDER_RADIUS_TOP_LEFT_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusTopLeftBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusTopLeftBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusTopLeftBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusTopLeftBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusTopLeftBaseXL' as const,
}
export const VIEW_THEME_BORDER_RADIUS_TOP_RIGHT_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusTopRightBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusTopRightBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusTopRightBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusTopRightBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusTopRightBaseXL' as const,
}
export const VIEW_THEME_BORDER_RADIUS_BOTTOM_LEFT_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusBottomLeftBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBottomLeftBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBottomLeftBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBottomLeftBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBottomLeftBaseXL' as const,
}
export const VIEW_THEME_BORDER_RADIUS_BOTTOM_RIGHT_KEY = {
  [ViewBorderRadius.XS]: 'borderRadiusBottomRightBaseXS' as const,
  [ViewBorderRadius.SM]: 'borderRadiusBottomRightBaseSM' as const,
  [ViewBorderRadius.MD]: 'borderRadiusBottomRightBaseMD' as const,
  [ViewBorderRadius.LG]: 'borderRadiusBottomRightBaseLG' as const,
  [ViewBorderRadius.XL]: 'borderRadiusBottomRightBaseXL' as const,
}
