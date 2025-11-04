import { renderHook } from '@testing-library/react-native'
import { Platform } from 'react-native'
import { TextFontFamily, TextFontSize, TextFontWeight } from '../constants'
import {
  useTextFontFamilyStyle,
  useTextFontFamilyValue,
  useTextFontSizeStyle,
  useTextFontSizeValue,
  useTextFontWeightStyle,
  useTextFontWeightValue,
} from './use-font'

describe('@/components/atoms/text', () => {
  describe('hooks/use-font', () => {
    describe('text font family style hook', () => {
      it('returns base font family style', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyStyle(TextFontFamily.BASE)
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
            default: 'System' as string,
          })
        )
      })

      it('returns typographic font family style', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyStyle(TextFontFamily.TYPOGRAPHIC)
        )
        expect(result.current.fontFamily).toBe(
          Platform.select({
            web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
            ios: 'Times New Roman',
            default: 'serif',
          })
        )
      })
    })

    describe('text font family value hook', () => {
      it('returns base font family value', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyValue(TextFontFamily.BASE)
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
            default: 'System',
          })
        )
      })

      it('returns typographic font family value', () => {
        const { result } = renderHook(() =>
          useTextFontFamilyValue(TextFontFamily.TYPOGRAPHIC)
        )
        expect(result.current).toBe(
          Platform.select({
            web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
            ios: 'Times New Roman',
            default: 'serif',
          })
        )
      })
    })

    describe('text font weight style hook', () => {
      it('returns thin font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.THIN)
        )
        expect(result.current.fontWeight).toBe(100)
      })

      it('returns extra light font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.EXTRA_LIGHT)
        )
        expect(result.current.fontWeight).toBe(200)
      })

      it('returns light font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.LIGHT)
        )
        expect(result.current.fontWeight).toBe(300)
      })

      it('returns regular font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.REGULAR)
        )
        expect(result.current.fontWeight).toBe(400)
      })

      it('returns medium font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.MEDIUM)
        )
        expect(result.current.fontWeight).toBe(500)
      })

      it('returns semi bold font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.SEMIBOLD)
        )
        expect(result.current.fontWeight).toBe(600)
      })

      it('returns bold font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.BOLD)
        )
        expect(result.current.fontWeight).toBe(700)
      })

      it('returns extra bold font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.EXTRA_BOLD)
        )
        expect(result.current.fontWeight).toBe(800)
      })

      it('returns black font weight style', () => {
        const { result } = renderHook(() =>
          useTextFontWeightStyle(TextFontWeight.BLACK)
        )
        expect(result.current.fontWeight).toBe(900)
      })
    })

    describe('text font weight value hook', () => {
      it('returns thin font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.THIN)
        )
        expect(result.current).toBe(100)
      })

      it('returns extra light font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.EXTRA_LIGHT)
        )
        expect(result.current).toBe(200)
      })

      it('returns light font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.LIGHT)
        )
        expect(result.current).toBe(300)
      })

      it('returns regular font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.REGULAR)
        )
        expect(result.current).toBe(400)
      })

      it('returns medium font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.MEDIUM)
        )
        expect(result.current).toBe(500)
      })

      it('returns semi bold font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.SEMIBOLD)
        )
        expect(result.current).toBe(600)
      })

      it('returns bold font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.BOLD)
        )
        expect(result.current).toBe(700)
      })

      it('returns extra bold font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.EXTRA_BOLD)
        )
        expect(result.current).toBe(800)
      })

      it('returns black font weight value', () => {
        const { result } = renderHook(() =>
          useTextFontWeightValue(TextFontWeight.BLACK)
        )
        expect(result.current).toBe(900)
      })
    })

    describe('text font size style hook', () => {
      it('returns 2 times extra-small font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X2S)
        )
        expect(result.current.fontSize).toBe(10)
      })

      it('returns extra-small font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.XS)
        )
        expect(result.current.fontSize).toBe(12)
      })

      it('returns small font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.SM)
        )
        expect(result.current.fontSize).toBe(14)
      })

      it('returns medium font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.MD)
        )
        expect(result.current.fontSize).toBe(16)
      })

      it('returns large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.LG)
        )
        expect(result.current.fontSize).toBe(18)
      })

      it('returns extra-large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.XL)
        )
        expect(result.current.fontSize).toBe(20)
      })

      it('returns 2 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X2L)
        )
        expect(result.current.fontSize).toBe(24)
      })

      it('returns 3 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X3L)
        )
        expect(result.current.fontSize).toBe(30)
      })

      it('returns 4 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X4L)
        )
        expect(result.current.fontSize).toBe(36)
      })

      it('returns 5 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X5L)
        )
        expect(result.current.fontSize).toBe(48)
      })

      it('returns 6 times large font size style', () => {
        const { result } = renderHook(() =>
          useTextFontSizeStyle(TextFontSize.X6L)
        )
        expect(result.current.fontSize).toBe(60)
      })
    })

    describe('text font size value hook', () => {
      it('returns 2 times extra-small font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.X2S)
        )
        expect(result.current).toBe(10)
      })

      it('returns extra-small font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.XS)
        )
        expect(result.current).toBe(12)
      })

      it('returns small font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.SM)
        )
        expect(result.current).toBe(14)
      })

      it('returns medium font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.MD)
        )
        expect(result.current).toBe(16)
      })

      it('returns large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.LG)
        )
        expect(result.current).toBe(18)
      })

      it('returns extra-large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.XL)
        )
        expect(result.current).toBe(20)
      })

      it('returns 2 times large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.X2L)
        )
        expect(result.current).toBe(24)
      })

      it('returns 3 times large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.X3L)
        )
        expect(result.current).toBe(30)
      })

      it('returns 4 times large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.X4L)
        )
        expect(result.current).toBe(36)
      })

      it('returns 5 times large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.X5L)
        )
        expect(result.current).toBe(48)
      })

      it('returns 6 times large font size value', () => {
        const { result } = renderHook(() =>
          useTextFontSizeValue(TextFontSize.X6L)
        )
        expect(result.current).toBe(60)
      })
    })
  })
})
