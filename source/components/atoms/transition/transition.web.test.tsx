import { render, screen } from '@testing-library/react'
import { Transition } from '.'

describe('@/components/atoms/transition', () => {
  describe('flex property', () => {
    it('renders with flex 1 style', () => {
      const testId = randomTestId()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyleRule('flex', '1')
    })
  })

  describe('children property', () => {
    it('renders provided children', () => {
      const testId = randomTestId()
      const childTestId = randomTestId()
      render(
        <Transition testId={testId}>
          <Transition testId={childTestId} />
        </Transition>,
      )
      expect(screen.getByTestId(childTestId)).toBeTruthy()
    })
  })

  describe('opacity property', () => {
    it('renders without opacity style by default', () => {
      const testId = randomTestId()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'opacity',
        expect.anything(),
      )
    })

    it('renders with provided fraction opacity style', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <Transition
          testId={testId}
          opacity={fraction}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'opacity',
        String(fraction.toValue()),
      )
    })
  })

  describe('scale property', () => {
    it('renders without transform style by default', () => {
      const testId = randomTestId()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'transform',
        expect.anything(),
      )
    })

    it('renders with provided fraction scale transform style', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <Transition
          testId={testId}
          scale={fraction}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `scale(${fraction.toValue()})`,
      )
    })
  })

  describe('translateX property', () => {
    it('renders with provided pixel translateX transform style', () => {
      const testId = randomTestId()
      const dimension = randomPixelDimension()
      render(
        <Transition
          testId={testId}
          translateX={dimension}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `translateX(${dimension.toValue()})`,
      )
    })
  })

  describe('translateY property', () => {
    it('renders with provided pixel translateY transform style', () => {
      const testId = randomTestId()
      const dimension = randomPixelDimension()
      render(
        <Transition
          testId={testId}
          translateY={dimension}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `translateY(${dimension.toValue()})`,
      )
    })
  })

  describe('duration property', () => {
    it('renders with default medium duration transition style', () => {
      const testId = randomTestId()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transition',
        'opacity 175ms ease,transform 175ms ease',
      )
    })

    it('renders with none duration transition style', () => {
      const testId = randomTestId()
      render(
        <Transition
          testId={testId}
          duration={Transition.Duration.NONE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transition',
        'opacity 0ms ease,transform 0ms ease',
      )
    })

    it('renders with small duration transition style', () => {
      const testId = randomTestId()
      render(
        <Transition
          testId={testId}
          duration={Transition.Duration.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transition',
        'opacity 125ms ease,transform 125ms ease',
      )
    })

    it('renders with medium duration transition style', () => {
      const testId = randomTestId()
      render(
        <Transition
          testId={testId}
          duration={Transition.Duration.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transition',
        'opacity 175ms ease,transform 175ms ease',
      )
    })

    it('renders with large duration transition style', () => {
      const testId = randomTestId()
      render(
        <Transition
          testId={testId}
          duration={Transition.Duration.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transition',
        'opacity 225ms ease,transform 225ms ease',
      )
    })
  })
})
