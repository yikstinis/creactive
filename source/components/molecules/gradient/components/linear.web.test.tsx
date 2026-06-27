import { View } from '@/components/atoms/view'
import { render, screen } from '@testing-library/react-native'
import { Gradient } from '..'

const defaultStops = () => [
  { offset: randomFraction(), color: randomRgb() },
  { offset: randomFraction(), color: randomRgb() },
]

describe('@/components/molecules/gradient', () => {
  describe('linear gradient component', () => {
    it('renders wrapper view with two children', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      expect(screen.getByTestId(testId).children).toHaveLength(2)
    })

    it('renders svg inside absolute fill container', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const absoluteContainer = screen.getByTestId(testId).children[0]
      const svgChild = absoluteContainer.children[0]
      expect(svgChild.tagName).toEqual('svg')
    })

    it('renders linear gradient with top coordinates', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.TOP}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.LEFT}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.RIGHT}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
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
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('0')
      expect(linearGradientChild.getAttribute('y1')).toEqual('0')
      expect(linearGradientChild.getAttribute('x2')).toEqual('0')
      expect(linearGradientChild.getAttribute('y2')).toEqual('1')
    })

    it('renders linear gradient with top left coordinates', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.TOP_LEFT}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('1')
      expect(linearGradientChild.getAttribute('y1')).toEqual('1')
      expect(linearGradientChild.getAttribute('x2')).toEqual('0')
      expect(linearGradientChild.getAttribute('y2')).toEqual('0')
    })

    it('renders linear gradient with top right coordinates', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.TOP_RIGHT}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('0')
      expect(linearGradientChild.getAttribute('y1')).toEqual('1')
      expect(linearGradientChild.getAttribute('x2')).toEqual('1')
      expect(linearGradientChild.getAttribute('y2')).toEqual('0')
    })

    it('renders linear gradient with bottom left coordinates', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM_LEFT}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('1')
      expect(linearGradientChild.getAttribute('y1')).toEqual('0')
      expect(linearGradientChild.getAttribute('x2')).toEqual('0')
      expect(linearGradientChild.getAttribute('y2')).toEqual('1')
    })

    it('renders linear gradient with bottom right coordinates', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM_RIGHT}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      expect(linearGradientChild.getAttribute('x1')).toEqual('0')
      expect(linearGradientChild.getAttribute('y1')).toEqual('0')
      expect(linearGradientChild.getAttribute('x2')).toEqual('1')
      expect(linearGradientChild.getAttribute('y2')).toEqual('1')
    })

    it('renders full size rectangle filled with gradient', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={defaultStops()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      const svgChild = screen.getByTestId(testId).children[0].children[0]
      expect(svgChild.children).toHaveLength(2)
      const defsChild = svgChild.children[0]
      expect(defsChild.tagName).toEqual('defs')
      const linearGradientChild = defsChild.children[0]
      expect(linearGradientChild.tagName).toEqual('linearGradient')
      const gradientId = linearGradientChild.getAttribute('id')
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
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={defaultStops()}
        >
          <View testId={childTestId} />
        </Gradient.Linear>,
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
          <Gradient.Linear
            testId={testIdFirst}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />

          <Gradient.Linear
            testId={testIdSecond}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />
        </>,
      )
      const firstLinearGradientChild =
        screen
          .getByTestId(testIdFirst)
          .children[0].children[0].children[0].children[0]
      const secondLinearGradientChild =
        screen
          .getByTestId(testIdSecond)
          .children[0].children[0].children[0].children[0]
      expect(firstLinearGradientChild.getAttribute('id')).not.toEqual(
        secondLinearGradientChild.getAttribute('id'),
      )
    })

    describe('fill absolute component', () => {
      it('renders with absolute position', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear.Fill.Absolute
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ position: 'absolute' })
      })

      it('renders with zero top', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear.Fill.Absolute
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ top: 0 })
      })

      it('renders with zero left', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear.Fill.Absolute
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ left: 0 })
      })

      it('renders with zero right', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear.Fill.Absolute
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ right: 0 })
      })

      it('renders with zero bottom', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear.Fill.Absolute
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
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
          <Gradient.Linear.Fill.Flex
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={defaultStops()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ flexGrow: 1 })
      })
    })
  })
})
