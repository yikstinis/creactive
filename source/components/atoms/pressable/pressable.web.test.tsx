import { act, fireEvent, render, screen } from '@testing-library/react'
import { Text } from 'react-native'
import { Pressable, usePressableContext } from '.'

const PressableContent = ({ testId }: { testId: string }) => {
  const pressableContext = usePressableContext()

  return (
    <Text testID={testId}>
      {JSON.stringify({
        isPressedIn: pressableContext.isPressedIn,
      })}
    </Text>
  )
}

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('@/components/atoms/pressable', () => {
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
      fireEvent.mouseDown(screen.getByTestId(testId))
      act(() => jest.advanceTimersByTime(100))
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
      fireEvent.mouseDown(screen.getByTestId(testId))
      act(() => jest.advanceTimersByTime(100))
      fireEvent.mouseUp(screen.getByTestId(testId))
      act(() => jest.advanceTimersByTime(100))
      expect(screen.getByTestId(consumerTestId)).toHaveTextContent(
        JSON.stringify({ isPressedIn: false }),
      )
    })
  })
})
