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
      expect(screen.getByTestId(testId)).toHaveStyle({
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
      expect(svgChild.tagName).toEqual('svg')
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
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const radialGradientChild = defsChild.children[0]
      expect(radialGradientChild.tagName).toEqual('radialGradient')
      expect(radialGradientChild.getAttribute('cx')).toEqual('0.5')
      expect(radialGradientChild.getAttribute('cy')).toEqual('0.5')
      expect(radialGradientChild.getAttribute('r')).toEqual('50%')
      expect(radialGradientChild.getAttribute('fx')).toEqual('0.5')
      expect(radialGradientChild.getAttribute('fy')).toEqual('0.5')
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
      const defsChild = svgChild.children[0]
      const radialGradientChild = defsChild.children[0]
      expect(radialGradientChild.tagName).toEqual('radialGradient')
      expect(radialGradientChild.getAttribute('cx')).toEqual(
        cx.toValue().toString(),
      )
      expect(radialGradientChild.getAttribute('fx')).toEqual(
        cx.toValue().toString(),
      )
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
      const defsChild = svgChild.children[0]
      const radialGradientChild = defsChild.children[0]
      expect(radialGradientChild.tagName).toEqual('radialGradient')
      expect(radialGradientChild.getAttribute('cy')).toEqual(
        cy.toValue().toString(),
      )
      expect(radialGradientChild.getAttribute('fy')).toEqual(
        cy.toValue().toString(),
      )
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
      expect(svgChild.children).toHaveLength(2)
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const radialGradientChild = defsChild.children[0]
      expect(radialGradientChild.tagName).toEqual('radialGradient')
      const gradientId = radialGradientChild.getAttribute('id')
      expect(gradientId).toBeTruthy()
      const rectChild = svgChild.children[1]
      expect(rectChild.tagName).toEqual('rect')
      expect(rectChild.getAttribute('x')).toEqual('0')
      expect(rectChild.getAttribute('y')).toEqual('0')
      expect(rectChild.getAttribute('width')).toEqual('100%')
      expect(rectChild.getAttribute('height')).toEqual('100%')
      expect(rectChild.getAttribute('fill')).toEqual(`url(#${gradientId})`)
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
      const firstRadialGradientChild = firstSvgChild.children[0].children[0]
      const secondSvgChild = screen.getByTestId(testIdSecond).children[0]
      const secondRadialGradientChild = secondSvgChild.children[0].children[0]
      expect(firstRadialGradientChild.getAttribute('id')).not.toEqual(
        secondRadialGradientChild.getAttribute('id'),
      )
    })
  })
})
