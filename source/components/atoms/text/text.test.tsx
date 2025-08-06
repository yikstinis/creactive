import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Platform } from 'react-native'
import { Text } from '.'
import type { TextReference } from './text.types'

describe('@/components/atoms/text', () => {
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
      // TODO: Find out, how to test this on native platforms..
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
        </Text>,
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
        </Text>,
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
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        textAlign: 'right',
      })
    })
  })

  describe('text decoration property', () => {
    it('renders with none text decoration by default', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).toHaveStyle({
        textDecorationLine: 'none',
      })
    })

    it('renders with none text decoration', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          textDecoration={Text.TextDecoration.NONE}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        textDecorationLine: 'none',
      })
    })

    it('renders with underline text decoration', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          textDecoration={Text.TextDecoration.UNDERLINE}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        textDecorationLine: 'underline',
      })
    })
  })

  describe('font family property', () => {
    it('renders with base font family by default', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontFamily: Platform.select({
          web: [
            'ui-sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
          ].join(','),
          default: 'System',
        }),
      })
    })

    it('renders with base font family', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontFamily={Text.FontFamily.BASE}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontFamily: Platform.select({
          web: [
            'ui-sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
          ].join(','),
          default: 'System',
        }),
      })
    })

    it('renders with typographic font family', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontFamily={Text.FontFamily.TYPOGRAPHIC}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontFamily: Platform.select({
          web: ['"Times New Roman"', 'Times', 'Georgia', 'serif'].join(','),
          ios: 'Times New Roman',
          default: 'serif',
        }),
      })
    })
  })

  describe('font weight property', () => {
    it('renders with regular font weight by default', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 400,
      })
    })

    it('renders with thin font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.THIN}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 100,
      })
    })

    it('renders with extra-light font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.EXTRA_LIGHT}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 200,
      })
    })

    it('renders with light font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.LIGHT}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 300,
      })
    })

    it('renders with regular font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.REGULAR}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 400,
      })
    })

    it('renders with medium font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.MEDIUM}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 500,
      })
    })

    it('renders with semibold font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.SEMIBOLD}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 600,
      })
    })

    it('renders with bold font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.BOLD}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 700,
      })
    })

    it('renders with extra-bold font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.EXTRA_BOLD}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 800,
      })
    })

    it('renders with black font weight', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontWeight={Text.FontWeight.BLACK}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontWeight: 900,
      })
    })
  })

  describe('font size property', () => {
    it('renders with medium font size by default', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(<Text testId={testId}>{text}</Text>)
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 18,
      })
    })

    it('renders with 2 times extra-small font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X2S}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 12,
      })
    })

    it('renders with extra-small font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.XS}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 14,
      })
    })

    it('renders with small font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.SM}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 16,
      })
    })

    it('renders with medium font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.MD}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 18,
      })
    })

    it('renders with large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.LG}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 20,
      })
    })

    it('renders with extra-large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.XL}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 24,
      })
    })

    it('renders with 2 times large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X2L}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 30,
      })
    })

    it('renders with 3 times large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X3L}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 36,
      })
    })

    it('renders with 4 times large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X4L}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 48,
      })
    })

    it('renders with 5 times large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X5L}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 60,
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
