import {
  FONT_FAMILY_BASE,
  FONT_SIZE_BASE_LG,
  FONT_SIZE_BASE_MD,
  FONT_SIZE_BASE_SM,
  FONT_SIZE_BASE_X2L,
  FONT_SIZE_BASE_X2S,
  FONT_SIZE_BASE_X3L,
  FONT_SIZE_BASE_X4L,
  FONT_SIZE_BASE_X5L,
  FONT_SIZE_BASE_XL,
  FONT_SIZE_BASE_XS,
  FONT_WEIGHT_BASE_BLACK,
  FONT_WEIGHT_BASE_BOLD,
  FONT_WEIGHT_BASE_EXTRABOLD,
  FONT_WEIGHT_BASE_EXTRALIGHT,
  FONT_WEIGHT_BASE_LIGHT,
  FONT_WEIGHT_BASE_REGULAR,
  FONT_WEIGHT_BASE_SEMIBOLD,
  FONT_WEIGHT_BASE_THIN,
} from '@/constants'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from './text'

describe('@/components/text', () => {
  it('renders provided string as a child', () => {
    const text = faker.lorem.words(2)
    render(<Text>{text}</Text>)
    expect(screen.getByText(text)).toBeTruthy()
  })

  it('renders with base font family style by default', () => {
    const text = faker.lorem.words(2)
    render(<Text>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontFamily: FONT_FAMILY_BASE,
    })
  })

  it('renders with REGULAR font weight style by default', () => {
    const text = faker.lorem.words(2)
    render(<Text>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_REGULAR,
    })
  })

  it('renders with THIN font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.THIN}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_THIN,
    })
  })

  it('renders with EXTRA_LIGHT font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.EXTRA_LIGHT}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_EXTRALIGHT,
    })
  })

  it('renders with LIGHT font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.LIGHT}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_LIGHT,
    })
  })

  it('renders with REGULAR font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.REGULAR}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_REGULAR,
    })
  })

  it('renders with SEMIBOLD font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.SEMIBOLD}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_SEMIBOLD,
    })
  })

  it('renders with BOLD font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.BOLD}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_BOLD,
    })
  })

  it('renders with EXTRA_BOLD font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.EXTRA_BOLD}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_EXTRABOLD,
    })
  })

  it('renders with BLACK font weight style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontWeight={Text.FontWeight.BLACK}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontWeight: FONT_WEIGHT_BASE_BLACK,
    })
  })

  it('renders with MD font size style by default', () => {
    const text = faker.lorem.words(2)
    render(<Text>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_MD,
    })
  })

  it('renders with X2S font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.X2S}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_X2S,
    })
  })

  it('renders with XS font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.XS}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_XS,
    })
  })

  it('renders with SM font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.SM}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_SM,
    })
  })

  it('renders with MD font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.MD}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_MD,
    })
  })

  it('renders with LG font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.LG}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_LG,
    })
  })

  it('renders with XL font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.XL}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_XL,
    })
  })

  it('renders with X2L font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.X2L}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_X2L,
    })
  })

  it('renders with X3L font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.X3L}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_X3L,
    })
  })

  it('renders with X4L font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.X4L}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_X4L,
    })
  })

  it('renders with X5L font size style when provided', () => {
    const text = faker.lorem.words(2)
    render(<Text fontSize={Text.FontSize.X5L}>{text}</Text>)
    expect(screen.getByText(text)).toHaveStyle({
      fontSize: FONT_SIZE_BASE_X5L,
    })
  })
})
