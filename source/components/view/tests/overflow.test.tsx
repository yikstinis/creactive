import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '..'

describe('@/components/view', () => {
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
