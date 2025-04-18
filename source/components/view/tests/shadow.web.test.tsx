import { renderHook } from '@testing-library/react-native'
import { ViewBoxShadow } from '../constants'
import { useViewBoxShadowCSSValue } from '../hooks'

describe('@/components/view', () => {
  describe('use view box shadow css value', () => {
    it('returns undefined box shadow css value', () => {
      const { result } = renderHook(() => useViewBoxShadowCSSValue())
      expect(result.current).toEqual(undefined)
    })

    it('returns sm box shadow css value', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowCSSValue(ViewBoxShadow.SM)
      )
      expect(result.current).toEqual(
        '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)'
      )
    })

    it('returns md box shadow css value', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowCSSValue(ViewBoxShadow.MD)
      )
      expect(result.current).toEqual(
        '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)'
      )
    })

    it('returns lg box shadow css value', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowCSSValue(ViewBoxShadow.LG)
      )
      expect(result.current).toEqual(
        '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)'
      )
    })
  })
})
