import { Platform } from 'react-native'

// Theme base font family constant.
export const FONT_FAMILY_BASE = Platform.select({
  web: [
    'ui-sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(','),
  default: 'System',
})

// Theme typographic font family constant.
export const FONT_FAMILY_TYPOGRAPHIC = Platform.select({
  web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
  ios: 'Times New Roman',
  default: 'serif',
})

// Theme base font weight constants.
export const FONT_WEIGHT_BASE_THIN = 100
export const FONT_WEIGHT_BASE_EXTRALIGHT = 200
export const FONT_WEIGHT_BASE_LIGHT = 300
export const FONT_WEIGHT_BASE_REGULAR = 400
export const FONT_WEIGHT_BASE_MEDIUM = 500
export const FONT_WEIGHT_BASE_SEMIBOLD = 600
export const FONT_WEIGHT_BASE_BOLD = 700
export const FONT_WEIGHT_BASE_EXTRABOLD = 800
export const FONT_WEIGHT_BASE_BLACK = 900

// Theme base font size constants.
export const FONT_SIZE_BASE_X2S = 12
export const FONT_SIZE_BASE_XS = 14
export const FONT_SIZE_BASE_SM = 16
export const FONT_SIZE_BASE_MD = 18
export const FONT_SIZE_BASE_LG = 20
export const FONT_SIZE_BASE_XL = 24
export const FONT_SIZE_BASE_X2L = 30
export const FONT_SIZE_BASE_X3L = 36
export const FONT_SIZE_BASE_X4L = 48
export const FONT_SIZE_BASE_X5L = 60
