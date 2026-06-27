/**
 * Dimension unit enum.
 * Specifies the unit strategy used by {@link Dimension.toValue} to serialize the numeric value.
 */
export enum DimensionUnit {
  /**
   * Pixel unit, serialized as a number on native and a `px` string on web.
   * Use for fixed-size dimensions that do not scale with the container.
   */
  PIXEL,
  /**
   * Percent unit, serialized as a percentage string.
   * Use for dimensions that scale relative to the parent container.
   */
  PERCENT,
}
