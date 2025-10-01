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
      expect(screen.getByTestId(testId)).toHaveStyle({
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
      expect(svgChild.tagName).toEqual('svg')
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
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('0')
      expect(linearGradientChild.getAttribute('y1')).toEqual('1')
      expect(linearGradientChild.getAttribute('x2')).toEqual('0')
      expect(linearGradientChild.getAttribute('y2')).toEqual('0')
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
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('1')
      expect(linearGradientChild.getAttribute('y1')).toEqual('0')
      expect(linearGradientChild.getAttribute('x2')).toEqual('0')
      expect(linearGradientChild.getAttribute('y2')).toEqual('0')
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
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('0')
      expect(linearGradientChild.getAttribute('y1')).toEqual('0')
      expect(linearGradientChild.getAttribute('x2')).toEqual('1')
      expect(linearGradientChild.getAttribute('y2')).toEqual('0')
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
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('0')
      expect(linearGradientChild.getAttribute('y1')).toEqual('0')
      expect(linearGradientChild.getAttribute('x2')).toEqual('0')
      expect(linearGradientChild.getAttribute('y2')).toEqual('1')
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
      expect(svgChild.children).toHaveLength(2)
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('id')).toEqual('gradient-linear')
      const rectChild = svgChild.children[1]
      expect(rectChild.tagName).toEqual('rect')
      expect(rectChild.getAttribute('x')).toEqual('0')
      expect(rectChild.getAttribute('y')).toEqual('0')
      expect(rectChild.getAttribute('width')).toEqual('100%')
      expect(rectChild.getAttribute('height')).toEqual('100%')
      expect(rectChild.getAttribute('fill')).toEqual('url(#gradient-linear)')
    })
  })
})
