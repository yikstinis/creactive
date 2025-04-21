/**
 * Supported by text component font weights enum.
 * Should be used to control the weight of the text.
 */
export enum TextFontWeight {
  THIN,
  EXTRA_LIGHT,
  LIGHT,
  REGULAR,
  MEDIUM,
  SEMIBOLD,
  BOLD,
  EXTRA_BOLD,
  BLACK,
}
// Mappted to themed key font weight constants.
export const TEXT_THEME_FONT_WEIGHT_KEY = {
  [TextFontWeight.THIN]: 'fontWeightBaseThin' as const,
  [TextFontWeight.EXTRA_LIGHT]: 'fontWeightBaseExtraLight' as const,
  [TextFontWeight.LIGHT]: 'fontWeightBaseLight' as const,
  [TextFontWeight.REGULAR]: 'fontWeightBaseRegular' as const,
  [TextFontWeight.MEDIUM]: 'fontWeightBaseMedium' as const,
  [TextFontWeight.SEMIBOLD]: 'fontWeightBaseSemiBold' as const,
  [TextFontWeight.BOLD]: 'fontWeightBaseBold' as const,
  [TextFontWeight.EXTRA_BOLD]: 'fontWeightBaseExtraBold' as const,
  [TextFontWeight.BLACK]: 'fontWeightBaseBlack' as const,
}

/**
 * Supported text font sizes enum.
 * Should be used to control the size of the text.
 */
export enum TextFontSize {
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
}
// Mappted to themed key font size constants.
export const TEXT_THEME_FONT_SIZE_KEY = {
  [TextFontSize.X2S]: 'fontSizeBaseX2S' as const,
  [TextFontSize.XS]: 'fontSizeBaseXS' as const,
  [TextFontSize.SM]: 'fontSizeBaseSM' as const,
  [TextFontSize.MD]: 'fontSizeBaseMD' as const,
  [TextFontSize.LG]: 'fontSizeBaseLG' as const,
  [TextFontSize.XL]: 'fontSizeBaseXL' as const,
  [TextFontSize.X2L]: 'fontSizeBaseX2L' as const,
  [TextFontSize.X3L]: 'fontSizeBaseX3L' as const,
  [TextFontSize.X4L]: 'fontSizeBaseX4L' as const,
  [TextFontSize.X5L]: 'fontSizeBaseX5L' as const,
}
