import { renderHook } from '@testing-library/react-native'
import { ViewBorderRadius, ViewBorderWidth } from '../constants'
import {
  useViewBorderRadiusCSSValue,
  useViewBorderWidthCSSValue,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view border width css value', () => {
    it('returns undefined border width css value', () => {
      const { result } = renderHook(() => useViewBorderWidthCSSValue(undefined))
      expect(result.current).toEqual('0px')
    })

    it('returns small border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthCSSValue(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual('0.5px')
    })

    it('returns medium border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthCSSValue(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual('1px')
    })

    it('returns large border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthCSSValue(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual('1.5px')
    })
  })

  describe('use view border radius CSS value', () => {
    it('returns undefined border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns extra-small border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.XS)
      )
      expect(result.current).toEqual('2px')
    })

    it('returns small border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.SM)
      )
      expect(result.current).toEqual('4px')
    })

    it('returns medium border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.MD)
      )
      expect(result.current).toEqual('6px')
    })

    it('returns large border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.LG)
      )
      expect(result.current).toEqual('8px')
    })

    it('returns extra-large border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.XL)
      )
      expect(result.current).toEqual('10px')
    })

    it('returns maximum border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.MAX)
      )
      expect(result.current).toEqual('50%')
    })
  })
})
