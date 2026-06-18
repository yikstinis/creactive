import { render, screen } from '@testing-library/react-native'
import { Spinner } from '.'

describe('@/components/molecules/spinner', () => {
  describe('test id property', () => {
    it('renders with provided test id', () => {
      const testId = randomTestId()
      render(<Spinner testId={testId} />)
      expect(screen.getByTestId(testId)).toBeTruthy()
    })
  })
})
