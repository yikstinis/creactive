import { render, screen } from '@testing-library/react-native'
import { Animated } from 'react-native'
import { Circle } from 'react-native-svg'
import { Spinner } from '.'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('@/components/molecules/spinner', () => {
  describe('size property', () => {
    it('renders with small size', () => {
      const testId = randomTestId()
      render(
        <Spinner
          testId={testId}
          size={Spinner.Size.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 16,
        height: 16,
      })
    })

    it('renders with medium size by default', () => {
      const testId = randomTestId()
      render(<Spinner testId={testId} />)
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 24,
        height: 24,
      })
    })

    it('renders with medium size', () => {
      const testId = randomTestId()
      render(
        <Spinner
          testId={testId}
          size={Spinner.Size.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 24,
        height: 24,
      })
    })

    it('renders with large size', () => {
      const testId = randomTestId()
      render(
        <Spinner
          testId={testId}
          size={Spinner.Size.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        width: 32,
        height: 32,
      })
    })
  })

  describe('color property', () => {
    it('renders with base 800 color by default', () => {
      const { UNSAFE_getByType } = render(<Spinner />)
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(25,25,30)')
    })

    it('renders with base 100 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_100} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(200,200,205)')
    })

    it('renders with base 200 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_200} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(175,175,180)')
    })

    it('renders with base 300 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_300} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(150,150,155)')
    })

    it('renders with base 400 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_400} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(125,125,130)')
    })

    it('renders with base 500 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_500} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(100,100,105)')
    })

    it('renders with base 600 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_600} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(75,75,80)')
    })

    it('renders with base 700 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_700} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(50,50,55)')
    })

    it('renders with base 800 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_800} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(25,25,30)')
    })

    it('renders with base 900 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.BASE_900} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(0,0,5)')
    })

    it('renders with inverse 100 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_100} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(75,75,80)')
    })

    it('renders with inverse 200 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_200} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(100,100,105)')
    })

    it('renders with inverse 300 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_300} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(125,125,130)')
    })

    it('renders with inverse 400 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_400} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(150,150,155)')
    })

    it('renders with inverse 500 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_500} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(175,175,180)')
    })

    it('renders with inverse 600 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_600} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(200,200,205)')
    })

    it('renders with inverse 700 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_700} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(225,225,230)')
    })

    it('renders with inverse 800 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_800} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(250,250,255)')
    })

    it('renders with inverse 900 color', () => {
      const { UNSAFE_getByType } = render(
        <Spinner color={Spinner.Color.INVERSE_900} />,
      )
      expect(UNSAFE_getByType(Circle).props.stroke).toBe('rgb(255,255,255)')
    })
  })

  describe('animating', () => {
    beforeEach(() => {
      jest.setSystemTime(0)
    })

    it('rotates when not disabled', () => {
      const startSpy = jest.fn()
      jest.spyOn(Animated, 'parallel').mockReturnValueOnce({
        start: startSpy,
        stop: jest.fn(),
        reset: jest.fn(),
      })
      render(<Spinner />)
      expect(startSpy).toHaveBeenCalled()
    })

    it('does not rotate when disabled', () => {
      const startSpy = jest.fn()
      jest.spyOn(Animated, 'parallel').mockReturnValueOnce({
        start: startSpy,
        stop: jest.fn(),
        reset: jest.fn(),
      })
      render(<Spinner isDisabled={true} />)
      expect(startSpy).not.toHaveBeenCalled()
    })
  })
})
