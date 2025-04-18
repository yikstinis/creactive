import { TestPlatfrom } from '@/utilities'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '..'

describe('@/components/view', () => {
  describe('view border width', () => {
    it('renders undefined border width', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 0,
      })
    })

    it('renders small border width', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 0.5,
      })
    })

    it('renders medium border width', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 1,
      })
    })

    it('renders large border width', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 1.5,
      })
    })
  })

  describe('view border radius', () => {
    it('renders undefined border radius', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: undefined,
      })
    })

    it('renders extra-small border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.XS}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(2),
      })
    })

    it('renders small border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(4),
      })
    })

    it('renders medium border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(6),
      })
    })

    it('renders large border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(8),
      })
    })

    it('renders extra-large border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.XL}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(10),
      })
    })

    it('renders maximum border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.MAX}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: '50%',
      })
    })
  })
})
