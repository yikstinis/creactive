import { renderHook } from '@testing-library/react-native'
import { ViewBoxShadow } from '../constants'
import { useViewBoxShadowStyle, useViewBoxShadowValue } from './use-shadow'

describe('@/components/atoms/view', () => {
  describe('hooks/use-shadow', () => {
    describe('view box shadow style hook', () => {
      it('returns undefined when box shadow is not provided', () => {
        const { result } = renderHook(() => useViewBoxShadowStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns small box shadow style', () => {
        const { result } = renderHook(() =>
          useViewBoxShadowStyle(ViewBoxShadow.SM),
        )
        expect(result.current).toEqual({
          boxShadow: [
            '0 1px 3px 0 rgba(0,0,0,0.1)',
            '0 1px 2px -1px rgba(0,0,0,0.1)',
          ].join(','),
        })
      })

      it('returns medium box shadow style', () => {
        const { result } = renderHook(() =>
          useViewBoxShadowStyle(ViewBoxShadow.MD),
        )
        expect(result.current).toEqual({
          boxShadow: [
            '0 4px 6px -1px rgba(0,0,0,0.1)',
            '0 2px 4px -2px rgba(0,0,0,0.1)',
          ].join(','),
        })
      })

      it('returns large box shadow style', () => {
        const { result } = renderHook(() =>
          useViewBoxShadowStyle(ViewBoxShadow.LG),
        )
        expect(result.current).toEqual({
          boxShadow: [
            '0 10px 15px -3px rgba(0,0,0,0.1)',
            '0 4px 6px -4px rgba(0,0,0,0.1)',
          ].join(','),
        })
      })
    })

    describe('view box shadow value hook', () => {
      it('returns undefined when box shadow is not provided', () => {
        const { result } = renderHook(() => useViewBoxShadowValue())
        expect(result.current).toBeUndefined()
      })

      it('returns small box shadow value', () => {
        const { result } = renderHook(() =>
          useViewBoxShadowValue(ViewBoxShadow.SM),
        )
        expect(result.current).toEqual(
          [
            '0 1px 3px 0 rgba(0,0,0,0.1)',
            '0 1px 2px -1px rgba(0,0,0,0.1)',
          ].join(','),
        )
      })

      it('returns medium box shadow value', () => {
        const { result } = renderHook(() =>
          useViewBoxShadowValue(ViewBoxShadow.MD),
        )
        expect(result.current).toEqual(
          [
            '0 4px 6px -1px rgba(0,0,0,0.1)',
            '0 2px 4px -2px rgba(0,0,0,0.1)',
          ].join(','),
        )
      })

      it('returns large box shadow value', () => {
        const { result } = renderHook(() =>
          useViewBoxShadowValue(ViewBoxShadow.LG),
        )
        expect(result.current).toEqual(
          [
            '0 10px 15px -3px rgba(0,0,0,0.1)',
            '0 4px 6px -4px rgba(0,0,0,0.1)',
          ].join(','),
        )
      })
    })
  })
})
