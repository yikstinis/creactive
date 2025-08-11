import { Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { Text } from '.'

describe('@/components/atoms/text', () => {
  describe('max lines property', () => {
    it('renders without max lines limit by default', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).not.toHaveProp(
        'numberOfLines',
        expect.any(Number),
      )
    })

    it('renders with provided max lines limit', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      const maxLines = faker.number.int({
        min: 1,
        max: 5,
      })
      render(
        <Text
          testId={testId}
          maxLines={maxLines}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveProp('numberOfLines', maxLines)
    })
  })

  describe('opacity property', () => {
    it('renders with undefined opacity by default', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        opacity: expect.any(Number),
      })
    })

    it('renders with provided opacity', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      const opacity = faker.number.float({
        min: 0,
        max: 1,
      })
      render(
        <Text
          testId={testId}
          opacity={new Fraction(opacity)}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        opacity,
      })
    })
  })
})
