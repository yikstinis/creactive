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
        const fraction = randomFraction()
        const { result } = renderHook(() => useViewOpacityValue(fraction))
        expect(result.current).toBe(fraction.toValue())
      })
    })
  })
})
