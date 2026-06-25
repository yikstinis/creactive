import { View } from '@/components/atoms/view'
import { render, screen } from '@testing-library/react-native'
import { Gradient } from '..'

describe('@/components/molecules/gradient', () => {
  describe('linear gradient component', () => {
    it('renders wrapper view with two children', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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

    it('renders full size rectangle filled with gradient', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
          stops={[
            { offset: randomFraction(), color: randomRgb() },
            { offset: randomFraction(), color: randomRgb() },
          ]}
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
            stops={[
              { offset: randomFraction(), color: randomRgb() },
              { offset: randomFraction(), color: randomRgb() },
            ]}
          />

          <Gradient.Linear
            testId={testIdSecond}
            direction={Gradient.Linear.Direction.BOTTOM}
            stops={[
              { offset: randomFraction(), color: randomRgb() },
              { offset: randomFraction(), color: randomRgb() },
            ]}
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
  })
})
