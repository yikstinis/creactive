import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('line height passing as property', () => {
    it('renders with default line height and font size values', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 18,
      })
    })

    it('renders with default line height when X2S font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X2S}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 12,
      })
    })

    it('renders with default line height when XS font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.XS}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 14,
      })
    })

    it('renders with default line height when SM font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.SM}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 16,
      })
    })

    it('renders with default line height when MD font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.MD}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 18,
      })
    })

    it('renders with default line height when LG font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.LG}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 20,
      })
    })

    it('renders with default line height when XL font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.XL}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 24,
      })
    })

    it('renders with default line height when X2L font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X2L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 30,
      })
    })

    it('renders with default line height when X3L font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X3L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 36,
      })
    })

    it('renders with default line height when X4L font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X4L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 48,
      })
    })

    it('renders with default line height when X5L font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X5L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 60,
      })
    })

    it('renders with NONE line height when no font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text lineHeight={Text.LineHeight.NONE}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 18,
      })
    })

    it('renders with TIGHT line height when no font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text lineHeight={Text.LineHeight.TIGHT}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 22.5,
      })
    })

    it('renders with SNUG line height when no font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text lineHeight={Text.LineHeight.SNUG}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 24.75,
      })
    })

    it('renders with NORMAL line height when no font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text lineHeight={Text.LineHeight.NORMAL}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 27,
      })
    })

    it('renders with RELAXED line height when no font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text lineHeight={Text.LineHeight.RELAXED}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 29.25,
      })
    })

    it('renders with LOOSE line height when no font size provided', () => {
      const text = faker.lorem.words(2)
      render(<Text lineHeight={Text.LineHeight.LOOSE}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 36,
      })
    })

    it('renders with NONE line height and X2S font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2S}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 12,
      })
    })

    it('renders with NONE line height and XS font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XS}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 14,
      })
    })

    it('renders with NONE line height and SM font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.SM}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 16,
      })
    })

    it('renders with NONE line height and MD font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.MD}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 18,
      })
    })

    it('renders with NONE line height and LG font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.LG}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 20,
      })
    })

    it('renders with NONE line height and XL font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XL}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 24,
      })
    })

    it('renders with NONE line height and X2L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2L}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 30,
      })
    })

    it('renders with NONE line height and X3L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X3L}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 36,
      })
    })

    it('renders with NONE line height and X4L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X4L}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 48,
      })
    })

    it('renders with NONE line height and X5L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X5L}
          lineHeight={Text.LineHeight.NONE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 60,
      })
    })

    it('renders with TIGHT line height and X2S font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2S}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 15,
      })
    })

    it('renders with TIGHT line height and XS font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XS}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 17.5,
      })
    })

    it('renders with TIGHT line height and SM font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.SM}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 20,
      })
    })

    it('renders with TIGHT line height and MD font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.MD}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 22.5,
      })
    })

    it('renders with TIGHT line height and LG font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.LG}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 25,
      })
    })

    it('renders with TIGHT line height and XL font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XL}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 30,
      })
    })

    it('renders with TIGHT line height and X2L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2L}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 37.5,
      })
    })

    it('renders with TIGHT line height and X3L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X3L}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 45,
      })
    })

    it('renders with TIGHT line height and X4L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X4L}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 60,
      })
    })

    it('renders with TIGHT line height and X5L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X5L}
          lineHeight={Text.LineHeight.TIGHT}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 75,
      })
    })

    it('renders with SNUG line height and X2S font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2S}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 16.5,
      })
    })

    it('renders with SNUG line height and XS font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XS}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 19.25,
      })
    })

    it('renders with SNUG line height and SM font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.SM}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 22,
      })
    })

    it('renders with SNUG line height and MD font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.MD}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 24.75,
      })
    })

    it('renders with SNUG line height and LG font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.LG}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 27.5,
      })
    })

    it('renders with SNUG line height and XL font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XL}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 33,
      })
    })

    it('renders with SNUG line height and X2L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2L}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 41.25,
      })
    })

    it('renders with SNUG line height and X3L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X3L}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 49.5,
      })
    })

    it('renders with SNUG line height and X4L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X4L}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 66,
      })
    })

    it('renders with SNUG line height and X5L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X5L}
          lineHeight={Text.LineHeight.SNUG}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 82.5,
      })
    })

    it('renders with NORMAL line height and X2S font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2S}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 18,
      })
    })

    it('renders with NORMAL line height and XS font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XS}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 21,
      })
    })

    it('renders with NORMAL line height and SM font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.SM}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 24,
      })
    })

    it('renders with NORMAL line height and MD font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.MD}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 27,
      })
    })

    it('renders with NORMAL line height and LG font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.LG}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 30,
      })
    })

    it('renders with NORMAL line height and XL font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XL}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 36,
      })
    })

    it('renders with NORMAL line height and X2L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2L}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 45,
      })
    })

    it('renders with NORMAL line height and X3L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X3L}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 54,
      })
    })

    it('renders with NORMAL line height and X4L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X4L}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 72,
      })
    })

    it('renders with NORMAL line height and X5L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X5L}
          lineHeight={Text.LineHeight.NORMAL}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 90,
      })
    })

    it('renders with RELAXED line height and X2S font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2S}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 19.5,
      })
    })

    it('renders with RELAXED line height and XS font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XS}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 22.75,
      })
    })

    it('renders with RELAXED line height and SM font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.SM}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 26,
      })
    })

    it('renders with RELAXED line height and MD font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.MD}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 29.25,
      })
    })

    it('renders with RELAXED line height and LG font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.LG}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 32.5,
      })
    })

    it('renders with RELAXED line height and XL font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XL}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 39,
      })
    })

    it('renders with RELAXED line height and X2L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2L}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 48.75,
      })
    })

    it('renders with RELAXED line height and X3L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X3L}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 58.5,
      })
    })

    it('renders with RELAXED line height and X4L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X4L}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 78,
      })
    })

    it('renders with RELAXED line height and X5L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X5L}
          lineHeight={Text.LineHeight.RELAXED}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 97.5,
      })
    })

    it('renders with LOOSE line height and X2S font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2S}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 24,
      })
    })

    it('renders with LOOSE line height and XS font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XS}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 28,
      })
    })

    it('renders with LOOSE line height and SM font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.SM}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 32,
      })
    })

    it('renders with LOOSE line height and MD font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.MD}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 36,
      })
    })

    it('renders with LOOSE line height and LG font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.LG}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 40,
      })
    })

    it('renders with LOOSE line height and XL font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.XL}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 48,
      })
    })

    it('renders with LOOSE line height and X2L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X2L}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 60,
      })
    })

    it('renders with LOOSE line height and X3L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X3L}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 72,
      })
    })

    it('renders with LOOSE line height and X4L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X4L}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 96,
      })
    })

    it('renders with LOOSE line height and X5L font size', () => {
      const text = faker.lorem.words(2)
      render(
        <Text
          fontSize={Text.FontSize.X5L}
          lineHeight={Text.LineHeight.LOOSE}
        >
          {text}
        </Text>
      )
      expect(screen.getByText(text)).toHaveStyle({
        lineHeight: 120,
      })
    })
  })
})
