import { renderHook } from '@testing-library/react-native'
import { Platform } from 'react-native'
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
    describe('text font family style hook', () => {
      it('returns base font family style', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyStyle(
            TextFontFamily.DEFAULT,
            TextFontWeight.REGULAR,
          ),
        )
        expect(result.current.fontFamily).toBe(
          Platform.select({
            web: [
              'ui-sans-serif',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              'Helvetica',
              'Arial',
              'sans-serif',
            ].join(',') as string,
            android: 'sans-serif' as string,
            default: 'System' as string,
          }),
        )
      })

      it('returns a distinct base font family style per weight on android', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyStyle(
            TextFontFamily.DEFAULT,
            TextFontWeight.SEMIBOLD,
          ),
        )
        expect(result.current.fontFamily).toBe(
          Platform.select({
            web: [
              'ui-sans-serif',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              'Helvetica',
              'Arial',
              'sans-serif',
            ].join(',') as string,
            android: 'sans-serif-medium' as string,
            default: 'System' as string,
          }),
        )
      })

      it('returns typographic font family style', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyStyle(
            TextFontFamily.TYPOGRAPHIC,
            TextFontWeight.REGULAR,
          ),
        )
        expect(result.current.fontFamily).toBe(
          Platform.select({
            web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
            ios: 'Times New Roman',
            default: 'serif',
          }),
        )
      })
    })

    describe('text font family value hook', () => {
      it('returns base font family value', () => {
        const { result } = renderHook(() =>
          useTextFontFamily(TextFontFamily.DEFAULT, TextFontWeight.REGULAR),
        )
        expect(result.current).toBe(
          Platform.select({
            web: [
              'ui-sans-serif',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              'Helvetica',
              'Arial',
              'sans-serif',
            ].join(','),
            android: 'sans-serif',
            default: 'System',
          }),
        )
      })

      it('returns a distinct base font family value per weight on android', () => {
        const { result } = renderHook(() =>
          useTextFontFamily(TextFontFamily.DEFAULT, TextFontWeight.SEMIBOLD),
        )
        expect(result.current).toBe(
          Platform.select({
            web: [
              'ui-sans-serif',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              'Helvetica',
              'Arial',
              'sans-serif',
            ].join(','),
            android: 'sans-serif-medium',
            default: 'System',
          }),
        )
      })

      it('returns typographic font family value', () => {
        const { result } = renderHook(() =>
          useTextFontFamily(TextFontFamily.TYPOGRAPHIC, TextFontWeight.REGULAR),
        )
        expect(result.current).toBe(
          Platform.select({
            web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
            ios: 'Times New Roman',
            default: 'serif',
          }),
        )
      })
    })

    describe('text font weight style hook', () => {
      it('returns thin font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.THIN),
        )
        expect(result.current.fontWeight).toBe(100)
      })

      it('returns extra light font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.EXTRA_LIGHT),
        )
        expect(result.current.fontWeight).toBe(200)
      })

      it('returns light font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.LIGHT),
        )
        expect(result.current.fontWeight).toBe(300)
      })

      it('returns regular font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.REGULAR),
        )
        expect(result.current.fontWeight).toBe(400)
      })

      it('returns medium font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.MEDIUM),
        )
        expect(result.current.fontWeight).toBe(500)
      })

      it('returns semi bold font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.SEMIBOLD),
        )
        expect(result.current.fontWeight).toBe(600)
      })

      it('returns bold font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.BOLD),
        )
        expect(result.current.fontWeight).toBe(700)
      })

      it('returns extra bold font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.EXTRA_BOLD),
        )
        expect(result.current.fontWeight).toBe(800)
      })

      it('returns black font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.BLACK),
        )
        expect(result.current.fontWeight).toBe(900)
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

    describe('text font size style hook', () => {
      it('returns 2 times extra-small font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X2S),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 10 })
      })

      it('returns extra-small font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.XS),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 12 })
      })

      it('returns small font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.SM),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 14 })
      })

      it('returns medium font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.MD),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 16 })
      })

      it('returns large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.LG),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 18 })
      })

      it('returns extra-large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.XL),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 20 })
      })

      it('returns 2 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X2L),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 24 })
      })

      it('returns 3 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X3L),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 30 })
      })

      it('returns 4 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X4L),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 36 })
      })

      it('returns 5 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X5L),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 48 })
      })

      it('returns 6 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X6L),
        )
        expect(result.current).toEqualPlatformStyle({ fontSize: 60 })
      })
    })

    describe('text font size value hook', () => {
      it('returns 2 times extra-small font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X2S))
        expect(result.current).toEqualPlatformStyle({
          web: '10px',
          default: 10,
        })
      })

      it('returns extra-small font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.XS))
        expect(result.current).toEqualPlatformStyle({
          web: '12px',
          default: 12,
        })
      })

      it('returns small font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.SM))
        expect(result.current).toEqualPlatformStyle({
          web: '14px',
          default: 14,
        })
      })

      it('returns medium font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.MD))
        expect(result.current).toEqualPlatformStyle({
          web: '16px',
          default: 16,
        })
      })

      it('returns large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.LG))
        expect(result.current).toEqualPlatformStyle({
          web: '18px',
          default: 18,
        })
      })

      it('returns extra-large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.XL))
        expect(result.current).toEqualPlatformStyle({
          web: '20px',
          default: 20,
        })
      })

      it('returns 2 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X2L))
        expect(result.current).toEqualPlatformStyle({
          web: '24px',
          default: 24,
        })
      })

      it('returns 3 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X3L))
        expect(result.current).toEqualPlatformStyle({
          web: '30px',
          default: 30,
        })
      })

      it('returns 4 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X4L))
        expect(result.current).toEqualPlatformStyle({
          web: '36px',
          default: 36,
        })
      })

      it('returns 5 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X5L))
        expect(result.current).toEqualPlatformStyle({
          web: '48px',
          default: 48,
        })
      })

      it('returns 6 times large font size value', () => {
        const { result } = renderHook(() => useTextFontSize(TextFontSize.X6L))
        expect(result.current).toEqualPlatformStyle({
          web: '60px',
          default: 60,
        })
      })
    })
  })
})
