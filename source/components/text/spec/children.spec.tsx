import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('children passing as property', () => {
    it('renders provided string as a child', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text)).toBeTruthy()
    })
  })
})
