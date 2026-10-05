import { Dimension } from '@/helpers/dimension/dimension'
import type { PixelDimension } from '@/helpers/dimension/dimension.types'

export enum Spacing {
  X6S = 'X6S',
  X5S = 'X5S',
  X4S = 'X4S',
  X3S = 'X3S',
  X2S = 'X2S',
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  X2L = 'X2L',
  X3L = 'X3L',
  X4L = 'X4L',
  X5L = 'X5L',
  X6L = 'X6L',
}

export const DEFAULT_SPACING_X6S: PixelDimension = new Dimension(2)
export const DEFAULT_SPACING_X5S: PixelDimension = new Dimension(4)
export const DEFAULT_SPACING_X4S: PixelDimension = new Dimension(6)
export const DEFAULT_SPACING_X3S: PixelDimension = new Dimension(8)
export const DEFAULT_SPACING_X2S: PixelDimension = new Dimension(10)
export const DEFAULT_SPACING_XS: PixelDimension = new Dimension(12)
export const DEFAULT_SPACING_SM: PixelDimension = new Dimension(14)
export const DEFAULT_SPACING_MD: PixelDimension = new Dimension(16)
export const DEFAULT_SPACING_LG: PixelDimension = new Dimension(18)
export const DEFAULT_SPACING_XL: PixelDimension = new Dimension(20)
export const DEFAULT_SPACING_X2L: PixelDimension = new Dimension(24)
export const DEFAULT_SPACING_X3L: PixelDimension = new Dimension(28)
export const DEFAULT_SPACING_X4L: PixelDimension = new Dimension(32)
export const DEFAULT_SPACING_X5L: PixelDimension = new Dimension(36)
export const DEFAULT_SPACING_X6L: PixelDimension = new Dimension(40)

export const DEFAULT_SPACING: Record<Spacing, PixelDimension> = {
  [Spacing.X6S]: DEFAULT_SPACING_X6S,
  [Spacing.X5S]: DEFAULT_SPACING_X5S,
  [Spacing.X4S]: DEFAULT_SPACING_X4S,
  [Spacing.X3S]: DEFAULT_SPACING_X3S,
  [Spacing.X2S]: DEFAULT_SPACING_X2S,
  [Spacing.XS]: DEFAULT_SPACING_XS,
  [Spacing.SM]: DEFAULT_SPACING_SM,
  [Spacing.MD]: DEFAULT_SPACING_MD,
  [Spacing.LG]: DEFAULT_SPACING_LG,
  [Spacing.XL]: DEFAULT_SPACING_XL,
  [Spacing.X2L]: DEFAULT_SPACING_X2L,
  [Spacing.X3L]: DEFAULT_SPACING_X3L,
  [Spacing.X4L]: DEFAULT_SPACING_X4L,
  [Spacing.X5L]: DEFAULT_SPACING_X5L,
  [Spacing.X6L]: DEFAULT_SPACING_X6L,
}
