import { Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import { useTransitionOpacityValue } from './use-opacity'

describe('@/components/atoms/transition', () => {
  describe('hooks/use-opacity', () => {
    describe('transition opacity value hook', () => {
      it('returns undefined when opacity is not provided', () => {
        const { result } = renderHook(() => useTransitionOpacityValue())
        expect(result.current).toBeUndefined()
      })

      it('returns opacity value when fraction provided', () => {
        const opacity = faker.number.float({ min: 0, max: 1 })
        const { result } = renderHook(() =>
          useTransitionOpacityValue(new Fraction(opacity)),
        )
        expect(result.current).toBe(opacity)
      })
    })
  })
})
