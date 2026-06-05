import { Dimension, Fraction } from '@/helpers'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { Transition } from '.'

describe('@/components/atoms/transition', () => {
  describe('children property', () => {
    it('renders provided children', () => {
      const testId = faker.string.uuid()
      const childTestId = faker.string.uuid()
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
      const testId = faker.string.uuid()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'opacity',
        expect.anything(),
      )
    })

    it('renders with provided fraction opacity style', () => {
      const testId = faker.string.uuid()
      const opacity = faker.number.float({ min: 0, max: 1 })
      render(
        <Transition
          testId={testId}
          opacity={new Fraction(opacity)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'opacity',
        String(opacity),
      )
    })
  })

  describe('scale property', () => {
    it('renders without transform style by default', () => {
      const testId = faker.string.uuid()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyleRule(
        'transform',
        expect.anything(),
      )
    })

    it('renders with provided fraction scale transform style', () => {
      const testId = faker.string.uuid()
      const scale = faker.number.float({ min: 0, max: 1 })
      render(
        <Transition
          testId={testId}
          scale={new Fraction(scale)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `scale(${scale})`,
      )
    })
  })

  describe('translateX property', () => {
    it('renders with pixel translateX transform style', () => {
      const testId = faker.string.uuid()
      const value = faker.number.int({ min: 1, max: 200 })
      render(
        <Transition
          testId={testId}
          translateX={new Dimension(value, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `translateX(${value}px)`,
      )
    })

    it('renders with percentage translateX transform style', () => {
      const testId = faker.string.uuid()
      const value = faker.number.int({ min: 1, max: 100 })
      render(
        <Transition
          testId={testId}
          translateX={new Dimension(value, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `translateX(${value}%)`,
      )
    })
  })

  describe('translateY property', () => {
    it('renders with pixel translateY transform style', () => {
      const testId = faker.string.uuid()
      const value = faker.number.int({ min: 1, max: 200 })
      render(
        <Transition
          testId={testId}
          translateY={new Dimension(value, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `translateY(${value}px)`,
      )
    })

    it('renders with percentage translateY transform style', () => {
      const testId = faker.string.uuid()
      const value = faker.number.int({ min: 1, max: 100 })
      render(
        <Transition
          testId={testId}
          translateY={new Dimension(value, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transform',
        `translateY(${value}%)`,
      )
    })
  })

  describe('duration property', () => {
    it('renders with default medium duration transition style', () => {
      const testId = faker.string.uuid()
      render(<Transition testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyleRule(
        'transition',
        'opacity 175ms ease,transform 175ms ease',
      )
    })

    it('renders with small duration transition style', () => {
      const testId = faker.string.uuid()
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
      const testId = faker.string.uuid()
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
      const testId = faker.string.uuid()
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
