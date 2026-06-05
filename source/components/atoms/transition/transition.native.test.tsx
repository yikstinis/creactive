import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Transition } from '.'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('@/components/atoms/transition', () => {
  describe('opacity property', () => {
    it('renders with default opacity 1', () => {
      const testId = faker.string.uuid()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ opacity: 1 })
    })
  })

  describe('scale property', () => {
    it('renders with default scale 1 in transform', () => {
      const testId = faker.string.uuid()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        transform: [{ scale: 1 }, { translateX: 0 }, { translateY: 0 }],
      })
    })

    it('renders with provided fraction scale', () => {
      const testId = faker.string.uuid()
      const fraction = randomFraction()
      render(
        <Transition
          testId={testId}
          scale={fraction}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        transform: [
          { scale: fraction.toValue() },
          { translateX: 0 },
          { translateY: 0 },
        ],
      })
    })
  })

  describe('translateX property', () => {
    it('renders with provided pixel translateX', () => {
      const testId = faker.string.uuid()
      const dimension = randomPixelDimension()
      render(
        <Transition
          testId={testId}
          translateX={dimension}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        transform: [
          { scale: 1 },
          { translateX: dimension.toValue() as number },
          { translateY: 0 },
        ],
      })
    })
  })

  describe('translateY property', () => {
    it('renders with provided pixel translateY', () => {
      const testId = faker.string.uuid()
      const dimension = randomPixelDimension()
      render(
        <Transition
          testId={testId}
          translateY={dimension}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        transform: [
          { scale: 1 },
          { translateX: 0 },
          { translateY: dimension.toValue() as number },
        ],
      })
    })
  })
})
