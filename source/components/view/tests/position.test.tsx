import { Position } from '@/helpers'
import { TestPlatform } from '@/utilities'
import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { ViewPosition } from '../constants'
import { useViewPositionValue } from '../hooks'

describe('@/components/view', () => {
  describe('use view position value', () => {
    it('returns undefined position value', () => {
      const { result } = renderHook(() => useViewPositionValue())
      expect(result.current).toEqual(undefined)
    })

    it('returns numeric pixel position value', () => {
      const amount = faker.number.int()
      const { result } = renderHook(() =>
        useViewPositionValue(new Position(amount, Position.Dimension.PIXEL)),
      )
      expect(result.current).toEqual(TestPlatform.toPixels(amount))
    })

    it('returns numeric pecent position value', () => {
      const amount = faker.number.int()
      const { result } = renderHook(() =>
        useViewPositionValue(new Position(amount, Position.Dimension.PERCENT)),
      )
      expect(result.current).toEqual(`${amount}%`)
    })
  })

  describe('view position', () => {
    it('renders with undefined position', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        position: 'relative',
      })
    })

    it('renders with relative position', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          position={ViewPosition.RELATIVE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        position: 'relative',
      })
    })

    it('renders with absolute position', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          position={ViewPosition.ABSOLUTE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        position: 'absolute',
      })
    })
  })

  describe('view position top', () => {
    it('renders with undefined position top', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        top: undefined,
      })
    })

    it('renders with pixel position top', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          top={new Position(amount, Position.Dimension.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        top: TestPlatform.toPixels(amount),
      })
    })

    it('renders with percent position top', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          top={new Position(amount, Position.Dimension.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        top: `${amount}%`,
      })
    })
  })

  describe('view position left', () => {
    it('renders with undefined position left', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        left: undefined,
      })
    })

    it('renders with pixel position left', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          left={new Position(amount, Position.Dimension.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        left: TestPlatform.toPixels(amount),
      })
    })

    it('renders with percent position left', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          left={new Position(amount, Position.Dimension.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        left: `${amount}%`,
      })
    })
  })

  describe('view position right', () => {
    it('renders with undefined position right', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        right: undefined,
      })
    })

    it('renders with pixel position right', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          right={new Position(amount, Position.Dimension.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        right: TestPlatform.toPixels(amount),
      })
    })

    it('renders with percent position right', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          right={new Position(amount, Position.Dimension.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        right: `${amount}%`,
      })
    })
  })

  describe('view position bottom', () => {
    it('renders with undefined position bottom', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        bottom: undefined,
      })
    })

    it('renders with pixel position bottom', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          bottom={new Position(amount, Position.Dimension.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        bottom: TestPlatform.toPixels(amount),
      })
    })

    it('renders with percent position bottom', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          bottom={new Position(amount, Position.Dimension.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        bottom: `${amount}%`,
      })
    })
  })
})
