import { render, screen } from '@testing-library/react-native'
import { Transition } from '.'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('@/components/atoms/transition', () => {
  describe('test id property', () => {
    it('renders with provided test id', () => {
      const testId = randomTestId()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toBeTruthy()
    })
  })

  describe('children property', () => {
    it('renders provided children', () => {
      const testId = randomTestId()
      const childTestId = randomTestId()
      render(
        <Transition testId={testId}>
          <Transition testId={childTestId} />
        </Transition>,
      )
      expect(screen.getByTestId(childTestId)).toBeTruthy()
    })
  })

  describe('opacity property', () => {
    it('renders with provided fraction opacity', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <Transition
          testId={testId}
          opacity={fraction}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({ opacity: fraction.toValue() })
    })
  })
})
