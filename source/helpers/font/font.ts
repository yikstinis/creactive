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
  static readonly Family = FontFamily
  static readonly Weight = FontWeight

  readonly family: FontFamily
  readonly weight: FontWeight
  readonly size: PixelDimension
  readonly lineHeight: Fraction

  constructor(
    family: FontFamily,
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
    return FONT_FAMILY_SERIF
  }

  toSizeValue() {
    return this.size.toValue()
  }

  toLineHeightValue() {
    return this.lineHeight.toValue()
  }

  calculateLineHeight(): PixelDimensionValue {
    return new Dimension(
      this.size.value * this.lineHeight.value,
    ).toValue() as PixelDimensionValue
  }
}
