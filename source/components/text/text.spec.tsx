import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { Text } from './text'

describe('Text component', () => {
  it('renders provided text child', () => {
    const text = faker.lorem.words(2)
    render(<Text>{text}</Text>)
    expect(screen.getByText(text)).toBeTruthy()
  })
})
