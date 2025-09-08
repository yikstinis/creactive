import { Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import { useViewOpacityValue } from './use-opacity'

describe('@/components/atoms/view', () => {
  describe('hooks/use-opacity', () => {
    describe('view opacity value hook', () => {
      it('returns undefined when opacity is not provided', () => {
        const { result } = renderHook(() => useViewOpacityValue())
        expect(result.current).toBeUndefined()
      })

      it('returns opacity value when fraction provided', () => {
        const opacity = faker.number.float({
          min: 0,
          max: 1,
        })
        const { result } = renderHook(() =>
          useViewOpacityValue(new Fraction(opacity)),
        )
        expect(result.current).toBe(opacity)
      })
    })
  })
})
