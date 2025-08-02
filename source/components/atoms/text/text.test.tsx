import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import type { TextReference } from './text.types'
// TODO: Need to update eslint and prettier to fix import order..
// prettier-ignore
import { Text } from '.'

describe('@/atoms/components/text', () => {
  describe('forwarded reference', () => {
    it('forwards correct reference object', () => {
      const ref = createRef<TextReference>()
      const text = faker.lorem.sentence()
      render(<Text ref={ref}>{text}</Text>)
      expect(ref.current).toBeDefined()
      expect(typeof ref.current.measure).toBe('function')
      expect(() => ref.current?.measure(() => {})).not.toThrow()
      // This inner measure function is already mocked in native platforms.
      // Method implementation performed and works for web platform.
      // Callback will not be called on native platforms.
      ref.current.measure((x, y, width, height) => {
        expect(x).toBeGreaterThanOrEqual(0)
        expect(y).toBeGreaterThanOrEqual(0)
        expect(width).toBeGreaterThanOrEqual(0)
        expect(height).toBeGreaterThanOrEqual(0)
      })
    })
  })

  describe('text align property', () => {
    it('renders with default text align', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).toHaveStyle({
        textAlign: 'left',
      })
    })

    it('renders with left text align', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          textAlign={Text.TextAlign.LEFT}
        >
          {text}
        </Text>
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        textAlign: 'left',
      })
    })

    it('renders with center text align', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          textAlign={Text.TextAlign.CENTER}
        >
          {text}
        </Text>
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        textAlign: 'center',
      })
    })

    it('renders with right text align', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          textAlign={Text.TextAlign.RIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        textAlign: 'right',
      })
    })
  })

  describe('children property', () => {
    it('renders children as text', () => {
      const text = faker.lorem.sentence()
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toBeDefined()
    })
  })
})
