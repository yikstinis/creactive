import { FONT_FAMILY_BASE } from '@/constants'
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
})
