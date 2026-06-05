import { renderHook } from '@testing-library/react-native'
import { TransitionDuration } from '../constants'
import { useTransitionDurationValue } from './use-duration'

describe('@/components/atoms/transition', () => {
  describe('hooks/use-duration', () => {
    describe('transition duration value hook', () => {
      it('returns small duration value', () => {
        const { result } = renderHook(() =>
          useTransitionDurationValue(TransitionDuration.SM),
        )
        expect(result.current).toBe(125)
      })

      it('returns medium duration value', () => {
        const { result } = renderHook(() =>
          useTransitionDurationValue(TransitionDuration.MD),
        )
        expect(result.current).toBe(175)
      })

      it('returns large duration value', () => {
        const { result } = renderHook(() =>
          useTransitionDurationValue(TransitionDuration.LG),
        )
        expect(result.current).toBe(225)
      })
    })
  })
})
