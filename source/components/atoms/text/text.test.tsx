import { TestPlatform } from '@/utilities'
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
        fontSize: 16,
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
        fontSize: 10,
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
        fontSize: 12,
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
        fontSize: 14,
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
        fontSize: 16,
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
        fontSize: 18,
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
        fontSize: 20,
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
        fontSize: 24,
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
        fontSize: 30,
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
        fontSize: 36,
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
        fontSize: 48,
      })
    })

    it('renders with 6 times large font size', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X6L}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        fontSize: 60,
      })
    })
  })

  describe('line height property', () => {
    describe('with default font size', () => {
      it('renders with normal line height by default', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(<Text testId={testId}>{text}</Text>)
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(24),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(16),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(20),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(22),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(24),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(26),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(32),
        })
      })
    })

    describe('with 2 times extra-small font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(15),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(10),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(12.5),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(13.75),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(16.25),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(20),
        })
      })
    })

    describe('with extra-small font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(18),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XS}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(12),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XS}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(15),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XS}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(16.5),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XS}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(18),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XS}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(19.5),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XS}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(24),
        })
      })
    })

    describe('with small font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(21),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.SM}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(14),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.SM}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(17.5),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.SM}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(19.25),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.SM}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(21),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.SM}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(22.75),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.SM}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(28),
        })
      })
    })

    describe('with medium font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(24),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.MD}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(16),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.MD}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(20),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.MD}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(22),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.MD}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(24),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.MD}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(26),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.MD}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(32),
        })
      })
    })

    describe('with large font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(27),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.LG}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(18),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.LG}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(22.5),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.LG}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(24.75),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.LG}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(27),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.LG}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(29.25),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.LG}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(36),
        })
      })
    })

    describe('with extra-large font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(30),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XL}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(20),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XL}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(25),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XL}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(27.5),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XL}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(30),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XL}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(32.5),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.XL}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(40),
        })
      })
    })

    describe('with 2 times extra-large font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(36),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2L}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(24),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2L}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(30),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2L}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(33),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2L}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(36),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2L}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(39),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2L}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(48),
        })
      })
    })

    describe('with 3 times extra-large font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(45),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X3L}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(30),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X3L}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(37.5),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X3L}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(41.25),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X3L}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(45),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X3L}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(48.75),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X3L}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(60),
        })
      })
    })

    describe('with 4 times extra-large font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(54),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X4L}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(36),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X4L}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(45),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X4L}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(49.5),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X4L}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(54),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X4L}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(58.5),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X4L}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(72),
        })
      })
    })

    describe('with 5 times extra-large font size', () => {
      it('renders with normal line height by default', () => {
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
          lineHeight: TestPlatform.toPixels(72),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X5L}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(48),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X5L}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(60),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X5L}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(66),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X5L}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(72),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X5L}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(78),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X5L}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(96),
        })
      })
    })

    describe('with 6 times extra-large font size', () => {
      it('renders with normal line height by default', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(90),
        })
      })

      it('renders with none line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
            lineHeight={Text.LineHeight.NONE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(60),
        })
      })

      it('renders with tight line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
            lineHeight={Text.LineHeight.TIGHT}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(75),
        })
      })

      it('renders with snug line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
            lineHeight={Text.LineHeight.SNUG}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(82.5),
        })
      })

      it('renders with normal line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
            lineHeight={Text.LineHeight.NORMAL}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(90),
        })
      })

      it('renders with relaxed line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
            lineHeight={Text.LineHeight.RELAXED}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(97.5),
        })
      })

      it('renders with loose line height', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X6L}
            lineHeight={Text.LineHeight.LOOSE}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          lineHeight: TestPlatform.toPixels(120),
        })
      })
    })
  })

  describe('color property', () => {
    it('renders with base 800 color by default', () => {
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
        color: 'rgb(25,25,30)',
      })
    })

    it('renders with transparent color', () => {
      const testId = faker.string.uuid()
      const text = faker.lorem.sentence()
      render(
        <Text
          testId={testId}
          fontSize={Text.FontSize.X2S}
          color={Text.Color.TRANSPARENT}
        >
          {text}
        </Text>,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        color: 'transparent',
      })
    })

    describe('base colors', () => {
      it('renders with base 100 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_100}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(200,200,205)',
        })
      })

      it('renders with base 200 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_200}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(175,175,180)',
        })
      })

      it('renders with base 300 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_300}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(150,150,155)',
        })
      })

      it('renders with base 400 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_400}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(125,125,130)',
        })
      })

      it('renders with base 500 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_500}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(100,100,105)',
        })
      })

      it('renders with base 600 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_600}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(75,75,80)',
        })
      })

      it('renders with base 700 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_700}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(50,50,55)',
        })
      })

      it('renders with base 800 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_800}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(25,25,30)',
        })
      })

      it('renders with base 900 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.BASE_900}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(0,0,5)',
        })
      })
    })

    describe('inverse colors', () => {
      it('renders with inverse 100 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_100}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(50,50,55)',
        })
      })

      it('renders with inverse 200 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_200}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(75,75,80)',
        })
      })

      it('renders with inverse 300 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_300}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(100,100,105)',
        })
      })

      it('renders with inverse 400 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_400}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(125,125,130)',
        })
      })

      it('renders with inverse 500 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_500}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(150,150,155)',
        })
      })

      it('renders with inverse 600 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_600}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(175,175,180)',
        })
      })

      it('renders with inverse 700 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_700}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(200,200,205)',
        })
      })

      it('renders with inverse 800 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_800}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(225,225,230)',
        })
      })

      it('renders with inverse 900 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.INVERSE_900}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(250,250,255)',
        })
      })
    })

    describe('failure colors', () => {
      it('renders with failure 100 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_100}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(225,200,200)',
        })
      })

      it('renders with failure 200 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_200}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(220,175,175)',
        })
      })

      it('renders with failure 300 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_300}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(215,150,150)',
        })
      })

      it('renders with failure 400 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_400}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(210,125,125)',
        })
      })

      it('renders with failure 500 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_500}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(205,100,100)',
        })
      })

      it('renders with failure 600 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_600}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(200,75,75)',
        })
      })

      it('renders with failure 700 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_700}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(195,50,50)',
        })
      })

      it('renders with failure 800 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_800}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(190,25,25)',
        })
      })

      it('renders with failure 900 color', () => {
        const testId = faker.string.uuid()
        const text = faker.lorem.sentence()
        render(
          <Text
            testId={testId}
            fontSize={Text.FontSize.X2S}
            color={Text.Color.FAILURE_900}
          >
            {text}
          </Text>,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          color: 'rgb(185,0,0)',
        })
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
