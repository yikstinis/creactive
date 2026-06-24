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
      it('returns undefined when no duration provided', () => {
        const { result } = renderHook(() => useViewTransitionValue())
        expect(result.current).toBeUndefined()
      })

      it('returns opacity transition when only opacity duration provided', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(ViewTransitionDuration.NONE),
        )
        expect(result.current).toBe('opacity 0ms ease')
      })

      it('returns transform transition when only transform duration provided', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(undefined, ViewTransitionDuration.NONE),
        )
        expect(result.current).toBe('transform 0ms ease')
      })

      it('returns combined transition when both durations provided with none', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(
            ViewTransitionDuration.NONE,
            ViewTransitionDuration.NONE,
          ),
        )
        expect(result.current).toBe('opacity 0ms ease,transform 0ms ease')
      })

      it('returns opacity small transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(ViewTransitionDuration.SM),
        )
        expect(result.current).toBe('opacity 125ms ease')
      })

      it('returns transform small transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(undefined, ViewTransitionDuration.SM),
        )
        expect(result.current).toBe('transform 125ms ease')
      })

      it('returns combined small transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(
            ViewTransitionDuration.SM,
            ViewTransitionDuration.SM,
          ),
        )
        expect(result.current).toBe('opacity 125ms ease,transform 125ms ease')
      })

      it('returns combined medium transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(
            ViewTransitionDuration.MD,
            ViewTransitionDuration.MD,
          ),
        )
        expect(result.current).toBe('opacity 175ms ease,transform 175ms ease')
      })

      it('returns combined large transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(
            ViewTransitionDuration.LG,
            ViewTransitionDuration.LG,
          ),
        )
        expect(result.current).toBe('opacity 225ms ease,transform 225ms ease')
      })

      it('returns mixed duration transition value', () => {
        const { result } = renderHook(() =>
          useViewTransitionValue(
            ViewTransitionDuration.SM,
            ViewTransitionDuration.LG,
          ),
        )
        expect(result.current).toBe('opacity 125ms ease,transform 225ms ease')
      })
    })
  })
})
