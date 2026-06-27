/**
 * Serialized pixel dimension value as a number (native) or px string (web).
 * Returned by {@link Dimension.toValue} when the unit is {@link DimensionUnit.PIXEL}.
 */
export type PixelDimensionValue = number | `${number}px`

/**
 * Serialized percent dimension value.
 * Returned by {@link Dimension.toValue} when the unit is {@link DimensionUnit.PERCENT}.
 */
export type PercentDimensionValue = `${number}%`

/**
 * Union of all serialized dimension value forms.
 * Covers every string or number shape returned by {@link Dimension.toValue} across all units.
 */
export type DimensionValue = PixelDimensionValue | PercentDimensionValue
