import { faker } from '@faker-js/faker'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Text } from 'react-native'
import { Pressable, usePressableContext } from '.'
import { PressableTag } from './constants'

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
  describe('display inline style', () => {
    it('renders with inline display style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ display: 'inline' })
    })
  })

  describe('user select style', () => {
    it('renders with none user select style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ userSelect: 'none' })
    })
  })

  describe('outline color style', () => {
    it('renders with border base 800 outline color style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        outlineColor: 'rgb(200,200,205)',
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
      expect(screen.getByTestId(testId)).toHaveStyle({ pointerEvents: 'none' })
    })

    it('renders without none pointer events style when not disabled', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          isDisabled={false}
        />,
      )
      expect(screen.getByTestId(testId)).not.toHaveStyle({
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
      fireEvent.click(screen.getByTestId(testId))
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
      fireEvent.click(screen.getByTestId(testId))
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
      fireEvent.click(screen.getByTestId(testId))
      expect(onPress).toHaveBeenCalledTimes(1)
    })
  })

  describe('press event interface', () => {
    it('calls on press with event having preventDefault', () => {
      const testId = randomTestId()
      const onPress = jest.fn()
      render(<Pressable testId={testId} onPress={onPress} />)
      fireEvent.click(screen.getByTestId(testId))
      expect(onPress).toHaveBeenCalledWith(
        expect.objectContaining({ preventDefault: expect.any(Function) }),
      )
    })

    it('calls on press with event having stopPropagation', () => {
      const testId = randomTestId()
      const onPress = jest.fn()
      render(<Pressable testId={testId} onPress={onPress} />)
      fireEvent.click(screen.getByTestId(testId))
      expect(onPress).toHaveBeenCalledWith(
        expect.objectContaining({ stopPropagation: expect.any(Function) }),
      )
    })

    it('calls on press in with event having preventDefault', () => {
      const testId = randomTestId()
      const onPressIn = jest.fn()
      render(<Pressable testId={testId} onPressIn={onPressIn} />)
      fireEvent.mouseDown(screen.getByTestId(testId))
      expect(onPressIn).toHaveBeenCalledWith(
        expect.objectContaining({ preventDefault: expect.any(Function) }),
      )
    })

    it('calls on press in with event having stopPropagation', () => {
      const testId = randomTestId()
      const onPressIn = jest.fn()
      render(<Pressable testId={testId} onPressIn={onPressIn} />)
      fireEvent.mouseDown(screen.getByTestId(testId))
      expect(onPressIn).toHaveBeenCalledWith(
        expect.objectContaining({ stopPropagation: expect.any(Function) }),
      )
    })

    it('calls on press out with event having preventDefault', () => {
      const testId = randomTestId()
      const onPressOut = jest.fn()
      render(<Pressable testId={testId} onPressOut={onPressOut} />)
      fireEvent.mouseUp(screen.getByTestId(testId))
      expect(onPressOut).toHaveBeenCalledWith(
        expect.objectContaining({ preventDefault: expect.any(Function) }),
      )
    })

    it('calls on press out with event having stopPropagation', () => {
      const testId = randomTestId()
      const onPressOut = jest.fn()
      render(<Pressable testId={testId} onPressOut={onPressOut} />)
      fireEvent.mouseUp(screen.getByTestId(testId))
      expect(onPressOut).toHaveBeenCalledWith(
        expect.objectContaining({ stopPropagation: expect.any(Function) }),
      )
    })
  })

  describe('tag property', () => {
    it('renders as button by default', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId).tagName).toBe('BUTTON')
    })

    it('renders as button when tag is BUTTON', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          tag={PressableTag.BUTTON}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('BUTTON')
    })

    it('renders as anchor when tag is ANCHOR', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          tag={PressableTag.ANCHOR}
        />,
      )
      expect(screen.getByTestId(testId).tagName).toBe('A')
    })
  })

  describe('href property', () => {
    it('renders with href attribute when tag is ANCHOR', () => {
      const testId = randomTestId()
      const href = faker.internet.url()
      render(
        <Pressable
          testId={testId}
          tag={PressableTag.ANCHOR}
          href={href}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveAttribute('href', href)
    })

    it('renders without href attribute when tag is ANCHOR and href is not provided', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          tag={PressableTag.ANCHOR}
        />,
      )
      expect(screen.getByTestId(testId)).not.toHaveAttribute('href')
    })

    it('renders without href attribute when tag is BUTTON', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          tag={PressableTag.BUTTON}
        />,
      )
      expect(screen.getByTestId(testId)).not.toHaveAttribute('href')
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
