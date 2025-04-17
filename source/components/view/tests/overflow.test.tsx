import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { ViewOverflow } from '../constants'
import { useViewOverflowStyle } from '../hooks'

describe('@/components/view', () => {
  describe('use view overflow style', () => {
    it('returns visible overflow style', () => {
      const { result } = renderHook(() =>
        useViewOverflowStyle(ViewOverflow.VISIBLE)
      )
      expect(result.current).toEqual({
        overflow: 'visible',
      })
    })

    it('returns hidden overflow style', () => {
      const { result } = renderHook(() =>
        useViewOverflowStyle(ViewOverflow.HIDDEN)
      )
      expect(result.current).toEqual({
        overflow: 'hidden',
      })
    })
  })

  describe('view overflow', () => {
    it('renders with undefined overflow', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        overflow: 'visible',
      })
    })

    it('renders with visible overflow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          overflow={View.Overflow.VISIBLE}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        overflow: 'visible',
      })
    })

    it('renders with hidden overflow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          overflow={View.Overflow.HIDDEN}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        overflow: 'hidden',
      })
    })
  })
})
