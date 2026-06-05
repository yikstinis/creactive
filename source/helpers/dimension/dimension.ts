import { Platform } from 'react-native'
import { DimensionUnit } from './constants'
import type {
  PercentDimensionValue,
  PixelDimensionValue,
} from './dimension.types'

export class Dimension<U extends DimensionUnit = DimensionUnit> {
  public static readonly Unit = DimensionUnit

  private readonly unit: DimensionUnit
  private readonly value: number

  constructor(value: number, unit: U = DimensionUnit.PIXEL as U) {
    this.unit = unit
    this.value = value
  }

  toValue(): U extends DimensionUnit.PIXEL ? PixelDimensionValue : PercentDimensionValue {
    type Result = U extends DimensionUnit.PIXEL
      ? PixelDimensionValue
      : PercentDimensionValue
    if (this.unit === DimensionUnit.PIXEL) {
      return (
        Platform.OS === 'web' ? `${this.value}px` : this.value
      ) as Result
    }
    return `${this.value}%` as Result
  }
}

export type PixelDimension = Dimension<DimensionUnit.PIXEL>
export type PercentDimension = Dimension<DimensionUnit.PERCENT>
