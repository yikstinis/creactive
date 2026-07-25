import { Dimension } from '@/helpers/dimension'
import { Fraction } from '@/helpers/fraction'
import { faker } from '@faker-js/faker'
import {
  FONT_FAMILY_SANS_SERIF,
  FONT_FAMILY_SERIF,
  FontFamily,
  FontWeight,
} from './constants'
import { Font } from './font'

describe('@/helpers/font', () => {
  describe('Font', () => {
    it('exposes Family static property', () => {
      expect(Font.Family).toBe(FontFamily)
    })

    it('exposes Weight static property', () => {
      expect(Font.Weight).toBe(FontWeight)
    })

    describe('toFamilyValue', () => {
      it('resolves SANS_SERIF to platform string', () => {
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          new Dimension(16),
          new Fraction(1.5),
        )
        expect(font.toFamilyValue()).toBe(FONT_FAMILY_SANS_SERIF)
      })

      it('resolves SERIF to platform string', () => {
        const font = new Font(
          FontFamily.SERIF,
          FontWeight.REGULAR,
          new Dimension(16),
          new Fraction(1.5),
        )
        expect(font.toFamilyValue()).toBe(FONT_FAMILY_SERIF)
      })

      it('returns custom string family as-is', () => {
        const family = faker.lorem.word()
        const font = new Font(
          family,
          FontWeight.REGULAR,
          new Dimension(16),
          new Fraction(1.5),
        )
        expect(font.toFamilyValue()).toBe(family)
      })
    })

    describe('size', () => {
      it('exposes the configured size', () => {
        const size = new Dimension(faker.number.int({ min: 8, max: 32 }))
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          size,
          new Fraction(1.5),
        )
        expect(font.size).toBe(size)
      })
    })

    describe('lineHeight', () => {
      it('exposes the configured line height', () => {
        const lineHeight = new Fraction(faker.number.float({ min: 1, max: 2, fractionDigits: 2 }))
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          new Dimension(16),
          lineHeight,
        )
        expect(font.lineHeight).toBe(lineHeight)
      })
    })

    describe('toSizeValue', () => {
      it('resolves the configured size', () => {
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          new Dimension(16),
          new Fraction(1.5),
        )
        expect(font.toSizeValue()).toBe(new Dimension(16).toValue())
      })
    })

    describe('toWeightValue', () => {
      it('resolves the configured weight', () => {
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.BOLD,
          new Dimension(16),
          new Fraction(1.5),
        )
        expect(font.toWeightValue()).toBe(FontWeight.BOLD)
      })
    })

    describe('calculateLineHeight', () => {
      it('returns size multiplied by line height fraction as a PixelDimensionValue', () => {
        const size = faker.number.int({ min: 8, max: 32 })
        const lineHeight = faker.number.float({ min: 1, max: 2, fractionDigits: 2 })
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          new Dimension(size),
          new Fraction(lineHeight),
        )
        expect(font.calculateLineHeight()).toBe(new Dimension(size * lineHeight).toValue())
      })
    })

    describe('toLineHeightValue', () => {
      it('resolves the configured line height', () => {
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          new Dimension(16),
          new Fraction(1.5),
        )
        expect(font.toLineHeightValue()).toBe(new Fraction(1.5).toValue())
      })
    })
  })
})
