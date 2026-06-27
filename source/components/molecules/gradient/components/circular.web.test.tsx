import { View } from '@/components/atoms/view'
import { render, screen } from '@testing-library/react-native'
import { Gradient } from '..'

const defaultStops = () => [
  { offset: randomFraction(), color: randomRgb() },
  { offset: randomFraction(), color: randomRgb() },
]

describe('@/components/molecules/gradient', () => {
  describe('circular gradient component', () => {
    it('renders wrapper view with two children', () => {
      const testId = randomTestId()
      render(
        <Gradient.Circular
          testId={testId}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      expect(screen.getByTestId(testId).children).toHaveLength(2)
    })

    it('renders svg inside absolute fill container', () => {
      const testId = randomTestId()
      render(
        <Gradient.Circular
          testId={testId}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const absoluteContainer = screen.getByTestId(testId).children[0]
      const svgChild = absoluteContainer.children[0]
      expect(svgChild.tagName).toEqual('svg')
    })

    it('renders radial gradient with center coordinates by default', () => {
      const testId = randomTestId()
      render(
        <Gradient.Circular
          testId={testId}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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
        <Gradient.Circular
          testId={testId}
          cx={cx}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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
        <Gradient.Circular
          testId={testId}
          cy={cy}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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
        <Gradient.Circular
          testId={testId}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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

    it('renders children inside flex wrapper, not absolute fill', () => {
      const testId = randomTestId()
      const childTestId = randomTestId()
      render(
        <Gradient.Circular
          testId={testId}
          stops={defaultStops()}
        >
          <View testId={childTestId} />
        </Gradient.Circular>,
      )
      const outerView = screen.getByTestId(testId)
      const childView = screen.getByTestId(childTestId)
      expect(outerView.children[1].contains(childView)).toBe(true)
      expect(outerView.children[0].contains(childView)).toBe(false)
    })

    it('renders different gradient ids for different instances', () => {
      const testIdFirst = randomTestId()
      const testIdSecond = randomTestId()
      render(
        <>
          <Gradient.Circular
            testId={testIdFirst}
            stops={defaultStops()}
          />

          <Gradient.Circular
            testId={testIdSecond}
            stops={defaultStops()}
          />
        </>,
      )
      const firstRadialGradientChild =
        screen
          .getByTestId(testIdFirst)
          .children[0].children[0].children[0].children[0]
      const secondRadialGradientChild =
        screen
          .getByTestId(testIdSecond)
          .children[0].children[0].children[0].children[0]
      expect(firstRadialGradientChild.getAttribute('id')).not.toEqual(
        secondRadialGradientChild.getAttribute('id'),
      )
    })

    describe('fill absolute component', () => {
      it('renders with absolute position', () => {
        const testId = randomTestId()
        render(
          <Gradient.Circular.Fill.Absolute
            testId={testId}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ position: 'absolute' })
      })

      it('renders with zero top', () => {
        const testId = randomTestId()
        render(
          <Gradient.Circular.Fill.Absolute
            testId={testId}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ top: 0 })
      })

      it('renders with zero left', () => {
        const testId = randomTestId()
        render(
          <Gradient.Circular.Fill.Absolute
            testId={testId}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ left: 0 })
      })

      it('renders with zero right', () => {
        const testId = randomTestId()
        render(
          <Gradient.Circular.Fill.Absolute
            testId={testId}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ right: 0 })
      })

      it('renders with zero bottom', () => {
        const testId = randomTestId()
        render(
          <Gradient.Circular.Fill.Absolute
            testId={testId}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ bottom: 0 })
      })
    })

    describe('fill flex component', () => {
      it('renders with flex grow 1', () => {
        const testId = randomTestId()
        render(
          <Gradient.Circular.Fill.Flex
            testId={testId}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ flexGrow: 1 })
      })
    })
  })
})
