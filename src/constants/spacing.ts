import { Dimension } from '../helpers/dimension'
import type { PixelDimension } from '../helpers/dimension'

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

export const DEFAULT_SPACING_VALUES: Record<Spacing, PixelDimension> = {
  [Spacing.X6S]: new Dimension(2),
  [Spacing.X5S]: new Dimension(4),
  [Spacing.X4S]: new Dimension(6),
  [Spacing.X3S]: new Dimension(8),
  [Spacing.X2S]: new Dimension(10),
  [Spacing.XS]: new Dimension(12),
  [Spacing.SM]: new Dimension(14),
  [Spacing.MD]: new Dimension(16),
  [Spacing.LG]: new Dimension(18),
  [Spacing.XL]: new Dimension(20),
  [Spacing.X2L]: new Dimension(24),
  [Spacing.X3L]: new Dimension(28),
  [Spacing.X4L]: new Dimension(32),
  [Spacing.X5L]: new Dimension(36),
  [Spacing.X6L]: new Dimension(40),
}
