import { renderHook } from '@testing-library/react-native'
import { ViewBackgroundColor, ViewBorderColor } from '../constants'
import { useViewBackgroundColorStyle, useViewBorderColorStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view border color style', () => {
    it('returns undefined border color style', () => {
      const { result } = renderHook(() => useViewBorderColorStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_100)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(253,252,254)',
      })
    })

    it('returns base 200 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_200)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(249,249,250)',
      })
    })

    it('returns base 300 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_300)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(247,247,249)',
      })
    })

    it('returns base 400 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_400)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(244,244,245)',
      })
    })

    it('returns base 500 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_500)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(224,224,238)',
      })
    })

    it('returns base 600 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_600)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(218,218,234)',
      })
    })

    it('returns base 700 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_700)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(216,216,228)',
      })
    })

    it('returns base 800 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_800)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(212,212,216)',
      })
    })

    it('returns base 900 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_900)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(198,198,202)',
      })
    })
  })

  describe('use view background color style', () => {
    it('returns undefined background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_100)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(198,198,202)',
      })
    })

    it('returns base 200 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_200)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(212,212,216)',
      })
    })

    it('returns base 300 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_300)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(216,216,228)',
      })
    })

    it('returns base 400 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_400)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(218,218,234)',
      })
    })

    it('returns base 500 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_500)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(224,224,238)',
      })
    })

    it('returns base 600 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_600)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(244,244,245)',
      })
    })

    it('returns base 700 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_700)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(247,247,249)',
      })
    })

    it('returns base 800 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_800)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(249,249,250)',
      })
    })

    it('returns base 900 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_900)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(254,254,255)',
      })
    })
  })
})
