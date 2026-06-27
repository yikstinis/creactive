import { Dimension } from './dimension'

export type { PercentDimension, PixelDimension } from './dimension'
export type {
  DimensionValue,
  PercentDimensionValue,
  PixelDimensionValue,
} from './dimension.types'
export { Dimension }

export const DIMENSION_NONE = new Dimension(0)
export const DIMENSION_MIN = new Dimension(0, Dimension.Unit.PERCENT)
export const DIMENSION_HALF = new Dimension(50, Dimension.Unit.PERCENT)
export const DIMENSION_MAX = new Dimension(100, Dimension.Unit.PERCENT)
