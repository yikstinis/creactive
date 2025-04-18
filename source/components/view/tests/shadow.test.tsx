import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '..'

describe('@/components/view', () => {
  describe('view box shadow', () => {
    it('renders with undefined box shadow', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: undefined,
      })
    })

    it('renders with sm box shadow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px -1px rgba(0,0,0,0.1)',
      })
    })

    it('renders with md box shadow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow:
          '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1)',
      })
    })

    it('renders with lg box shadow', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)',
      })
    })
  })
})
