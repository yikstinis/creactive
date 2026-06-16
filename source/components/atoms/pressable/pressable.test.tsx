import { render, screen } from '@testing-library/react-native'
import { Pressable } from '.'

describe('@/components/atoms/pressable', () => {
  describe('test id property', () => {
    it('renders with provided test id', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toBeTruthy()
    })
  })

  describe('children property', () => {
    it('renders provided children', () => {
      const testId = randomTestId()
      const childTestId = randomTestId()
      render(
        <Pressable testId={testId}>
          <Pressable testId={childTestId} />
        </Pressable>,
      )
      expect(screen.getByTestId(childTestId)).toBeTruthy()
    })
  })
})
