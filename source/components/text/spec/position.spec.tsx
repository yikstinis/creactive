import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('text position possible property', () => {
    it('renders with static position by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toHaveStyle({
        position: 'static',
      })
    })
  })
})
