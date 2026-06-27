/**
 * Serialized RGB color string.
 * Returned by {@link Color.toValue} when the format is {@link ColorFormat.RGB}.
 */
export type RGBColorValue = `rgb(${number},${number},${number})`

/**
 * Serialized transparent color string literal.
 * Returned by {@link Color.toValue} when the format is {@link ColorFormat.TRANSPARENT}.
 */
export type TransparentColorValue = 'transparent'

/**
 * Union of all serialized color value forms.
 * Covers every string shape returned by {@link Color.toValue} across all formats.
 */
export type ColorValue = RGBColorValue | TransparentColorValue
