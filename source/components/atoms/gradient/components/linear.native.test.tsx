import { Fraction } from '@/helpers'
import { Color } from '@/types'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { GradientLinear } from './linear'
import { GradientStop } from './stop'

describe('@/components/atoms/gradient', () => {
  describe('linear gradient component', () => {
    it('renders wrapper view with absolute fill styles', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.BOTTOM}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      expect(screen.getByTestId(testId).props.style).toMatchObject({
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      })
    })

    it('renders wrapper view with only svg element inside', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.BOTTOM}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      expect(screen.getByTestId(testId).children).toHaveLength(1)
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.type.displayName).toEqual('Svg')
    })

    it('renders linear gradient with top coordinates', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.TOP}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const linearGradientChild = defsChild.props.children
      expect(linearGradientChild.type.displayName).toEqual('LinearGradient')
      expect(linearGradientChild.props.x1).toEqual(0)
      expect(linearGradientChild.props.y1).toEqual(1)
      expect(linearGradientChild.props.x2).toEqual(0)
      expect(linearGradientChild.props.y2).toEqual(0)
    })

    it('renders linear gradient with left coordinates', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.LEFT}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const linearGradientChild = defsChild.props.children
      expect(linearGradientChild.type.displayName).toEqual('LinearGradient')
      expect(linearGradientChild.props.x1).toEqual(1)
      expect(linearGradientChild.props.y1).toEqual(0)
      expect(linearGradientChild.props.x2).toEqual(0)
      expect(linearGradientChild.props.y2).toEqual(0)
    })

    it('renders linear gradient with right coordinates', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.RIGHT}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const linearGradientChild = defsChild.props.children
      expect(linearGradientChild.type.displayName).toEqual('LinearGradient')
      expect(linearGradientChild.props.x1).toEqual(0)
      expect(linearGradientChild.props.y1).toEqual(0)
      expect(linearGradientChild.props.x2).toEqual(1)
      expect(linearGradientChild.props.y2).toEqual(0)
    })

    it('renders linear gradient with bottom coordinates', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.BOTTOM}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const linearGradientChild = defsChild.props.children
      expect(linearGradientChild.type.displayName).toEqual('LinearGradient')
      expect(linearGradientChild.props.x1).toEqual(0)
      expect(linearGradientChild.props.y1).toEqual(0)
      expect(linearGradientChild.props.x2).toEqual(0)
      expect(linearGradientChild.props.y2).toEqual(1)
    })

    it('renders full size rectangle filled with gradient', () => {
      const testId = faker.string.uuid()
      render(
        <GradientLinear
          testId={testId}
          direction={GradientLinear.Direction.BOTTOM}
        >
          <GradientStop
            offset={new Fraction(0)}
            color={faker.color.rgb() as Color}
          />

          <GradientStop
            offset={new Fraction(1)}
            color={faker.color.rgb() as Color}
          />
        </GradientLinear>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const linearGradientChild = defsChild.props.children
      expect(linearGradientChild.type.displayName).toEqual('LinearGradient')
      expect(linearGradientChild.props.id).toEqual('gradient-linear')
      const rectChild = svgChild.props.children[1]
      expect(rectChild.type.displayName).toEqual('Rect')
      expect(rectChild.props.x).toEqual('0')
      expect(rectChild.props.y).toEqual('0')
      expect(rectChild.props.width).toEqual('100%')
      expect(rectChild.props.height).toEqual('100%')
      expect(rectChild.props.fill).toEqual('url(#gradient-linear)')
    })
  })
})
