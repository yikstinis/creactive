import { renderHook } from '@testing-library/react-native'
import { ViewTransitionDuration } from '../constants'
import {
  useViewTransitionDurationValue,
  useViewTransitionValue,
} from './use-transition'

describe('@/components/atoms/view', () => {
  describe('hooks/use-transition', () => {
    describe('view transition duration value hook', () => {
      it('returns none duration value', () => {
        const { result } = renderHook(() =>
          useViewTransitionDurationValue(ViewTransitionDuration.NONE),
        )
        expect(result.current).toBe(0)
      })

      it('returns small duration value', () => {
        const { result } = renderHook(() =>
          useViewTransitionDurationValue(ViewTransitionDuration.SM),
        )
        expect(result.current).toBe(125)
      })

      it('returns medium duration value', () => {
        const { result } = renderHook(() =>
          useViewTransitionDurationValue(ViewTransitionDuration.MD),
        )
        expect(result.current).toBe(175)
      })

      it('returns large duration value', () => {
        const { result } = renderHook(() =>
          useViewTransitionDurationValue(ViewTransitionDuration.LG),
        )
        expect(result.current).toBe(225)
      })
    })

    describe('view transition value hook', () => {
      it('returns undefined when duration not provided', () => {
        const { result } = renderHook(() => useViewTransitionValue())
        expect(result.current).toBeUndefined()
      })

      it('returns none transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(ViewTransitionDuration.NONE),
        )
        expect(result.current).toBe('opacity 0ms ease,transform 0ms ease')
      })

      it('returns small transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(ViewTransitionDuration.SM),
        )
        expect(result.current).toBe('opacity 125ms ease,transform 125ms ease')
      })

      it('returns medium transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(ViewTransitionDuration.MD),
        )
        expect(result.current).toBe('opacity 175ms ease,transform 175ms ease')
      })

      it('returns large transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(ViewTransitionDuration.LG),
        )
        expect(result.current).toBe('opacity 225ms ease,transform 225ms ease')
      })
    })
  })
})
