import { Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Text as RNText } from 'react-native'
import { Text } from '.'
import type { TextMeasureCallback, TextReference } from './text.types'

describe('@/components/atoms/text', () => {
  describe('forwarded reference object', () => {
    it('calls measure callback with native element coordinates', () => {
      const ref = createRef<TextReference>()
      render(<Text ref={ref}>{faker.lorem.sentence()}</Text>)

      // react-native mocks Text as a class component with measure: jest.fn().
      // We can access the instance via UNSAFE_getByType and mock measure to call the callback.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nativeTextInstance = (screen as any).UNSAFE_getByType(
        RNText,
      ).instance
      nativeTextInstance.measure = jest.fn((callback: TextMeasureCallback) => {
        callback(1, 2, 100, 50)
      })

      const callback = jest.fn()
      ref.current?.measure(callback)

      expect(callback).toHaveBeenCalledWith(1, 2, 100, 50)
    })
  })

  describe('max lines property', () => {
    it('renders without max lines limit by default', () => {
      const testId = randomTestId()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).not.toHaveProp(
        'numberOfLines',
        expect.any(Number),
      )
    })

    it('renders with provided max lines limit', () => {
      const testId = randomTestId()
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
      const testId = randomTestId()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        opacity: expect.any(Number),
      })
    })

    it('renders with provided opacity', () => {
      const testId = randomTestId()
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
