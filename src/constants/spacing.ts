import { Dimension } from '@/helpers/dimension/dimension'
import type { PixelDimension } from '@/helpers/dimension/dimension.types'

/**
 * Ordered spacing scale tokens (smallest to largest) for margin/padding/gap.
 * Use as keys into the theme's resolved values, not as literal pixel numbers.
 */
export const enum Spacing {
  X6S,
  X5S,
  X4S,
  X3S,
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
}

export const DEFAULT_SPACING_X6S_VALUE: PixelDimension = new Dimension(2)
export const DEFAULT_SPACING_X5S_VALUE: PixelDimension = new Dimension(4)
export const DEFAULT_SPACING_X4S_VALUE: PixelDimension = new Dimension(6)
export const DEFAULT_SPACING_X3S_VALUE: PixelDimension = new Dimension(8)
export const DEFAULT_SPACING_X2S_VALUE: PixelDimension = new Dimension(10)
export const DEFAULT_SPACING_XS_VALUE: PixelDimension = new Dimension(12)
export const DEFAULT_SPACING_SM_VALUE: PixelDimension = new Dimension(14)
export const DEFAULT_SPACING_MD_VALUE: PixelDimension = new Dimension(16)
export const DEFAULT_SPACING_LG_VALUE: PixelDimension = new Dimension(18)
export const DEFAULT_SPACING_XL_VALUE: PixelDimension = new Dimension(20)
export const DEFAULT_SPACING_X2L_VALUE: PixelDimension = new Dimension(24)
export const DEFAULT_SPACING_X3L_VALUE: PixelDimension = new Dimension(28)
export const DEFAULT_SPACING_X4L_VALUE: PixelDimension = new Dimension(32)
export const DEFAULT_SPACING_X5L_VALUE: PixelDimension = new Dimension(36)
export const DEFAULT_SPACING_X6L_VALUE: PixelDimension = new Dimension(40)

export const DEFAULT_SPACING_VALUES: Record<Spacing, PixelDimension> = {
  [Spacing.X6S]: DEFAULT_SPACING_X6S_VALUE,
  [Spacing.X5S]: DEFAULT_SPACING_X5S_VALUE,
  [Spacing.X4S]: DEFAULT_SPACING_X4S_VALUE,
  [Spacing.X3S]: DEFAULT_SPACING_X3S_VALUE,
  [Spacing.X2S]: DEFAULT_SPACING_X2S_VALUE,
  [Spacing.XS]: DEFAULT_SPACING_XS_VALUE,
  [Spacing.SM]: DEFAULT_SPACING_SM_VALUE,
  [Spacing.MD]: DEFAULT_SPACING_MD_VALUE,
  [Spacing.LG]: DEFAULT_SPACING_LG_VALUE,
  [Spacing.XL]: DEFAULT_SPACING_XL_VALUE,
  [Spacing.X2L]: DEFAULT_SPACING_X2L_VALUE,
  [Spacing.X3L]: DEFAULT_SPACING_X3L_VALUE,
  [Spacing.X4L]: DEFAULT_SPACING_X4L_VALUE,
  [Spacing.X5L]: DEFAULT_SPACING_X5L_VALUE,
  [Spacing.X6L]: DEFAULT_SPACING_X6L_VALUE,
}
