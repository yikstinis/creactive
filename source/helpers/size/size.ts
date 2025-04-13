import { Dimension } from '@/constants/dimension'
import { Platform } from 'react-native'
import type { SizeValue } from './size.types'

/**
 * Don't want to accept non-themed literal size values inside component.
 * This helper is an attempt to avoid magic numbers and strings when sizing.
 * Components are supposed to accept this class instances for sizing.
 * This may force us to create optimized and named global size constants.
 */
export class Size {
  public static readonly Dimension = Dimension

  private readonly amount: number
  private readonly dimension: Dimension

  constructor(amount: number, dimension: Dimension = Dimension.PIXEL) {
    this.amount = amount
    this.dimension = dimension
  }

  toValue(): SizeValue {
    if (this.dimension === Dimension.PIXEL) {
      return Platform.select({
        web: `${this.amount}px` as SizeValue,
        default: this.amount,
      })
    }
    return `${this.amount}%`
  }
}
