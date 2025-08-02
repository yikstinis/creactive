import { Fraction } from '@/helpers'
import { renderHook } from '@testing-library/react-native'
import { useTextOpacityValue } from './use-opacity'

describe('@/components/atoms/text', () => {
  describe('hooks/use-opacity', () => {
    describe('text opacity value hook', () => {
      it('returns undefined when opacity is not provided', () => {
        const { result } = renderHook(() => useTextOpacityValue())
        expect(result.current).toBeUndefined()
      })

      it('returns opacity value when fraction provided', () => {
        const { result } = renderHook(() =>
          useTextOpacityValue(new Fraction(0.5))
        )
        expect(result.current).toBe(0.5)
      })
    })
  })
})
