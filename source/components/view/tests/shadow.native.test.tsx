import { renderHook } from '@testing-library/react-native'
import { ViewBoxShadow } from '../constants'
import { useViewBoxShadowStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view box shadow style', () => {
    it('returns undefined box shadow style', () => {
      const { result } = renderHook(() => useViewBoxShadowStyle())
      expect(result.current).toEqual(undefined)
    })

    it('returns sm box shadow style', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowStyle(ViewBoxShadow.SM)
      )
      expect(result.current).toEqual({
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)',
      })
    })

    it('returns md box shadow style', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowStyle(ViewBoxShadow.MD)
      )
      expect(result.current).toEqual({
        boxShadow:
          '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)',
      })
    })

    it('returns lg box shadow style', () => {
      const { result } = renderHook(() =>
        useViewBoxShadowStyle(ViewBoxShadow.LG)
      )
      expect(result.current).toEqual({
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)',
      })
    })
  })
})
