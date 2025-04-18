import { renderHook } from '@testing-library/react-native'
import { ViewBorderRadius, ViewBorderWidth } from '../constants'
import {
  useViewBorderRadiusStyle,
  useViewBorderWidthBottomStyle,
  useViewBorderWidthLeftStyle,
  useViewBorderWidthRightStyle,
  useViewBorderWidthStyle,
  useViewBorderWidthTopStyle,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view border width style', () => {
    it('returns undefined border width style', () => {
      const { result } = renderHook(() => useViewBorderWidthStyle(undefined))
      expect(result.current).toEqual({
        borderWidth: 0,
      })
    })

    it('returns small border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderWidth: 0.5,
      })
    })

    it('returns medium border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderWidth: 1,
      })
    })

    it('returns large border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderWidth: 1.5,
      })
    })
  })

  describe('use view border width top style', () => {
    it('returns undefined border width top style', () => {
      const { result } = renderHook(() => useViewBorderWidthTopStyle(undefined))
      expect(result.current).toEqual({
        borderTopWidth: undefined,
      })
    })

    it('returns small border width top style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTopStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderTopWidth: 0.5,
      })
    })

    it('returns medium border width top style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTopStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderTopWidth: 1,
      })
    })

    it('returns large border width top style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTopStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderTopWidth: 1.5,
      })
    })
  })

  describe('use view border width left style', () => {
    it('returns undefined border width left style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthLeftStyle(undefined)
      )
      expect(result.current).toEqual({
        borderLeftWidth: undefined,
      })
    })

    it('returns small border width left style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthLeftStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderLeftWidth: 0.5,
      })
    })

    it('returns medium border width left style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthLeftStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderLeftWidth: 1,
      })
    })

    it('returns large border width left style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthLeftStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderLeftWidth: 1.5,
      })
    })
  })

  describe('use view border width right style', () => {
    it('returns undefined border width right style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthRightStyle(undefined)
      )
      expect(result.current).toEqual({
        borderRightWidth: undefined,
      })
    })

    it('returns small border width right style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthRightStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderRightWidth: 0.5,
      })
    })

    it('returns medium border width right style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthRightStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderRightWidth: 1,
      })
    })

    it('returns large border width right style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthRightStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderRightWidth: 1.5,
      })
    })
  })

  describe('use view border width bottom style', () => {
    it('returns undefined border width bottom style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthBottomStyle(undefined)
      )
      expect(result.current).toEqual({
        borderBottomWidth: undefined,
      })
    })

    it('returns small border width bottom style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthBottomStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderBottomWidth: 0.5,
      })
    })

    it('returns medium border width bottom style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthBottomStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderBottomWidth: 1,
      })
    })

    it('returns large border width bottom style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthBottomStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderBottomWidth: 1.5,
      })
    })
  })

  describe('use view border radius style', () => {
    it('returns undefined border radius style', () => {
      const { result } = renderHook(() => useViewBorderRadiusStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns extra-small border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.XS)
      )
      expect(result.current).toEqual({
        borderRadius: 2,
      })
    })

    it('returns small border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.SM)
      )
      expect(result.current).toEqual({
        borderRadius: 4,
      })
    })

    it('returns medium border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.MD)
      )
      expect(result.current).toEqual({
        borderRadius: 6,
      })
    })

    it('returns large border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.LG)
      )
      expect(result.current).toEqual({
        borderRadius: 8,
      })
    })

    it('returns extra-large border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.XL)
      )
      expect(result.current).toEqual({
        borderRadius: 10,
      })
    })

    it('returns maximum border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.MAX)
      )
      expect(result.current).toEqual({
        borderRadius: '50%',
      })
    })
  })
})
