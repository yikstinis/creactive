import { renderHook } from '@testing-library/react-native'
import { ViewBackgroundColor, ViewBorderColor } from '../constants'
import {
  useViewBackgroundColorCSSValue,
  useViewBorderColorCSSValue,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view border color CSS value', () => {
    it('returns undefined border color CSS value', () => {
      const { result } = renderHook(() => useViewBorderColorCSSValue(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_100)
      )
      expect(result.current).toEqual('rgb(253,252,254)')
    })

    it('returns base 200 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_200)
      )
      expect(result.current).toEqual('rgb(249,249,250)')
    })

    it('returns base 300 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_300)
      )
      expect(result.current).toEqual('rgb(247,247,249)')
    })

    it('returns base 400 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_400)
      )
      expect(result.current).toEqual('rgb(244,244,245)')
    })

    it('returns base 500 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_500)
      )
      expect(result.current).toEqual('rgb(224,224,238)')
    })

    it('returns base 600 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_600)
      )
      expect(result.current).toEqual('rgb(218,218,234)')
    })

    it('returns base 700 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_700)
      )
      expect(result.current).toEqual('rgb(216,216,228)')
    })

    it('returns base 800 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_800)
      )
      expect(result.current).toEqual('rgb(212,212,216)')
    })

    it('returns base 900 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_900)
      )
      expect(result.current).toEqual('rgb(198,198,202)')
    })
  })

  describe('use view background color CSS value', () => {
    it('returns undefined background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_100)
      )
      expect(result.current).toEqual('rgb(198,198,202)')
    })

    it('returns base 200 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_200)
      )
      expect(result.current).toEqual('rgb(212,212,216)')
    })

    it('returns base 300 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_300)
      )
      expect(result.current).toEqual('rgb(216,216,228)')
    })

    it('returns base 400 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_400)
      )
      expect(result.current).toEqual('rgb(218,218,234)')
    })

    it('returns base 500 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_500)
      )
      expect(result.current).toEqual('rgb(224,224,238)')
    })

    it('returns base 600 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_600)
      )
      expect(result.current).toEqual('rgb(244,244,245)')
    })

    it('returns base 700 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_700)
      )
      expect(result.current).toEqual('rgb(247,247,249)')
    })

    it('returns base 800 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_800)
      )
      expect(result.current).toEqual('rgb(249,249,250)')
    })

    it('returns base 900 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_900)
      )
      expect(result.current).toEqual('rgb(254,254,255)')
    })
  })
})
