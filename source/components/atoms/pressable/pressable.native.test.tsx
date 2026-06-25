import { fireEvent, render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'
import { Pressable, usePressableContext } from '.'

const PressableContent = ({ testId }: { testId: string }) => {
  const pressableContext = usePressableContext()
  return (
    <Text testID={testId}>
      {JSON.stringify({ isPressedIn: pressableContext.isPressedIn })}
    </Text>
  )
}

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

  describe('user select style', () => {
    it('renders with none user select style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        userSelect: 'none',
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
    it('renders with none pointer events style when disabled', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          isDisabled={true}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        pointerEvents: 'none',
      })
    })

    it('renders without none pointer events style when not disabled', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          isDisabled={false}
        />,
      )
      expect(screen.getByTestId(testId)).not.toHavePlatformStyle({
        pointerEvents: 'none',
      })
    })

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

    it('calls on press by default', () => {
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

  describe('press handlers', () => {
    it('calls on press in', () => {
      const testId = randomTestId()
      const onPressIn = jest.fn()
      render(
        <Pressable
          testId={testId}
          onPressIn={onPressIn}
        />,
      )
      fireEvent(screen.getByTestId(testId), 'pressIn')
      expect(onPressIn).toHaveBeenCalledTimes(1)
    })

    it('calls on press out', () => {
      const testId = randomTestId()
      const onPressOut = jest.fn()
      render(
        <Pressable
          testId={testId}
          onPressOut={onPressOut}
        />,
      )
      fireEvent(screen.getByTestId(testId), 'pressOut')
      expect(onPressOut).toHaveBeenCalledTimes(1)
    })
  })

  describe('isPressedIn context value', () => {
    it('provides false by default', () => {
      const testId = randomTestId()
      const consumerTestId = randomTestId()
      render(
        <Pressable testId={testId}>
          <PressableContent testId={consumerTestId} />
        </Pressable>,
      )
      expect(screen.getByTestId(consumerTestId)).toHaveTextContent(
        JSON.stringify({ isPressedIn: false }),
      )
    })

    it('provides true while pressed in', () => {
      const testId = randomTestId()
      const consumerTestId = randomTestId()
      render(
        <Pressable testId={testId}>
          <PressableContent testId={consumerTestId} />
        </Pressable>,
      )
      fireEvent(screen.getByTestId(testId), 'pressIn')
      expect(screen.getByTestId(consumerTestId)).toHaveTextContent(
        JSON.stringify({ isPressedIn: true }),
      )
    })

    it('provides false after press out', () => {
      const testId = randomTestId()
      const consumerTestId = randomTestId()
      render(
        <Pressable testId={testId}>
          <PressableContent testId={consumerTestId} />
        </Pressable>,
      )
      fireEvent(screen.getByTestId(testId), 'pressIn')
      fireEvent(screen.getByTestId(testId), 'pressOut')
      expect(screen.getByTestId(consumerTestId)).toHaveTextContent(
        JSON.stringify({ isPressedIn: false }),
      )
    })
  })
})
