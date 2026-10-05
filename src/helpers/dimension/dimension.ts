export enum DimensionUnit {
  PIXEL,
  PERCENT,
}

export class Dimension<U extends DimensionUnit = DimensionUnit> {
  static readonly Unit = DimensionUnit

  readonly value: number
  readonly unit: U

  constructor(value: number, unit: U = DimensionUnit.PIXEL as U) {
    this.value = value
    this.unit = unit
  }
}
