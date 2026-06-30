import {
  Dimension,
  type PixelDimension,
  PixelDimensionValue,
} from '@/helpers/dimension'
import type { Fraction } from '@/helpers/fraction'
import { Platform } from 'react-native'
import {
  FONT_FAMILY_SANS_SERIF,
  FONT_FAMILY_SANS_SERIF_ANDROID_BY_WEIGHT,
  FONT_FAMILY_SERIF,
  FontFamily,
  FontWeight,
} from './constants'

/**
 * Typed font value bundling family, weight, and optionally size and line height.
 * Use to pass font configuration through component props without serializing until needed.
 */
export class Font {
  public static readonly Family = FontFamily
  public static readonly Weight = FontWeight

  private readonly family: FontFamily | string
  private readonly weight: FontWeight
  private readonly size: PixelDimension
  private readonly lineHeight: Fraction

  constructor(
    family: FontFamily | string,
    weight: FontWeight,
    size: PixelDimension,
    lineHeight: Fraction,
  ) {
    this.family = family
    this.weight = weight
    this.size = size
    this.lineHeight = lineHeight
  }

  toFamilyValue(): string {
    if (this.family === FontFamily.SANS_SERIF) {
      return Platform.OS === 'android'
        ? FONT_FAMILY_SANS_SERIF_ANDROID_BY_WEIGHT[this.weight]
        : FONT_FAMILY_SANS_SERIF
    }
    if (this.family === FontFamily.SERIF) {
      return FONT_FAMILY_SERIF
    }
    return this.family as string
  }

  toSizeValue() {
    return this.size.toValue()
  }

  toSizeNumber() {
    return this.size.toNumber()
  }

  toWeightValue(): FontWeight {
    return this.weight
  }

  toLineHeightValue() {
    return this.lineHeight.toValue()
  }

  toLineHeightNumber() {
    return this.lineHeight.toNumber()
  }

  calculateLineHeight(): PixelDimensionValue {
    return new Dimension(
      this.size.toNumber() * this.lineHeight.toNumber(),
    ).toValue() as PixelDimensionValue
  }
}
