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
        const fraction = randomFraction()
        const { result } = renderHook(() => useTextOpacityValue(fraction))
        expect(result.current).toBe(fraction.toValue())
      })
    })
  })
})
