import { Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { Text } from '.'

describe('@/components/atoms/text', () => {
  describe('tag property', () => {
    it('renders into span element by default', () => {
      const testId = faker.string.uuid()
      render(<Text testId={testId} />)
      expect(screen.getByTestId(testId).tagName).toBe('SPAN')
    })

    it('renders into h1 tag element', () => {
      const testId = faker.string.uuid()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.H1}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('H1')
    })

    it('renders into h2 tag element', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.H2}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId).tagName).toBe('H2')
    })

    it('renders into h3 tag element', () => {
      const testId = faker.string.uuid()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.H3}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('H3')
    })

    it('renders into h4 tag element', () => {
      const testId = faker.string.uuid()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.H4}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('H4')
    })

    it('renders into h5 tag element', () => {
      const testId = faker.string.uuid()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.H5}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('H5')
    })

    it('renders into h6 tag element', () => {
      const testId = faker.string.uuid()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.H6}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('H6')
    })

    it('renders into p tag element', () => {
      const testId = faker.string.uuid()
      render(
        <Text
          testId={testId}
          tag={Text.Tag.P}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('P')
    })
  })

  describe('max lines property', () => {
    it('renders without max lines limit by default', () => {
      const testId = faker.string.uuid()
      render(<Text testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        display: 'inline',
      })
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        '-webkit-line-clamp',
        expect.any(String),
      )
    })

    it('renders with provided max lines limit', () => {
      const testId = faker.string.uuid()
      const maxLines = faker.number.int({
        min: 1,
      })
      render(
        <Text
          testId={testId}
          maxLines={maxLines}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        display: '-webkit-box',
      })
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        '-webkit-box-orient',
        'vertical',
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        '-webkit-line-clamp',
        maxLines.toString(),
      )
    })
  })

  describe('opacity property', () => {
    it('renders with undefined opacity by default', () => {
      const testId = faker.string.uuid()
      render(<Text testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'opacity',
        expect.any(Number),
      )
    })

    it('renders with provided opacity', () => {
      const testId = faker.string.uuid()
      const opacity = faker.number.float({
        min: 0,
        max: 1,
      })
      render(
        <Text
          testId={testId}
          opacity={new Fraction(opacity)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        opacity,
      })
    })
  })
})
