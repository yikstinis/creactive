import { Platform } from 'react-native'
import type { SizeValue } from './size.types'

/**
 * Supported size dimension.
 * Required to create size instances.
 */
enum SizeDimension {
  PIXEL,
  PERCENT,
}

/**
 * Don't want to accept non-themed literal size values inside component.
 * This helper is an attempt to avoid magic numbers and strings when sizing.
 * Components are supposed to accept this class instances for sizing.
 * This may force us to create optimized and named global size constants.
 */
export class Size {
  public static readonly Dimension = SizeDimension

  private readonly amount: number
  private readonly dimension: SizeDimension

  constructor(amount: number, dimension: SizeDimension = SizeDimension.PIXEL) {
    this.amount = amount
    this.dimension = dimension
  }

  toValue(): SizeValue {
    if (this.dimension === Size.Dimension.PIXEL) {
      return Platform.select({
        web: `${this.amount}px` as SizeValue,
        default: this.amount,
      })
    }
    return `${this.amount}%`
  }
}
