import { renderHook } from '@testing-library/react-native'
import { ViewOverflow } from '../constants'
import { useViewOverflowStyle, useViewOverflowValue } from './use-overflow'

describe('@/components/atoms/view', () => {
  describe('hooks/use-overflow', () => {
    describe('view overflow style hook', () => {
      it('returns undefined when overflow is not provided', () => {
        const { result } = renderHook(() => useViewOverflowStyle())
        expect(result.current).toBeUndefined()
      })

      it('returns overflow hidden style', () => {
        const { result } = renderHook(() =>
          useViewOverflowStyle(ViewOverflow.HIDDEN),
        )
        expect(result.current).toEqual({
          overflow: 'hidden',
        })
      })

      it('returns overflow visible style', () => {
        const { result } = renderHook(() =>
          useViewOverflowStyle(ViewOverflow.VISIBLE),
        )
        expect(result.current).toEqual({
          overflow: 'visible',
        })
      })
    })

    describe('view overflow value hook', () => {
      it('returns undefined when overflow is not provided', () => {
        const { result } = renderHook(() => useViewOverflowValue())
        expect(result.current).toBeUndefined()
      })

      it('returns overflow hidden value', () => {
        const { result } = renderHook(() =>
          useViewOverflowValue(ViewOverflow.HIDDEN),
        )
        expect(result.current).toBe('hidden')
      })

      it('returns overflow visible value', () => {
        const { result } = renderHook(() =>
          useViewOverflowValue(ViewOverflow.VISIBLE),
        )
        expect(result.current).toBe('visible')
      })
    })
  })
})
