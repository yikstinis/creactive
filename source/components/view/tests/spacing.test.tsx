import { TestPlatform } from '@/utilities'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '..'

describe('@/components/view', () => {
  describe('view margin top', () => {
    it('renders with undefined margin top', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: undefined,
      })
    })

    it('renders with 6 times extra-small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(2),
      })
    })

    it('renders with 5 times extra-small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(4),
      })
    })

    it('renders with 4 times extra-small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(6),
      })
    })

    it('renders with 3 times extra-small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(8),
      })
    })

    it('renders with 2 times extra-small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(10),
      })
    })

    it('renders with extra-small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(12),
      })
    })

    it('renders with small margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(14),
      })
    })

    it('renders with medium margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(16),
      })
    })

    it('renders with large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(18),
      })
    })

    it('renders with extra-large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(20),
      })
    })

    it('renders with 2 times extra-large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(24),
      })
    })

    it('renders with 3 times extra-large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(28),
      })
    })

    it('renders with 4 times extra-large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(32),
      })
    })

    it('renders with 5 times extra-large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(36),
      })
    })

    it('renders with 6 times extra-large margin top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: TestPlatform.toPixels(40),
      })
    })
  })
})
