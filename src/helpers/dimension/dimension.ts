/**
 * Unit a Dimension value is expressed in.
 * Use to distinguish a fixed pixel size from one relative to its container.
 */
export enum DimensionUnit {
  PIXEL,
  PERCENT,
}

/**
 * Numeric size paired with the unit it is expressed in.
 * Use to pass sizes through the library without committing to a unit until the value is consumed.
 * Prefer PixelDimension/PercentDimension over passing DimensionUnit explicitly when the unit is known.
 */
export class Dimension<U extends DimensionUnit = DimensionUnit> {
  static readonly Unit = DimensionUnit

  readonly value: number
  readonly unit: U

  constructor(value: number, unit: U = DimensionUnit.PIXEL as U) {
    this.value = value
    this.unit = unit
  }
}
