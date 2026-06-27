import type { PixelDimension } from '@/helpers/dimension'
import type { Fraction } from '@/helpers/fraction'
import { FontWeight } from './constants'

/**
 * Typed font value bundling size, line height, and weight.
 * Use to pass font configuration through component props without serializing until needed.
 */
export class Font {
  public static readonly Weight = FontWeight

  private readonly family: string
  private readonly size: PixelDimension
  private readonly weight: FontWeight
  private readonly lineHeight: Fraction

  constructor(
    family: string,
    size: PixelDimension,
    weight: FontWeight,
    lineHeight: Fraction,
  ) {
    this.family = family
    this.size = size
    this.weight = weight
    this.lineHeight = lineHeight
  }
}
