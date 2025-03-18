import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('text align passing as property', () => {
    it('renders with LEFT text alignment style by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        textAlign: 'left',
      })
    })

    it('renders with LEFT text alignment style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text align={Text.Align.LEFT}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        textAlign: 'left',
      })
    })

    it('renders with CENTER text alignment style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text align={Text.Align.CENTER}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        textAlign: 'center',
      })
    })

    it('renders with RIGHT text alignment style when provided', () => {
      const text = faker.lorem.words(2)
      render(<Text align={Text.Align.RIGHT}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        textAlign: 'right',
      })
    })
  })
})
