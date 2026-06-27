import { Dimension, Font } from '@/helpers'
import { Platform } from 'react-native'

export const FONT_FAMILY_DEFAULT = Platform.select({
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
  android: 'sans-serif',
  default: 'System',
})

export const FONT_FAMILY_TYPOGRAPHIC = Platform.select({
  web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
  ios: 'Times New Roman',
  default: 'serif',
})

export const FONT_WEIGHT_BASE_THIN = Font.Weight.THIN
export const FONT_WEIGHT_BASE_EXTRALIGHT = Font.Weight.EXTRALIGHT
export const FONT_WEIGHT_BASE_LIGHT = Font.Weight.LIGHT
export const FONT_WEIGHT_BASE_REGULAR = Font.Weight.REGULAR
export const FONT_WEIGHT_BASE_MEDIUM = Font.Weight.MEDIUM
export const FONT_WEIGHT_BASE_SEMIBOLD = Font.Weight.SEMIBOLD
export const FONT_WEIGHT_BASE_BOLD = Font.Weight.BOLD
export const FONT_WEIGHT_BASE_EXTRABOLD = Font.Weight.EXTRABOLD
export const FONT_WEIGHT_BASE_BLACK = Font.Weight.BLACK

// Android only resolves system fonts to a "normal" or "bold" face, with a cutoff at weight 700.
// Numeric weights below that are silently collapsed to "normal".
// There is no named system family for 600, so SEMIBOLD reuses the closest distinct face (sans-serif-medium).
// Without this it would be indistinguishable from REGULAR.
export const FONT_FAMILY_DEFAULT_ANDROID_BY_WEIGHT: Record<number, string> = {
  [FONT_WEIGHT_BASE_THIN]: 'sans-serif-thin',
  [FONT_WEIGHT_BASE_EXTRALIGHT]: 'sans-serif-thin',
  [FONT_WEIGHT_BASE_LIGHT]: 'sans-serif-light',
  [FONT_WEIGHT_BASE_REGULAR]: 'sans-serif',
  [FONT_WEIGHT_BASE_MEDIUM]: 'sans-serif-medium',
  [FONT_WEIGHT_BASE_SEMIBOLD]: 'sans-serif-medium',
  [FONT_WEIGHT_BASE_BOLD]: 'sans-serif',
  [FONT_WEIGHT_BASE_EXTRABOLD]: 'sans-serif-black',
  [FONT_WEIGHT_BASE_BLACK]: 'sans-serif-black',
}

export const FONT_SIZE_BASE_X2S = new Dimension(10)
export const FONT_SIZE_BASE_XS = new Dimension(12)
export const FONT_SIZE_BASE_SM = new Dimension(14)
export const FONT_SIZE_BASE_MD = new Dimension(16)
export const FONT_SIZE_BASE_LG = new Dimension(18)
export const FONT_SIZE_BASE_XL = new Dimension(20)
export const FONT_SIZE_BASE_X2L = new Dimension(24)
export const FONT_SIZE_BASE_X3L = new Dimension(30)
export const FONT_SIZE_BASE_X4L = new Dimension(36)
export const FONT_SIZE_BASE_X5L = new Dimension(48)
export const FONT_SIZE_BASE_X6L = new Dimension(60)
