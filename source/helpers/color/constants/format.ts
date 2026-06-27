/**
 * Color serialization format enum.
 * Specifies the encoding strategy used by {@link Color.toValue} to convert color components to a string.
 */
export enum ColorFormat {
  /**
   * Red-green-blue integer components without alpha.
   * Use for fully opaque colors where no transparency is needed.
   */
  RGB,
  /**
   * Fully transparent keyword.
   * Use to represent an invisible or no-color value.
   */
  TRANSPARENT,
}
