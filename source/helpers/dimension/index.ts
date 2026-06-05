import { Dimension } from './dimension'

export type {
  DimensionValue,
  PercentDimensionValue,
  PixelDimensionValue,
} from './dimension.types'
export { Dimension }
export type { PercentDimension, PixelDimension } from './dimension'

export const DIMENSION_MIN = new Dimension(0, Dimension.Unit.PERCENT)
export const DIMENSION_MAX = new Dimension(100, Dimension.Unit.PERCENT)
