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

  describe('border radius top left property', () => {
    it('renders with extra small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopLeft={Pressable.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopLeftRadius: 2,
      })
    })

    it('renders with small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopLeft={Pressable.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopLeftRadius: 4,
      })
    })

    it('renders with medium border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopLeft={Pressable.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopLeftRadius: 6,
      })
    })

    it('renders with large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopLeft={Pressable.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopLeftRadius: 8,
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopLeft={Pressable.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopLeftRadius: 10,
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopLeft={Pressable.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopLeftRadius: '50%',
      })
    })
  })

  describe('border radius top right property', () => {
    it('renders with extra small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopRight={Pressable.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopRightRadius: 2,
      })
    })

    it('renders with small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopRight={Pressable.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopRightRadius: 4,
      })
    })

    it('renders with medium border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopRight={Pressable.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopRightRadius: 6,
      })
    })

    it('renders with large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopRight={Pressable.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopRightRadius: 8,
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopRight={Pressable.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopRightRadius: 10,
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusTopRight={Pressable.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderTopRightRadius: '50%',
      })
    })
  })

  describe('border radius bottom left property', () => {
    it('renders with extra small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomLeft={Pressable.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomLeftRadius: 2,
      })
    })

    it('renders with small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomLeft={Pressable.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomLeftRadius: 4,
      })
    })

    it('renders with medium border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomLeft={Pressable.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomLeftRadius: 6,
      })
    })

    it('renders with large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomLeft={Pressable.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomLeftRadius: 8,
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomLeft={Pressable.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomLeftRadius: 10,
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomLeft={Pressable.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomLeftRadius: '50%',
      })
    })
  })

  describe('border radius bottom right property', () => {
    it('renders with extra small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomRight={Pressable.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomRightRadius: 2,
      })
    })

    it('renders with small border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomRight={Pressable.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomRightRadius: 4,
      })
    })

    it('renders with medium border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomRight={Pressable.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomRightRadius: 6,
      })
    })

    it('renders with large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomRight={Pressable.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomRightRadius: 8,
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomRight={Pressable.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomRightRadius: 10,
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = randomTestId()
      render(
        <Pressable
          testId={testId}
          borderRadiusBottomRight={Pressable.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHavePlatformStyle({
        borderBottomRightRadius: '50%',
      })
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
