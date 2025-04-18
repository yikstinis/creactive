import { renderHook } from '@testing-library/react-native'
import { ViewBorderRadius, ViewBorderWidth } from '../constants'
import { useViewBorderRadiusStyle, useViewBorderWidthStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view border width style', () => {
    it('returns undefined border width style', () => {
      const { result } = renderHook(() => useViewBorderWidthStyle(undefined))
      expect(result.current).toEqual(undefined)
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
