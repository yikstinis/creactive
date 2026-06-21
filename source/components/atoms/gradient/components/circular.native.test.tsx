import { render, screen } from '@testing-library/react-native'
import { GradientCircular } from './circular'
import { GradientStop } from './stop'

describe('@/components/atoms/gradient', () => {
  describe('circular gradient component', () => {
    it('renders wrapper view with absolute fill styles', () => {
      const testId = randomTestId()
      render(
        <GradientCircular testId={testId}>
          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />

          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />
        </GradientCircular>,
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
      const testId = randomTestId()
      render(
        <GradientCircular testId={testId}>
          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />

          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />
        </GradientCircular>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      expect(screen.getByTestId(testId).children).toHaveLength(1)
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.type.displayName).toEqual('Svg')
    })

    it('renders radial gradient with center coordinates by default', () => {
      const testId = randomTestId()
      render(
        <GradientCircular testId={testId}>
          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />

          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />
        </GradientCircular>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const radialGradientChild = defsChild.props.children
      expect(radialGradientChild.type.displayName).toEqual('RadialGradient')
      expect(radialGradientChild.props.cx).toEqual(0.5)
      expect(radialGradientChild.props.cy).toEqual(0.5)
      expect(radialGradientChild.props.r).toEqual('50%')
      expect(radialGradientChild.props.fx).toEqual(0.5)
      expect(radialGradientChild.props.fy).toEqual(0.5)
    })

    it('renders radial gradient with provided cx and matching fx', () => {
      const testId = randomTestId()
      const cx = randomFraction()
      render(
        <GradientCircular
          testId={testId}
          cx={cx}
        >
          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />

          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />
        </GradientCircular>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      const defsChild = svgChild.props.children[0]
      const radialGradientChild = defsChild.props.children
      expect(radialGradientChild.type.displayName).toEqual('RadialGradient')
      expect(radialGradientChild.props.cx).toEqual(cx.toValue())
      expect(radialGradientChild.props.fx).toEqual(cx.toValue())
    })

    it('renders radial gradient with provided cy and matching fy', () => {
      const testId = randomTestId()
      const cy = randomFraction()
      render(
        <GradientCircular
          testId={testId}
          cy={cy}
        >
          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />

          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />
        </GradientCircular>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      const defsChild = svgChild.props.children[0]
      const radialGradientChild = defsChild.props.children
      expect(radialGradientChild.type.displayName).toEqual('RadialGradient')
      expect(radialGradientChild.props.cy).toEqual(cy.toValue())
      expect(radialGradientChild.props.fy).toEqual(cy.toValue())
    })

    it('renders full size rectangle filled with gradient', () => {
      const testId = randomTestId()
      render(
        <GradientCircular testId={testId}>
          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />

          <GradientStop
            offset={randomFraction()}
            color={randomRgb()}
          />
        </GradientCircular>,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0]
      expect(svgChild.props.children).toHaveLength(2)
      const defsChild = svgChild.props.children[0]
      expect(defsChild.type.displayName).toEqual('Defs')
      const radialGradientChild = defsChild.props.children
      expect(radialGradientChild.type.displayName).toEqual('RadialGradient')
      const gradientId = radialGradientChild.props.id
      expect(gradientId).toBeTruthy()
      const rectChild = svgChild.props.children[1]
      expect(rectChild.type.displayName).toEqual('Rect')
      expect(rectChild.props.x).toEqual('0')
      expect(rectChild.props.y).toEqual('0')
      expect(rectChild.props.width).toEqual('100%')
      expect(rectChild.props.height).toEqual('100%')
      expect(rectChild.props.fill).toEqual(`url(#${gradientId})`)
    })

    it('renders different gradient ids for different instances', () => {
      const testIdFirst = randomTestId()
      const testIdSecond = randomTestId()
      render(
        <>
          <GradientCircular testId={testIdFirst}>
            <GradientStop
              offset={randomFraction()}
              color={randomRgb()}
            />

            <GradientStop
              offset={randomFraction()}
              color={randomRgb()}
            />
          </GradientCircular>

          <GradientCircular testId={testIdSecond}>
            <GradientStop
              offset={randomFraction()}
              color={randomRgb()}
            />

            <GradientStop
              offset={randomFraction()}
              color={randomRgb()}
            />
          </GradientCircular>
        </>,
      )
      const firstSvgChild = screen.getByTestId(testIdFirst).children[0]
      const firstRadialGradientChild =
        firstSvgChild.props.children[0].props.children
      const secondSvgChild = screen.getByTestId(testIdSecond).children[0]
      const secondRadialGradientChild =
        secondSvgChild.props.children[0].props.children
      expect(firstRadialGradientChild.props.id).not.toEqual(
        secondRadialGradientChild.props.id,
      )
    })
  })
})
