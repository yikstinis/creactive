import { Size } from '@/helpers'
import { TestPlatfrom } from '@/utilities'
import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { useViewSizeValue } from '../hooks'

describe('@/components/view', () => {
  describe('use view size value', () => {
    it('returns undefined size value', () => {
      const { result } = renderHook(() => useViewSizeValue())
      expect(result.current).toEqual(undefined)
    })

    it('returns numeric pixel size value', () => {
      const amount = faker.number.int()
      const { result } = renderHook(() =>
        useViewSizeValue(new Size(amount, Size.Dimension.PIXEL))
      )
      expect(result.current).toEqual(TestPlatfrom.toPixels(amount))
    })

    it('returns numeric percent size value', () => {
      const amount = faker.number.int()
      const { result } = renderHook(() =>
        useViewSizeValue(new Size(amount, Size.Dimension.PERCENT))
      )
      expect(result.current).toEqual(`${amount}%`)
    })
  })

  describe('view min width', () => {
    it('renders with undefined min width', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        minWidth: undefined,
      })
    })

    it('renders with pixel min width', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          minWidth={new Size(amount, Size.Dimension.PIXEL)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minWidth: TestPlatfrom.toPixels(amount),
      })
    })

    it('renders with percent min width', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          minWidth={new Size(amount, Size.Dimension.PERCENT)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minWidth: `${amount}%`,
      })
    })
  })

  describe('view width', () => {
    it('renders with undefined width', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        width: undefined,
      })
    })

    it('renders with pixel width', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          width={new Size(amount, Size.Dimension.PIXEL)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        width: TestPlatfrom.toPixels(amount),
      })
    })

    it('renders with percent width', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          width={new Size(amount, Size.Dimension.PERCENT)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        width: `${amount}%`,
      })
    })
  })

  describe('view max width', () => {
    it('renders with undefined max width', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxWidth: undefined,
      })
    })

    it('renders with pixel max width', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          maxWidth={new Size(amount, Size.Dimension.PIXEL)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxWidth: TestPlatfrom.toPixels(amount),
      })
    })

    it('renders with percent max width', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          maxWidth={new Size(amount, Size.Dimension.PERCENT)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxWidth: `${amount}%`,
      })
    })
  })

  describe('view min height', () => {
    it('renders with undefined min height', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        minHeight: undefined,
      })
    })

    it('renders with pixel min height', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          minHeight={new Size(amount, Size.Dimension.PIXEL)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minHeight: TestPlatfrom.toPixels(amount),
      })
    })

    it('renders with percent min height', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          minHeight={new Size(amount, Size.Dimension.PERCENT)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minHeight: `${amount}%`,
      })
    })
  })

  describe('view height', () => {
    it('renders with undefined height', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        height: undefined,
      })
    })

    it('renders with pixel height', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          height={new Size(amount, Size.Dimension.PIXEL)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        height: TestPlatfrom.toPixels(amount),
      })
    })

    it('renders with percent height', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          height={new Size(amount, Size.Dimension.PERCENT)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        height: `${amount}%`,
      })
    })
  })

  describe('view max height', () => {
    it('renders with undefined max height', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxHeight: undefined,
      })
    })

    it('renders with pixel max height', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          maxHeight={new Size(amount, Size.Dimension.PIXEL)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxHeight: TestPlatfrom.toPixels(amount),
      })
    })

    it('renders with percent max height', () => {
      const testId = faker.string.uuid()
      const amount = faker.number.int()
      render(
        <View
          testId={testId}
          maxHeight={new Size(amount, Size.Dimension.PERCENT)}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxHeight: `${amount}%`,
      })
    })
  })
})
