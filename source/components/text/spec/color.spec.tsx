import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('color passing as property', () => {
    it('renders with BASE_800 color by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(39,39,42)',
      })
    })

    it('renders with BASE_100 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_100}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(244,244,245)',
      })
    })

    it('renders with BASE_200 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_200}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(228,228,231)',
      })
    })

    it('renders with BASE_300 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_300}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(212,212,216)',
      })
    })

    it('renders with BASE_400 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_400}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(159,159,169)',
      })
    })

    it('renders with BASE_500 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_500}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(113,113,123)',
      })
    })

    it('renders with BASE_600 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_600}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(82,82,92)',
      })
    })

    it('renders with BASE_700 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_700}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(63,63,70)',
      })
    })

    it('renders with BASE_800 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_800}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(39,39,42)',
      })
    })

    it('renders with BASE_900 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.BASE_900}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(24,24,27)',
      })
    })

    it('renders with INVERSE_100 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_100}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(24,24,27)',
      })
    })

    it('renders with INVERSE_200 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_200}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(39,39,42)',
      })
    })

    it('renders with INVERSE_300 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_300}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(63,63,70)',
      })
    })

    it('renders with INVERSE_400 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_400}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(82,82,92)',
      })
    })

    it('renders with INVERSE_500 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_500}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(113,113,123)',
      })
    })

    it('renders with INVERSE_600 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_600}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(159,159,169)',
      })
    })

    it('renders with INVERSE_700 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_700}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(212,212,216)',
      })
    })

    it('renders with INVERSE_800 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_800}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(228,228,231)',
      })
    })

    it('renders with INVERSE_900 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.INVERSE_900}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(244,244,245)',
      })
    })
  })
})
