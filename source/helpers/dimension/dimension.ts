import { DimensionUnit } from './constants'
import type { DimensionValue } from './dimension.types'

// Helps to keep size and position constants better organized.
export class Dimension {
  public static readonly Unit = DimensionUnit

  private readonly unit: DimensionUnit
  private readonly value: number

  constructor(value: number, unit: DimensionUnit) {
    this.unit = unit
    this.value = value
  }

  toValue(): DimensionValue {
    if (this.unit === DimensionUnit.PIXEL) return this.value
    return `${this.value}%`
  }
}
