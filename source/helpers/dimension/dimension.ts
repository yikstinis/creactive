import { Platform } from 'react-native'
import { DimensionUnit } from './constants'
import type { DimensionValue } from './dimension.types'

export class Dimension {
  public static readonly Unit = DimensionUnit

  private readonly unit: DimensionUnit
  private readonly value: number

  constructor(value: number, unit: DimensionUnit = DimensionUnit.PIXEL) {
    this.unit = unit
    this.value = value
  }

  toValue(): DimensionValue {
    if (this.unit === DimensionUnit.PIXEL) {
      return Platform.select({
        native: this.value as DimensionValue,
        web: `${this.value}px` as DimensionValue,
      })
    }
    return `${this.value}%`
  }
}
