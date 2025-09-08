import { Dimension } from '@/helpers'
import { TestPlatform } from '@/utilities'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import { useViewSizeValue } from './use-size'

describe('@/components/atoms/view', () => {
  describe('hooks/use-size', () => {
    describe('view size value hook', () => {
      it('returns undefined when size is not provided', () => {
        const { result } = renderHook(() => useViewSizeValue())
        expect(result.current).toBeUndefined()
      })

      it('returns size value when pixel dimension provided', () => {
        const size = faker.number.float()
        const { result } = renderHook(() =>
          useViewSizeValue(new Dimension(size, Dimension.Unit.PIXEL)),
        )
        expect(result.current).toBe(TestPlatform.toPixels(size))
      })

      it('returns size value when percentage dimension provided', () => {
        const size = faker.number.float({
          min: 0,
          max: 100,
        })
        const { result } = renderHook(() =>
          useViewSizeValue(new Dimension(size, Dimension.Unit.PERCENT)),
        )
        expect(result.current).toBe(`${size}%`)
      })
    })
  })
})
