import { Dimension, Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import { Platform } from 'react-native'
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
        const scale = faker.number.float({ min: 0, max: 1 })
        const { result } = renderHook(() =>
          useTransitionTransformValue(new Fraction(scale)),
        )
        expect(result.current).toBe(`scale(${scale})`)
      })

      it('returns translateX transform when pixel translateX provided', () => {
        const value = faker.number.int({ min: 1, max: 200 })
        const { result } = renderHook(() =>
          useTransitionTransformValue(
            undefined,
            new Dimension(value, Dimension.Unit.PIXEL),
          ),
        )
        expect(result.current).toBe(
          Platform.select({
            web: `translateX(${value}px)`,
            default: `translateX(${value})`,
          }),
        )
      })

      it('returns translateX transform when percentage translateX provided', () => {
        const value = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useTransitionTransformValue(
            undefined,
            new Dimension(value, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toBe(`translateX(${value}%)`)
      })

      it('returns translateY transform when pixel translateY provided', () => {
        const value = faker.number.int({ min: 1, max: 200 })
        const { result } = renderHook(() =>
          useTransitionTransformValue(
            undefined,
            undefined,
            new Dimension(value, Dimension.Unit.PIXEL),
          ),
        )
        expect(result.current).toBe(
          Platform.select({
            web: `translateY(${value}px)`,
            default: `translateY(${value})`,
          }),
        )
      })

      it('returns translateY transform when percentage translateY provided', () => {
        const value = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useTransitionTransformValue(
            undefined,
            undefined,
            new Dimension(value, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toBe(`translateY(${value}%)`)
      })

      it('returns combined transform when all props provided', () => {
        const scale = faker.number.float({ min: 0, max: 1 })
        const x = faker.number.int({ min: 1, max: 200 })
        const y = faker.number.int({ min: 1, max: 200 })
        const { result } = renderHook(() =>
          useTransitionTransformValue(
            new Fraction(scale),
            new Dimension(x, Dimension.Unit.PIXEL),
            new Dimension(y, Dimension.Unit.PIXEL),
          ),
        )
        expect(result.current).toBe(
          Platform.select({
            web: `scale(${scale}) translateX(${x}px) translateY(${y}px)`,
            default: `scale(${scale}) translateX(${x}) translateY(${y})`,
          }),
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

      it('returns numeric value when percentage dimension provided', () => {
        const value = faker.number.int({ min: 1, max: 100 })
        const { result } = renderHook(() =>
          useTransitionTranslateNativeValue(
            new Dimension(value, Dimension.Unit.PERCENT),
          ),
        )
        expect(result.current).toBe(value)
      })
    })
  })
})
