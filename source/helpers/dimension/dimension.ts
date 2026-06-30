import { Platform } from 'react-native'
import { DimensionUnit } from './constants'
import type {
  PercentDimensionValue,
  PixelDimensionValue,
} from './dimension.types'

/**
 * Typed dimension value in a specific unit.
 * Use to pass sizes through component props without converting to a raw number or string until needed.
 */
export class Dimension<U extends DimensionUnit = DimensionUnit> {
  public static readonly Unit = DimensionUnit

  private readonly unit: DimensionUnit
  private readonly value: number

  constructor(value: number, unit: U = DimensionUnit.PIXEL as U) {
    this.unit = unit
    this.value = value
  }

  toValue(): U extends DimensionUnit.PIXEL
    ? PixelDimensionValue
    : PercentDimensionValue {
    type Result = U extends DimensionUnit.PIXEL
      ? PixelDimensionValue
      : PercentDimensionValue
    if (this.unit === DimensionUnit.PIXEL) {
      return (Platform.OS === 'web' ? `${this.value}px` : this.value) as Result
    }
    return `${this.value}%` as Result
  }

  toNumber(): number {
    return this.value
  }
}

/**
 * Convenience alias for a Dimension instance restricted to pixel unit.
 * Use in type annotations where only pixel dimensions are accepted.
 */
export type PixelDimension = Dimension<DimensionUnit.PIXEL>

/**
 * Convenience alias for a Dimension instance restricted to percent unit.
 * Use in type annotations where only percent dimensions are accepted.
 */
export type PercentDimension = Dimension<DimensionUnit.PERCENT>
