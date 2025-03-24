import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('color passing as property', () => {
    it('renders with TRANSPARENT color', () => {
      const text = faker.lorem.words(2)
      render(<Text color={Text.Color.TRANSPARENT}>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        color: 'rgba(0,0,0,0)',
      })
    })
  })
})
