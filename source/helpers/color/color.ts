import type {
  ColorValue,
  RGBColorValue,
  TransparentColorValue,
} from './color.types'
import { ColorFormat } from './constants'

/**
 * Typed color value in a specific serialization format.
 * Use to pass colors through component props without converting to a raw string until needed.
 */
export class Color<F extends ColorFormat = ColorFormat.RGB> {
  public static readonly Format = ColorFormat

  static from(value: RGBColorValue): Color<ColorFormat.RGB>
  static from(value: TransparentColorValue): Color<ColorFormat.TRANSPARENT>
  static from(value: ColorValue): Color<ColorFormat.RGB> | Color<ColorFormat.TRANSPARENT> {
    if (value === 'transparent') {
      return new Color(0, 0, 0, ColorFormat.TRANSPARENT)
    }
    const match = value.match(/^rgb\((\d+),(\d+),(\d+)\)$/)!
    return new Color(Number(match[1]), Number(match[2]), Number(match[3]))
  }

  private readonly format: ColorFormat
  private readonly r: number
  private readonly g: number
  private readonly b: number

  constructor(r: number, g: number, b: number, format: F = ColorFormat.RGB as F) {
    this.format = format
    this.r = r
    this.g = g
    this.b = b
  }

  toValue(): F extends ColorFormat.TRANSPARENT ? TransparentColorValue : RGBColorValue {
    type Result = F extends ColorFormat.TRANSPARENT ? TransparentColorValue : RGBColorValue
    if (this.format === ColorFormat.TRANSPARENT) {
      return 'transparent' as Result
    }
    return `rgb(${this.r},${this.g},${this.b})` as Result
  }
}

/**
 * Convenience alias for a Color instance restricted to RGB format.
 * Use in type annotations where only opaque RGB colors are accepted.
 */
export type RGBColor = Color<ColorFormat.RGB>

/**
 * Convenience alias for a Color instance restricted to transparent format.
 * Use in type annotations where only the transparent keyword is acceptable.
 */
export type TransparentColor = Color<ColorFormat.TRANSPARENT>
