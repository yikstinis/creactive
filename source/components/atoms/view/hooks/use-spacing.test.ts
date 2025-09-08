import { renderHook } from '@testing-library/react-native'
import { ViewSpacing } from '../constants'
import {
  useViewMarginBottomStyle,
  useViewMarginLeftStyle,
  useViewMarginRightStyle,
  useViewMarginTopStyle,
  useViewPaddingBottomStyle,
  useViewPaddingLeftStyle,
  useViewPaddingRightStyle,
  useViewPaddingTopStyle,
  useViewSpacingValue,
} from './use-spacing'

describe('@/components/atoms/view', () => {
  describe('hooks/use-spacing', () => {
    describe('view margin top style hook', () => {
      it('returns undefined when margin top is not provided', () => {
        const { result } = renderHook(() => useViewMarginTopStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          marginTop: 2,
        })
      })

      it('returns 5 times extra-small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          marginTop: 4,
        })
      })

      it('returns 4 times extra-small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          marginTop: 6,
        })
      })

      it('returns 3 times extra-small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          marginTop: 8,
        })
      })

      it('returns 2 times extra-small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          marginTop: 10,
        })
      })

      it('returns extra-small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          marginTop: 12,
        })
      })

      it('returns small margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          marginTop: 14,
        })
      })

      it('returns medium margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          marginTop: 16,
        })
      })

      it('returns large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          marginTop: 18,
        })
      })

      it('returns extra-large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          marginTop: 20,
        })
      })

      it('returns 2 times extra-large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          marginTop: 24,
        })
      })

      it('returns 3 times extra-large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          marginTop: 28,
        })
      })

      it('returns 4 times extra-large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          marginTop: 32,
        })
      })

      it('returns 5 times extra-large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          marginTop: 36,
        })
      })

      it('returns 6 times extra-large margin top style', () => {
        const { result } = renderHook(() =>
          useViewMarginTopStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          marginTop: 40,
        })
      })
    })

    describe('view padding top style hook', () => {
      it('returns undefined when padding top is not provided', () => {
        const { result } = renderHook(() => useViewPaddingTopStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          paddingTop: 2,
        })
      })

      it('returns 5 times extra-small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          paddingTop: 4,
        })
      })

      it('returns 4 times extra-small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          paddingTop: 6,
        })
      })

      it('returns 3 times extra-small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          paddingTop: 8,
        })
      })

      it('returns 2 times extra-small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          paddingTop: 10,
        })
      })

      it('returns extra-small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          paddingTop: 12,
        })
      })

      it('returns small padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          paddingTop: 14,
        })
      })

      it('returns medium padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          paddingTop: 16,
        })
      })

      it('returns large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          paddingTop: 18,
        })
      })

      it('returns extra-large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          paddingTop: 20,
        })
      })

      it('returns 2 times extra-large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          paddingTop: 24,
        })
      })

      it('returns 3 times extra-large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          paddingTop: 28,
        })
      })

      it('returns 4 times extra-large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          paddingTop: 32,
        })
      })

      it('returns 5 times extra-large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          paddingTop: 36,
        })
      })

      it('returns 6 times extra-large padding top style', () => {
        const { result } = renderHook(() =>
          useViewPaddingTopStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          paddingTop: 40,
        })
      })
    })

    describe('view margin left style hook', () => {
      it('returns undefined when margin left is not provided', () => {
        const { result } = renderHook(() => useViewMarginLeftStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          marginLeft: 2,
        })
      })

      it('returns 5 times extra-small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          marginLeft: 4,
        })
      })

      it('returns 4 times extra-small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          marginLeft: 6,
        })
      })

      it('returns 3 times extra-small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          marginLeft: 8,
        })
      })

      it('returns 2 times extra-small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          marginLeft: 10,
        })
      })

      it('returns extra-small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          marginLeft: 12,
        })
      })

      it('returns small margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          marginLeft: 14,
        })
      })

      it('returns medium margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          marginLeft: 16,
        })
      })

      it('returns large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          marginLeft: 18,
        })
      })

      it('returns extra-large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          marginLeft: 20,
        })
      })

      it('returns 2 times extra-large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          marginLeft: 24,
        })
      })

      it('returns 3 times extra-large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          marginLeft: 28,
        })
      })

      it('returns 4 times extra-large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          marginLeft: 32,
        })
      })

      it('returns 5 times extra-large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          marginLeft: 36,
        })
      })

      it('returns 6 times extra-large margin left style', () => {
        const { result } = renderHook(() =>
          useViewMarginLeftStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          marginLeft: 40,
        })
      })
    })

    describe('view padding left style hook', () => {
      it('returns undefined when padding left is not provided', () => {
        const { result } = renderHook(() => useViewMarginLeftStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          paddingLeft: 2,
        })
      })

      it('returns 5 times extra-small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          paddingLeft: 4,
        })
      })

      it('returns 4 times extra-small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          paddingLeft: 6,
        })
      })

      it('returns 3 times extra-small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          paddingLeft: 8,
        })
      })

      it('returns 2 times extra-small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          paddingLeft: 10,
        })
      })

      it('returns extra-small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          paddingLeft: 12,
        })
      })

      it('returns small padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          paddingLeft: 14,
        })
      })

      it('returns medium padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          paddingLeft: 16,
        })
      })

      it('returns large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          paddingLeft: 18,
        })
      })

      it('returns extra-large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          paddingLeft: 20,
        })
      })

      it('returns 2 times extra-large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          paddingLeft: 24,
        })
      })

      it('returns 3 times extra-large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          paddingLeft: 28,
        })
      })

      it('returns 4 times extra-large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          paddingLeft: 32,
        })
      })

      it('returns 5 times extra-large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          paddingLeft: 36,
        })
      })

      it('returns 6 times extra-large padding left style', () => {
        const { result } = renderHook(() =>
          useViewPaddingLeftStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          paddingLeft: 40,
        })
      })
    })

    describe('view margin right style hook', () => {
      it('returns undefined when margin right is not provided', () => {
        const { result } = renderHook(() => useViewMarginRightStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          marginRight: 2,
        })
      })

      it('returns 5 times extra-small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          marginRight: 4,
        })
      })

      it('returns 4 times extra-small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          marginRight: 6,
        })
      })

      it('returns 3 times extra-small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          marginRight: 8,
        })
      })

      it('returns 2 times extra-small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          marginRight: 10,
        })
      })

      it('returns extra-small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          marginRight: 12,
        })
      })

      it('returns small margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          marginRight: 14,
        })
      })

      it('returns medium margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          marginRight: 16,
        })
      })

      it('returns large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          marginRight: 18,
        })
      })

      it('returns extra-large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          marginRight: 20,
        })
      })

      it('returns 2 times extra-large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          marginRight: 24,
        })
      })

      it('returns 3 times extra-large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          marginRight: 28,
        })
      })

      it('returns 4 times extra-large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          marginRight: 32,
        })
      })

      it('returns 5 times extra-large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          marginRight: 36,
        })
      })

      it('returns 6 times extra-large margin right style', () => {
        const { result } = renderHook(() =>
          useViewMarginRightStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          marginRight: 40,
        })
      })
    })

    describe('view padding right style hook', () => {
      it('returns undefined when padding right is not provided', () => {
        const { result } = renderHook(() => useViewPaddingRightStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          paddingRight: 2,
        })
      })

      it('returns 5 times extra-small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          paddingRight: 4,
        })
      })

      it('returns 4 times extra-small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          paddingRight: 6,
        })
      })

      it('returns 3 times extra-small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          paddingRight: 8,
        })
      })

      it('returns 2 times extra-small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          paddingRight: 10,
        })
      })

      it('returns extra-small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          paddingRight: 12,
        })
      })

      it('returns small padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          paddingRight: 14,
        })
      })

      it('returns medium padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          paddingRight: 16,
        })
      })

      it('returns large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          paddingRight: 18,
        })
      })

      it('returns extra-large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          paddingRight: 20,
        })
      })

      it('returns 2 times extra-large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          paddingRight: 24,
        })
      })

      it('returns 3 times extra-large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          paddingRight: 28,
        })
      })

      it('returns 4 times extra-large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          paddingRight: 32,
        })
      })

      it('returns 5 times extra-large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          paddingRight: 36,
        })
      })

      it('returns 6 times extra-large padding right style', () => {
        const { result } = renderHook(() =>
          useViewPaddingRightStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          paddingRight: 40,
        })
      })
    })

    describe('view margin bottom style hook', () => {
      it('returns undefined when margin bottom is not provided', () => {
        const { result } = renderHook(() => useViewMarginBottomStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          marginBottom: 2,
        })
      })

      it('returns 5 times extra-small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          marginBottom: 4,
        })
      })

      it('returns 4 times extra-small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          marginBottom: 6,
        })
      })

      it('returns 3 times extra-small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          marginBottom: 8,
        })
      })

      it('returns 2 times extra-small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          marginBottom: 10,
        })
      })

      it('returns extra-small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          marginBottom: 12,
        })
      })

      it('returns small margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          marginBottom: 14,
        })
      })

      it('returns medium margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          marginBottom: 16,
        })
      })

      it('returns large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          marginBottom: 18,
        })
      })

      it('returns extra-large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          marginBottom: 20,
        })
      })

      it('returns 2 times extra-large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          marginBottom: 24,
        })
      })

      it('returns 3 times extra-large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          marginBottom: 28,
        })
      })

      it('returns 4 times extra-large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          marginBottom: 32,
        })
      })

      it('returns 5 times extra-large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          marginBottom: 36,
        })
      })

      it('returns 6 times extra-large margin bottom style', () => {
        const { result } = renderHook(() =>
          useViewMarginBottomStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          marginBottom: 40,
        })
      })
    })

    describe('view padding bottom style hook', () => {
      it('returns undefined when padding bottom is not provided', () => {
        const { result } = renderHook(() => useViewPaddingBottomStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X6S),
        )
        expect(result.current).toEqual({
          paddingBottom: 2,
        })
      })

      it('returns 5 times extra-small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X5S),
        )
        expect(result.current).toEqual({
          paddingBottom: 4,
        })
      })

      it('returns 4 times extra-small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X4S),
        )
        expect(result.current).toEqual({
          paddingBottom: 6,
        })
      })

      it('returns 3 times extra-small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X3S),
        )
        expect(result.current).toEqual({
          paddingBottom: 8,
        })
      })

      it('returns 2 times extra-small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X2S),
        )
        expect(result.current).toEqual({
          paddingBottom: 10,
        })
      })

      it('returns extra-small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.XS),
        )
        expect(result.current).toEqual({
          paddingBottom: 12,
        })
      })

      it('returns small padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.SM),
        )
        expect(result.current).toEqual({
          paddingBottom: 14,
        })
      })

      it('returns medium padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.MD),
        )
        expect(result.current).toEqual({
          paddingBottom: 16,
        })
      })

      it('returns large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.LG),
        )
        expect(result.current).toEqual({
          paddingBottom: 18,
        })
      })

      it('returns extra-large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.XL),
        )
        expect(result.current).toEqual({
          paddingBottom: 20,
        })
      })

      it('returns 2 times extra-large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X2L),
        )
        expect(result.current).toEqual({
          paddingBottom: 24,
        })
      })

      it('returns 3 times extra-large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X3L),
        )
        expect(result.current).toEqual({
          paddingBottom: 28,
        })
      })

      it('returns 4 times extra-large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X4L),
        )
        expect(result.current).toEqual({
          paddingBottom: 32,
        })
      })

      it('returns 5 times extra-large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X5L),
        )
        expect(result.current).toEqual({
          paddingBottom: 36,
        })
      })

      it('returns 6 times extra-large padding bottom style', () => {
        const { result } = renderHook(() =>
          useViewPaddingBottomStyle(ViewSpacing.X6L),
        )
        expect(result.current).toEqual({
          paddingBottom: 40,
        })
      })
    })

    describe('view spacing value hook', () => {
      it('returns undefined when spacing is not provided', () => {
        const { result } = renderHook(() => useViewSpacingValue())
        expect(result.current).toBeUndefined()
      })

      it('returns 6 times extra-small spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X6S),
        )
        expect(result.current).toEqual(2)
      })

      it('returns 5 times extra-small spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X5S),
        )
        expect(result.current).toEqual(4)
      })

      it('returns 4 times extra-small spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X4S),
        )
        expect(result.current).toEqual(6)
      })

      it('returns 3 times extra-small spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X3S),
        )
        expect(result.current).toEqual(8)
      })

      it('returns 2 times extra-small spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X2S),
        )
        expect(result.current).toEqual(10)
      })

      it('returns extra-small spacing value', () => {
        const { result } = renderHook(() => useViewSpacingValue(ViewSpacing.XS))
        expect(result.current).toEqual(12)
      })

      it('returns small spacing value', () => {
        const { result } = renderHook(() => useViewSpacingValue(ViewSpacing.SM))
        expect(result.current).toEqual(14)
      })

      it('returns medium spacing value', () => {
        const { result } = renderHook(() => useViewSpacingValue(ViewSpacing.MD))
        expect(result.current).toEqual(16)
      })

      it('returns large spacing value', () => {
        const { result } = renderHook(() => useViewSpacingValue(ViewSpacing.LG))
        expect(result.current).toEqual(18)
      })

      it('returns extra-large spacing value', () => {
        const { result } = renderHook(() => useViewSpacingValue(ViewSpacing.XL))
        expect(result.current).toEqual(20)
      })

      it('returns 2 times extra-large spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X2L),
        )
        expect(result.current).toEqual(24)
      })

      it('returns 3 times extra-large spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X3L),
        )
        expect(result.current).toEqual(28)
      })

      it('returns 4 times extra-large spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X4L),
        )
        expect(result.current).toEqual(32)
      })

      it('returns 5 times extra-large spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X5L),
        )
        expect(result.current).toEqual(36)
      })

      it('returns 6 times extra-large spacing value', () => {
        const { result } = renderHook(() =>
          useViewSpacingValue(ViewSpacing.X6L),
        )
        expect(result.current).toEqual(40)
      })
    })
  })
})
