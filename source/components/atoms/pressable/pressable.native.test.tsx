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

  describe('outline color style', () => {
    it('renders with border base 800 outline color style', () => {
      const testId = randomTestId()
      render(<Pressable testId={testId} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        outlineColor: 'rgb(200,200,205)',
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

  describe('border radius property', () => {
    it('renders with extra small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadius={Pressable.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderRadius: 2,
      })
    })

    it('renders with small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadius={Pressable.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderRadius: 4,
      })
    })

    it('renders with medium border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadius={Pressable.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderRadius: 6,
      })
    })

    it('renders with large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadius={Pressable.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderRadius: 8,
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadius={Pressable.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderRadius: 10,
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadius={Pressable.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderRadius: '50%',
      })
    })
  })
})
