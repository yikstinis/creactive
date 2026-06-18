import { render, screen } from '@testing-library/react-native'
import { Animated } from 'react-native'
import { Spinner } from '.'

describe('@/components/molecules/spinner', () => {
  describe('test id property', () => {
    it('renders with provided test id', () => {
      const testId = randomTestId()
      render(<Spinner testId={testId} />)
      expect(screen.getByTestId(testId)).toBeTruthy()
    })
  })

  describe('is disabled property', () => {
    afterEach(() => jest.restoreAllMocks())

    it('starts animation by default', () => {
      jest.spyOn(Animated, 'loop')
      render(<Spinner />)
      expect(Animated.loop).toHaveBeenCalled()
    })

    it('starts animation when not disabled', () => {
      jest.spyOn(Animated, 'loop')
      render(<Spinner isDisabled={false} />)
      expect(Animated.loop).toHaveBeenCalled()
    })

    it('does not start animation when disabled', () => {
      jest.spyOn(Animated, 'loop')
      render(<Spinner isDisabled={true} />)
      expect(Animated.loop).not.toHaveBeenCalled()
    })
  })
})
