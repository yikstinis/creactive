import { Fraction } from '@/helpers'
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
  describe('test id property', () => {
    it('renders with provided test id', () => {
      const testId = faker.string.uuid()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toBeTruthy()
    })
  })

  describe('children property', () => {
    it('renders provided children', () => {
      const testId = faker.string.uuid()
      const childTestId = faker.string.uuid()
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
      const testId = faker.string.uuid()
      const opacity = faker.number.float({ min: 0, max: 1 })
      render(
        <Transition
          testId={testId}
          opacity={new Fraction(opacity)}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({ opacity })
    })
  })
})
