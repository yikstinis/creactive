import { Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { useViewOpacityValue } from '../hooks'

describe('@/components/view', () => {
  describe('use view opacity value', () => {
    it('returns undefined opacity value', () => {
      const { result } = renderHook(() => useViewOpacityValue())
      expect(result.current).toBeUndefined()
    })

    it('returns numeric opacity value', () => {
      const opactiy = faker.number.float({
        min: 0,
        max: 1,
      })
      const { result } = renderHook(() =>
        useViewOpacityValue(new Fraction(opactiy))
      )
      expect(result.current).toEqual(opactiy)
    })
  })

  describe('view opacity', () => {
    it('renders with undefined opacity', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        opacity: undefined,
      })
    })

    it('renders with numeric opacity', () => {
      const testId = faker.string.uuid()
      const opacity = faker.number.float({
        min: 0,
        max: 1,
      })
      render(
        <View
          testId={testId}
          opacity={new Fraction(opacity)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        opacity,
      })
    })
  })
})
