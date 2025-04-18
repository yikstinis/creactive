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

  describe('view border width top', () => {
    it('renders undefined border width top', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: undefined,
      })
    })

    it('renders small border width top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthTop={View.BorderWidth.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 0.5,
      })
    })

    it('renders medium border width top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthTop={View.BorderWidth.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 1,
      })
    })

    it('renders large border width top', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthTop={View.BorderWidth.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 1.5,
      })
    })
  })

  describe('view border width left', () => {
    it('renders undefined border width left', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: undefined,
      })
    })

    it('renders small border width left', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthLeft={View.BorderWidth.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 0.5,
      })
    })

    it('renders medium border width left', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthLeft={View.BorderWidth.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 1,
      })
    })

    it('renders large border width left', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthLeft={View.BorderWidth.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 1.5,
      })
    })
  })

  describe('view border width right', () => {
    it('renders undefined border width right', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: undefined,
      })
    })

    it('renders small border width right', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthRight={View.BorderWidth.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 0.5,
      })
    })

    it('renders medium border width right', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthRight={View.BorderWidth.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 1,
      })
    })

    it('renders large border width right', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthRight={View.BorderWidth.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 1.5,
      })
    })
  })

  describe('view border width bottom', () => {
    it('renders undefined border width bottom', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: undefined,
      })
    })

    it('renders small border width bottom', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthBottom={View.BorderWidth.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 0.5,
      })
    })

    it('renders medium border width bottom', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthBottom={View.BorderWidth.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 1,
      })
    })

    it('renders large border width bottom', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthBottom={View.BorderWidth.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 1.5,
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
