import { Dimension } from '@/helpers'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import {
  useTransitionTransformValue,
  useTransitionTranslateNativeValue,
} from './use-transform'

describe('@/components/atoms/transition', () => {
  describe('hooks/use-transform', () => {
    describe('transition transform value hook', () => {
      it('returns undefined when no transform props provided', () => {
        const { result } = renderHook(() =>
          useTransitionTransformValue(),
        )
        expect(result.current).toBeUndefined()
      })

      it('returns scale transform when scale provided', () => {
        const fraction = randomFraction()
        const { result } = renderHook(() =>
          useTransitionTransformValue(fraction),
        )
        expect(result.current).toBe(`scale(${fraction.toValue()})`)
      })

      it('returns translateX transform when pixel translateX provided', () => {
        const dimension = randomPixelDimension()
        const { result } = renderHook(() =>
          useTransitionTransformValue(undefined, dimension),
        )
        expect(result.current).toBe(`translateX(${dimension.toValue()})`)
      })

      it('returns translateY transform when pixel translateY provided', () => {
        const dimension = randomPixelDimension()
        const { result } = renderHook(() =>
          useTransitionTransformValue(undefined, undefined, dimension),
        )
        expect(result.current).toBe(`translateY(${dimension.toValue()})`)
      })

      it('returns combined transform when all props provided', () => {
        const scale = randomFraction()
        const x = randomPixelDimension()
        const y = randomPixelDimension()
        const { result } = renderHook(() =>
          useTransitionTransformValue(scale, x, y),
        )
        expect(result.current).toBe(
          `scale(${scale.toValue()}) translateX(${x.toValue()}) translateY(${y.toValue()})`,
        )
      })
    })

    describe('transition translate native value hook', () => {
      it('returns zero when translate is not provided', () => {
        const { result } = renderHook(() =>
          useTransitionTranslateNativeValue(),
        )
        expect(result.current).toBe(0)
      })

      it('returns numeric value when pixel dimension provided', () => {
        const value = faker.number.int({ min: 1, max: 200 })
        const { result } = renderHook(() =>
          useTransitionTranslateNativeValue(
            new Dimension(value, Dimension.Unit.PIXEL),
          ),
        )
        expect(result.current).toBe(value)
      })
    })
  })
})
