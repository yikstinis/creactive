/**
 * View component spacing enumerated contstants.
 * Allows to control view margin and padding with properties.
 */
export enum ViewSpacing {
  X2S,
  XS,
  SM,
  MD,
  LG,
  XL,
  X2L,
  X3L,
  X4L,
  X5L,
  X6L,
  X7L,
}

// View component native version theme style sheet map.
// This contsants map spacing properties to theme style sheet keys.
// We keep this mappings separated from using them hooks to keep it clear.

// Margin top.
export const ViewMarginTopThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'marginTopBaseX2S' as const,
  [ViewSpacing.XS]: 'marginTopBaseXS' as const,
  [ViewSpacing.SM]: 'marginTopBaseSM' as const,
  [ViewSpacing.MD]: 'marginTopBaseMD' as const,
  [ViewSpacing.LG]: 'marginTopBaseLG' as const,
  [ViewSpacing.XL]: 'marginTopBaseXL' as const,
  [ViewSpacing.X2L]: 'marginTopBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginTopBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginTopBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginTopBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginTopBaseX6L' as const,
  [ViewSpacing.X7L]: 'marginTopBaseX7L' as const,
}
// Padding top.
export const ViewPaddingTopThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'paddingTopBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingTopBaseXS' as const,
  [ViewSpacing.SM]: 'paddingTopBaseSM' as const,
  [ViewSpacing.MD]: 'paddingTopBaseMD' as const,
  [ViewSpacing.LG]: 'paddingTopBaseLG' as const,
  [ViewSpacing.XL]: 'paddingTopBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingTopBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingTopBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingTopBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingTopBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingTopBaseX6L' as const,
  [ViewSpacing.X7L]: 'paddingTopBaseX7L' as const,
}
// Margin left.
export const ViewMarginLeftThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'marginLeftBaseX2S' as const,
  [ViewSpacing.XS]: 'marginLeftBaseXS' as const,
  [ViewSpacing.SM]: 'marginLeftBaseSM' as const,
  [ViewSpacing.MD]: 'marginLeftBaseMD' as const,
  [ViewSpacing.LG]: 'marginLeftBaseLG' as const,
  [ViewSpacing.XL]: 'marginLeftBaseXL' as const,
  [ViewSpacing.X2L]: 'marginLeftBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginLeftBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginLeftBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginLeftBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginLeftBaseX6L' as const,
  [ViewSpacing.X7L]: 'marginLeftBaseX7L' as const,
}
// Padding left.
export const ViewPaddingLeftThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'paddingLeftBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingLeftBaseXS' as const,
  [ViewSpacing.SM]: 'paddingLeftBaseSM' as const,
  [ViewSpacing.MD]: 'paddingLeftBaseMD' as const,
  [ViewSpacing.LG]: 'paddingLeftBaseLG' as const,
  [ViewSpacing.XL]: 'paddingLeftBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingLeftBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingLeftBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingLeftBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingLeftBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingLeftBaseX6L' as const,
  [ViewSpacing.X7L]: 'paddingLeftBaseX7L' as const,
}
// Margin right.
export const ViewMarginRightThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'marginRightBaseX2S' as const,
  [ViewSpacing.XS]: 'marginRightBaseXS' as const,
  [ViewSpacing.SM]: 'marginRightBaseSM' as const,
  [ViewSpacing.MD]: 'marginRightBaseMD' as const,
  [ViewSpacing.LG]: 'marginRightBaseLG' as const,
  [ViewSpacing.XL]: 'marginRightBaseXL' as const,
  [ViewSpacing.X2L]: 'marginRightBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginRightBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginRightBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginRightBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginRightBaseX6L' as const,
  [ViewSpacing.X7L]: 'marginRightBaseX7L' as const,
}
// Padding right.
export const ViewPaddingRightThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'paddingRightBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingRightBaseXS' as const,
  [ViewSpacing.SM]: 'paddingRightBaseSM' as const,
  [ViewSpacing.MD]: 'paddingRightBaseMD' as const,
  [ViewSpacing.LG]: 'paddingRightBaseLG' as const,
  [ViewSpacing.XL]: 'paddingRightBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingRightBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingRightBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingRightBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingRightBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingRightBaseX6L' as const,
  [ViewSpacing.X7L]: 'paddingRightBaseX7L' as const,
}
// Margin bottom.
export const ViewMarginBottomThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'marginBottomBaseX2S' as const,
  [ViewSpacing.XS]: 'marginBottomBaseXS' as const,
  [ViewSpacing.SM]: 'marginBottomBaseSM' as const,
  [ViewSpacing.MD]: 'marginBottomBaseMD' as const,
  [ViewSpacing.LG]: 'marginBottomBaseLG' as const,
  [ViewSpacing.XL]: 'marginBottomBaseXL' as const,
  [ViewSpacing.X2L]: 'marginBottomBaseX2L' as const,
  [ViewSpacing.X3L]: 'marginBottomBaseX3L' as const,
  [ViewSpacing.X4L]: 'marginBottomBaseX4L' as const,
  [ViewSpacing.X5L]: 'marginBottomBaseX5L' as const,
  [ViewSpacing.X6L]: 'marginBottomBaseX6L' as const,
  [ViewSpacing.X7L]: 'marginBottomBaseX7L' as const,
}
// Padding bottom.
export const ViewPaddingBottomThemeStyleSheetKey = {
  [ViewSpacing.X2S]: 'paddingBottomBaseX2S' as const,
  [ViewSpacing.XS]: 'paddingBottomBaseXS' as const,
  [ViewSpacing.SM]: 'paddingBottomBaseSM' as const,
  [ViewSpacing.MD]: 'paddingBottomBaseMD' as const,
  [ViewSpacing.LG]: 'paddingBottomBaseLG' as const,
  [ViewSpacing.XL]: 'paddingBottomBaseXL' as const,
  [ViewSpacing.X2L]: 'paddingBottomBaseX2L' as const,
  [ViewSpacing.X3L]: 'paddingBottomBaseX3L' as const,
  [ViewSpacing.X4L]: 'paddingBottomBaseX4L' as const,
  [ViewSpacing.X5L]: 'paddingBottomBaseX5L' as const,
  [ViewSpacing.X6L]: 'paddingBottomBaseX6L' as const,
  [ViewSpacing.X7L]: 'paddingBottomBaseX7L' as const,
}

// View spacing theme token key.
// Maps view spacing property to theme spacing token.
// For web version we use theme spacing tokens directly.
// This map is used inside spacing hook, moved here to keep it a bit more clear.
export const ViewSpacingThemeTokenKey = {
  [ViewSpacing.X2S]: 'spacingBaseX2S' as const,
  [ViewSpacing.XS]: 'spacingBaseXS' as const,
  [ViewSpacing.SM]: 'spacingBaseSM' as const,
  [ViewSpacing.MD]: 'spacingBaseMD' as const,
  [ViewSpacing.LG]: 'spacingBaseLG' as const,
  [ViewSpacing.XL]: 'spacingBaseXL' as const,
  [ViewSpacing.X2L]: 'spacingBaseX2L' as const,
  [ViewSpacing.X3L]: 'spacingBaseX3L' as const,
  [ViewSpacing.X4L]: 'spacingBaseX4L' as const,
  [ViewSpacing.X5L]: 'spacingBaseX5L' as const,
  [ViewSpacing.X6L]: 'spacingBaseX6L' as const,
  [ViewSpacing.X7L]: 'spacingBaseX7L' as const,
}
