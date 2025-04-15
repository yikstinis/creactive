import { renderHook } from '@testing-library/react-native'
import { ViewBorderRadius, ViewBorderWidth } from '../constants'
import {
  useViewBorderRadiusCSSValue,
  useViewBorderRadiusStyle,
  useViewBorderWidthStyle,
  useViewBorderWidthTokenValue,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view border width style hook', () => {
    it('returns undefined border width style', () => {
      const { result } = renderHook(() => useViewBorderWidthStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns SM border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderWidth: 0.5,
      })
    })

    it('returns MD border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderWidth: 1,
      })
    })

    it('returns LG border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderWidth: 1.5,
      })
    })
  })

  describe('use view border width token value hook', () => {
    it('returns undefined border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(undefined)
      )
      expect(result.current).toEqual(0)
    })

    it('returns SM border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual(0.5)
    })

    it('returns MD border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual(1)
    })

    it('returns LG border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual(1.5)
    })
  })

  describe('use view border radius style hook', () => {
    it('returns undefined border radius style', () => {
      const { result } = renderHook(() => useViewBorderRadiusStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns XS border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.XS)
      )
      expect(result.current).toEqual({
        borderRadius: 2,
      })
    })

    it('returns SM border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.SM)
      )
      expect(result.current).toEqual({
        borderRadius: 4,
      })
    })

    it('returns MD border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.MD)
      )
      expect(result.current).toEqual({
        borderRadius: 6,
      })
    })

    it('returns LG border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.LG)
      )
      expect(result.current).toEqual({
        borderRadius: 8,
      })
    })

    it('returns XL border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.XL)
      )
      expect(result.current).toEqual({
        borderRadius: 10,
      })
    })

    it('returns MAX border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.MAX)
      )
      expect(result.current).toEqual({
        borderRadius: '50%',
      })
    })
  })

  describe('use view border radius CSS value hook', () => {
    it('returns undefined border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns XS border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.XS)
      )
      expect(result.current).toEqual('2px')
    })

    it('returns SM border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.SM)
      )
      expect(result.current).toEqual('4px')
    })

    it('returns MD border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.MD)
      )
      expect(result.current).toEqual('6px')
    })

    it('returns LG border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.LG)
      )
      expect(result.current).toEqual('8px')
    })

    it('returns XL border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.XL)
      )
      expect(result.current).toEqual('10px')
    })

    it('returns MAX border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.MAX)
      )
      expect(result.current).toEqual('50%')
    })
  })
})
