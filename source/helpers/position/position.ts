import { Dimension } from '@/constants/dimension'
import { Platform } from 'react-native'
import type { PositionValue } from './position.types'

/**
 * Don't want to accept non-themed literal position values inside component.
 * This class may help to avoid magic numbers and strings when positioning.
 * Components are supposed to accept this class instances for positioning.
 * This may force us to create optimized and named global position constants.
 */
export class Position {
  public static readonly Dimension = Dimension

  private readonly amount: number
  private readonly dimension: Dimension

  constructor(amount: number, dimension: Dimension = Dimension.PIXEL) {
    this.amount = amount
    this.dimension = dimension
  }

  toValue(): PositionValue {
    if (this.dimension === Dimension.PIXEL) {
      return Platform.select({
        web: `${this.amount}px` as PositionValue,
        default: this.amount,
      })
    }
    return `${this.amount}%`
  }
}
