import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('font family passing as property', () => {
    it('renders with base font family style by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontFamily: [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ].join(','),
      })
    })
  })

  describe('font weight passing as property', () => {
    it('renders with REGULAR font weight style by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 400,
      })
    })

    it('renders with THIN font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.THIN}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 100,
      })
    })

    it('renders with EXTRA_LIGHT font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.EXTRA_LIGHT}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 200,
      })
    })

    it('renders with LIGHT font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.LIGHT}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 300,
      })
    })

    it('renders with REGULAR font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.REGULAR}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 400,
      })
    })

    it('renders with MEDIUM font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.MEDIUM}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 500,
      })
    })

    it('renders with SEMIBOLD font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.SEMIBOLD}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 600,
      })
    })

    it('renders with BOLD font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.BOLD}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 700,
      })
    })

    it('renders with EXTRA_BOLD font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.EXTRA_BOLD}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 800,
      })
    })

    it('renders with BLACK font weight style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontWeight={Text.FontWeight.BLACK}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontWeight: 900,
      })
    })
  })

  describe('font size passing as property', () => {
    it('renders with MD font size style by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 18,
      })
    })

    it('renders with X2S font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X2S}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 12,
      })
    })

    it('renders with XS font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.XS}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 14,
      })
    })

    it('renders with SM font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.SM}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 16,
      })
    })

    it('renders with MD font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.MD}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 18,
      })
    })

    it('renders with LG font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.LG}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 20,
      })
    })

    it('renders with XL font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.XL}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 24,
      })
    })

    it('renders with X2L font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X2L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 30,
      })
    })

    it('renders with X3L font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X3L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 36,
      })
    })

    it('renders with X4L font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X4L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 48,
      })
    })

    it('renders with X5L font size style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text fontSize={Text.FontSize.X5L}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        fontSize: 60,
      })
    })
  })
})
