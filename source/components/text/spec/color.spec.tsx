import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('color passing as property', () => {
    it('renders with FOREGROUND_800 color by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(39,39,42)',
      })
    })

    it('renders with FOREGROUND_100 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_100}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(244,244,245)',
      })
    })

    it('renders with FOREGROUND_200 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_200}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(228,228,231)',
      })
    })

    it('renders with FOREGROUND_300 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_300}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(212,212,216)',
      })
    })

    it('renders with FOREGROUND_400 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_400}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(159,159,169)',
      })
    })

    it('renders with FOREGROUND_500 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_500}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(113,113,123)',
      })
    })

    it('renders with FOREGROUND_600 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_600}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(82,82,92)',
      })
    })

    it('renders with FOREGROUND_700 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_700}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(63,63,70)',
      })
    })

    it('renders with FOREGROUND_800 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_800}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(39,39,42)',
      })
    })

    it('renders with FOREGROUND_900 color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.FOREGROUND_900}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgb(24,24,27)',
      })
    })
  })
})
