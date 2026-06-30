import { Dimension, Font, FontFamily, FontWeight, Fraction } from '@/helpers'
import { renderHook } from '@testing-library/react-native'
import { TextFontFamily, TextFontSize, TextFontWeight } from '../constants'
import {
  useTextFontFamily,
  useTextFontFamilyStyle,
  useTextFontSize,
  useTextFontSizeStyle,
  useTextFontWeight,
  useTextFontWeightStyle,
} from './use-font'

describe('@/components/atoms/text', () => {
  describe('hooks/use-font', () => {
    describe('text font family value hook', () => {
      it('returns default font family', () => {
        const { result } = renderHook(() =>
          useTextFontFamily(TextFontFamily.DEFAULT),
        )
        expect(result.current).toBe(FontFamily.SANS_SERIF)
      })

      it('returns typographic font family', () => {
        const { result } = renderHook(() =>
          useTextFontFamily(TextFontFamily.TYPOGRAPHIC),
        )
        expect(result.current).toBe(FontFamily.SERIF)
      })
    })

    describe('text font family style hook', () => {
      it('returns font family style from a font', () => {
        const font = new Font(
          FontFamily.SERIF,
          FontWeight.REGULAR,
          new Dimension(16),
          new Fraction(1.5),
        )
        const { result } = renderHook(() => useTextFontFamilyStyle(font))
        expect(result.current.fontFamily).toBe(font.toFamilyValue())
      })
    })

    describe('text font weight value hook', () => {
      it('returns thin font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.THIN),
        )
        expect(result.current).toBe(100)
      })

      it('returns extra light font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.EXTRA_LIGHT),
        )
        expect(result.current).toBe(200)
      })

      it('returns light font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.LIGHT),
        )
        expect(result.current).toBe(300)
      })

      it('returns regular font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.REGULAR),
        )
        expect(result.current).toBe(400)
      })

      it('returns medium font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.MEDIUM),
        )
        expect(result.current).toBe(500)
      })

      it('returns semi bold font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.SEMIBOLD),
        )
        expect(result.current).toBe(600)
      })

      it('returns bold font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.BOLD),
        )
        expect(result.current).toBe(700)
      })

      it('returns extra bold font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.EXTRA_BOLD),
        )
        expect(result.current).toBe(800)
      })

      it('returns black font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeight(TextFontWeight.BLACK),
        )
        expect(result.current).toBe(900)
      })
    })

    describe('text font weight style hook', () => {
      it('returns font weight style from a font', () => {
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.BOLD,
          new Dimension(16),
          new Fraction(1.5),
        )
        const { result } = renderHook(() => useTextFontWeightStyle(font))
        expect(result.current.fontWeight).toBe(700)
      })
    })

    describe('text font size value hook', () => {
      it('returns 2 times extra-small font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X2S))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '10px',
          default: 10,
        })
      })

      it('returns extra-small font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.XS))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '12px',
          default: 12,
        })
      })

      it('returns small font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.SM))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '14px',
          default: 14,
        })
      })

      it('returns medium font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.MD))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '16px',
          default: 16,
        })
      })

      it('returns large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.LG))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '18px',
          default: 18,
        })
      })

      it('returns extra-large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.XL))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '20px',
          default: 20,
        })
      })

      it('returns 2 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X2L))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '24px',
          default: 24,
        })
      })

      it('returns 3 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X3L))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '30px',
          default: 30,
        })
      })

      it('returns 4 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X4L))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '36px',
          default: 36,
        })
      })

      it('returns 5 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X5L))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '48px',
          default: 48,
        })
      })

      it('returns 6 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X6L))
        expect(result.current.toValue()).toEqualPlatformStyle({
          web: '60px',
          default: 60,
        })
      })
    })

    describe('text font size style hook', () => {
      it('returns font size style from a font', () => {
        const font = new Font(
          FontFamily.SANS_SERIF,
          FontWeight.REGULAR,
          new Dimension(24),
          new Fraction(1.5),
        )
        const { result } = renderHook(() => useTextFontSizeStyle(font))
        expect(result.current.fontSize).toEqualPlatformStyle({
          web: '24px',
          default: 24,
        })
      })
    })
  })
})
