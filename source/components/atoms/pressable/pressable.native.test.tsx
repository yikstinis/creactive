import { fireEvent, render, screen } from '@testing-library/react-native'
import { Pressable } from '.'

describe('@/components/atoms/pressable', () => {
  describe('display inline style', () => {
    it('renders with inline display style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        display: 'inline',
      })
    })
  })

  describe('outline style', () => {
    it('renders with none outline style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        outlineStyle: 'none',
      })
    })
  })

  describe('is disabled property', () => {
    it('does not call on press when disabled', () => {
      const testId = randomTestId()
      const onPress = jest.fn()
      render(
        <Pressable
          testId={testId}
          isDisabled={true}
          onPress={onPress}
        />,
      )
      fireEvent(screen.getByTestId(testId), 'press')
      expect(onPress).not.toHaveBeenCalled()
    })

    it('calls on press when enabled', () => {
      const testId = randomTestId()
      const onPress = jest.fn()
      render(
        <Pressable
          testId={testId}
          isDisabled={false}
          onPress={onPress}
        />,
      )
      fireEvent(screen.getByTestId(testId), 'press')
      expect(onPress).toHaveBeenCalledTimes(1)
    })

    it('calls on press when not provided', () => {
      const testId = randomTestId()
      const onPress = jest.fn()
      render(
        <Pressable
          testId={testId}
          onPress={onPress}
        />,
      )
      fireEvent(screen.getByTestId(testId), 'press')
      expect(onPress).toHaveBeenCalledTimes(1)
    })
  })
})
