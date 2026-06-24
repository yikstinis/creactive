import { View } from '@/components/atoms/view'
import { faker } from '@faker-js/faker'
import { act, fireEvent, render, screen } from '@testing-library/react-native'
import { LinearGradient, Rect, Svg } from 'react-native-svg'
import { Gradient } from '..'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

const defaultConfig = () => [
  { offset: randomFraction(), color: randomRgb() },
  { offset: randomFraction(), color: randomRgb() },
]

const fillFlexView = (testId: string) =>
  screen.getByTestId(testId).children[1].children[0].children[0].children[0]

describe('@/components/molecules/gradient', () => {
  describe('linear gradient component', () => {
    it('renders wrapper view with two children', () => {
      const testId = randomTestId()
      render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          config={defaultConfig()}
        />,
      )
      expect(screen.getByTestId(testId)).toBeTruthy()
      expect(screen.getByTestId(testId).children).toHaveLength(2)
    })

    it('renders svg element', () => {
      const testId = randomTestId()
      const { UNSAFE_getByType } = render(
        <Gradient.Linear
          testId={testId}
          direction={Gradient.Linear.Direction.BOTTOM}
          config={defaultConfig()}
        />,
      )
      expect(UNSAFE_getByType(Svg)).toBeTruthy()
    })

    it('renders linear gradient with top coordinates', () => {
      const { UNSAFE_getByType } = render(
        <Gradient.Linear
          direction={Gradient.Linear.Direction.TOP}
          config={defaultConfig()}
        />,
      )
      const linearGradient = UNSAFE_getByType(LinearGradient)
      expect(linearGradient.props.x1).toEqual(0)
      expect(linearGradient.props.y1).toEqual(1)
      expect(linearGradient.props.x2).toEqual(0)
      expect(linearGradient.props.y2).toEqual(0)
    })

    it('renders linear gradient with left coordinates', () => {
      const { UNSAFE_getByType } = render(
        <Gradient.Linear
          direction={Gradient.Linear.Direction.LEFT}
          config={defaultConfig()}
        />,
      )
      const linearGradient = UNSAFE_getByType(LinearGradient)
      expect(linearGradient.props.x1).toEqual(1)
      expect(linearGradient.props.y1).toEqual(0)
      expect(linearGradient.props.x2).toEqual(0)
      expect(linearGradient.props.y2).toEqual(0)
    })

    it('renders linear gradient with right coordinates', () => {
      const { UNSAFE_getByType } = render(
        <Gradient.Linear
          direction={Gradient.Linear.Direction.RIGHT}
          config={defaultConfig()}
        />,
      )
      const linearGradient = UNSAFE_getByType(LinearGradient)
      expect(linearGradient.props.x1).toEqual(0)
      expect(linearGradient.props.y1).toEqual(0)
      expect(linearGradient.props.x2).toEqual(1)
      expect(linearGradient.props.y2).toEqual(0)
    })

    it('renders linear gradient with bottom coordinates', () => {
      const { UNSAFE_getByType } = render(
        <Gradient.Linear
          direction={Gradient.Linear.Direction.BOTTOM}
          config={defaultConfig()}
        />,
      )
      const linearGradient = UNSAFE_getByType(LinearGradient)
      expect(linearGradient.props.x1).toEqual(0)
      expect(linearGradient.props.y1).toEqual(0)
      expect(linearGradient.props.x2).toEqual(0)
      expect(linearGradient.props.y2).toEqual(1)
    })

    it('renders full size rectangle filled with gradient', () => {
      const { UNSAFE_getByType } = render(
        <Gradient.Linear
          direction={Gradient.Linear.Direction.BOTTOM}
          config={defaultConfig()}
        />,
      )
      const linearGradient = UNSAFE_getByType(LinearGradient)
      const gradientId = linearGradient.props.id
      expect(gradientId).toBeTruthy()
      const rect = UNSAFE_getByType(Rect)
      expect(rect.props.x).toEqual('0')
      expect(rect.props.y).toEqual('0')
      expect(rect.props.width).toEqual('100%')
      expect(rect.props.height).toEqual('100%')
      expect(rect.props.fill).toEqual(`url(#${gradientId})`)
    })

    it('renders different gradient ids for different instances', () => {
      const { UNSAFE_getAllByType } = render(
        <>
          <Gradient.Linear
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />
          <Gradient.Linear
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />
        </>,
      )
      const [firstGradient, secondGradient] =
        UNSAFE_getAllByType(LinearGradient)
      expect(firstGradient.props.id).not.toEqual(secondGradient.props.id)
    })

    describe('top property', () => {
      it('renders with default top style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          top: expect.anything(),
        })
      })

      it('passes top to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            top={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          top: dimension.toValue(),
        })
      })
    })

    describe('left property', () => {
      it('renders with default left style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          left: expect.anything(),
        })
      })

      it('passes left to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            left={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          left: dimension.toValue(),
        })
      })
    })

    describe('right property', () => {
      it('renders with default right style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          right: expect.anything(),
        })
      })

      it('passes right to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            right={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          right: dimension.toValue(),
        })
      })
    })

    describe('bottom property', () => {
      it('renders with default bottom style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          bottom: expect.anything(),
        })
      })

      it('passes bottom to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            bottom={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          bottom: dimension.toValue(),
        })
      })
    })

    describe('opacity property', () => {
      it('renders with default opacity style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          opacity: expect.anything(),
        })
      })

      it('passes opacity to outer view', () => {
        const testId = randomTestId()
        const opacity = randomFraction()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            opacity={opacity}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          opacity: opacity.toValue(),
        })
      })
    })

    describe('scale property', () => {
      it('renders with default scale 1 in transform on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [{ scale: 1 }, { translateX: 0 }, { translateY: 0 }],
        })
      })

      it('passes scale to outer view', () => {
        const testId = randomTestId()
        const fraction = randomFraction()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            scale={fraction}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [
            { scale: fraction.toValue() },
            { translateX: 0 },
            { translateY: 0 },
          ],
        })
      })
    })

    describe('translateX property', () => {
      it('passes translateX to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            translateX={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [
            { scale: 1 },
            { translateX: dimension.toValue() as number },
            { translateY: 0 },
          ],
        })
      })
    })

    describe('translateY property', () => {
      it('passes translateY to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            translateY={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [
            { scale: 1 },
            { translateX: 0 },
            { translateY: dimension.toValue() as number },
          ],
        })
      })
    })

    describe('flex grow property', () => {
      it('renders with default flex grow style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          flexGrow: expect.anything(),
        })
      })

      it('passes flexGrow to outer view', () => {
        const testId = randomTestId()
        const flexGrow = randomFraction()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            flexGrow={flexGrow}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          flexGrow: flexGrow.toValue(),
        })
      })
    })

    describe('flex shrink property', () => {
      it('renders with default flex shrink style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          flexShrink: expect.anything(),
        })
      })

      it('passes flexShrink to outer view', () => {
        const testId = randomTestId()
        const flexShrink = randomFraction()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            flexShrink={flexShrink}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          flexShrink: flexShrink.toValue(),
        })
      })
    })

    describe('flex basis property', () => {
      it('renders with default flex basis style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          flexBasis: expect.anything(),
        })
      })
    })

    describe('align self property', () => {
      it('renders with default align self style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          alignSelf: expect.anything(),
        })
      })

      it('passes alignSelf to outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            alignSelf={View.AlignSelf.CENTER}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ alignSelf: 'center' })
      })
    })

    describe('margin top property', () => {
      it('renders with default margin top style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          marginTop: expect.anything(),
        })
      })
    })

    describe('margin left property', () => {
      it('renders with default margin left style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          marginLeft: expect.anything(),
        })
      })
    })

    describe('margin right property', () => {
      it('renders with default margin right style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          marginRight: expect.anything(),
        })
      })
    })

    describe('margin bottom property', () => {
      it('renders with default margin bottom style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          marginBottom: expect.anything(),
        })
      })
    })

    describe('min width property', () => {
      it('renders with default min width style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          minWidth: expect.anything(),
        })
      })

      it('passes minWidth to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            minWidth={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          minWidth: dimension.toValue(),
        })
      })
    })

    describe('width property', () => {
      it('renders with default width style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          width: expect.anything(),
        })
      })

      it('passes width to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            width={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          width: dimension.toValue(),
        })
      })
    })

    describe('max width property', () => {
      it('renders with default max width style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          maxWidth: expect.anything(),
        })
      })

      it('passes maxWidth to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            maxWidth={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          maxWidth: dimension.toValue(),
        })
      })
    })

    describe('min height property', () => {
      it('renders with default min height style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          minHeight: expect.anything(),
        })
      })

      it('passes minHeight to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            minHeight={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          minHeight: dimension.toValue(),
        })
      })
    })

    describe('height property', () => {
      it('renders with default height style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          height: expect.anything(),
        })
      })

      it('passes height to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            height={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          height: dimension.toValue(),
        })
      })
    })

    describe('max height property', () => {
      it('renders with default max height style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          maxHeight: expect.anything(),
        })
      })

      it('passes maxHeight to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            maxHeight={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          maxHeight: dimension.toValue(),
        })
      })
    })

    describe('box shadow property', () => {
      it('renders with default box shadow style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          boxShadow: expect.anything(),
        })
      })
    })

    describe('border color property', () => {
      it('renders with default border color style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderColor: expect.anything(),
        })
      })
    })

    describe('border width property', () => {
      it('renders with default border width style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderWidth: expect.anything(),
        })
      })
    })

    describe('border width top property', () => {
      it('renders with default border width top style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderTopWidth: expect.anything(),
        })
      })
    })

    describe('border width left property', () => {
      it('renders with default border width left style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderLeftWidth: expect.anything(),
        })
      })
    })

    describe('border width right property', () => {
      it('renders with default border width right style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderRightWidth: expect.anything(),
        })
      })
    })

    describe('border width bottom property', () => {
      it('renders with default border width bottom style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderBottomWidth: expect.anything(),
        })
      })
    })

    describe('border radius property', () => {
      it('renders with default border radius style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderRadius: expect.anything(),
        })
      })
    })

    describe('border radius top left property', () => {
      it('renders with default border radius top left style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderTopLeftRadius: expect.anything(),
        })
      })
    })

    describe('border radius top right property', () => {
      it('renders with default border radius top right style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderTopRightRadius: expect.anything(),
        })
      })
    })

    describe('border radius bottom left property', () => {
      it('renders with default border radius bottom left style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderBottomLeftRadius: expect.anything(),
        })
      })
    })

    describe('border radius bottom right property', () => {
      it('renders with default border radius bottom right style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          borderBottomRightRadius: expect.anything(),
        })
      })
    })

    describe('background color property', () => {
      it('renders with default background color style on outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).not.toHaveStyle({
          backgroundColor: expect.anything(),
        })
      })

      it('passes rgb background color to outer view', () => {
        const testId = randomTestId()
        const backgroundColor = randomRgb()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            backgroundColor={backgroundColor}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ backgroundColor })
      })

      it('passes rgba background color to outer view', () => {
        const testId = randomTestId()
        const backgroundColor = randomRgba()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            backgroundColor={backgroundColor}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ backgroundColor })
      })
    })

    describe('layout callback property', () => {
      it('passes onLayout callback to outer view', () => {
        const testId = randomTestId()
        const handleLayout = jest.fn()
        const { getByTestId } = render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            onLayout={handleLayout}
          />,
        )
        const width = faker.number.float({ min: 0 })
        const height = faker.number.float({ min: 0 })
        act(() =>
          fireEvent(getByTestId(testId), 'onLayout', {
            nativeEvent: { layout: { width, height } },
          }),
        )
        expect(handleLayout).toHaveBeenCalledWith({ width, height })
      })
    })

    describe('opacityTransitionDuration property', () => {
      it('passes opacity transition with default opacity 1 to outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            opacityTransitionDuration={View.TransitionDuration.MD}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ opacity: 1 })
      })

      it('passes opacity transition with provided fraction opacity to outer view', () => {
        const testId = randomTestId()
        const fraction = randomFraction()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            opacityTransitionDuration={View.TransitionDuration.MD}
            opacity={fraction}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          opacity: fraction.toValue(),
        })
      })
    })

    describe('transformTransitionDuration property', () => {
      it('passes transform transition with default transform to outer view', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            transformTransitionDuration={View.TransitionDuration.MD}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [{ scale: 1 }, { translateX: 0 }, { translateY: 0 }],
        })
      })

      it('passes transform transition with provided fraction scale to outer view', () => {
        const testId = randomTestId()
        const fraction = randomFraction()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            transformTransitionDuration={View.TransitionDuration.MD}
            scale={fraction}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [
            { scale: fraction.toValue() },
            { translateX: 0 },
            { translateY: 0 },
          ],
        })
      })

      it('passes transform transition with provided pixel translateX to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            transformTransitionDuration={View.TransitionDuration.MD}
            translateX={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [
            { scale: 1 },
            { translateX: dimension.toValue() as number },
            { translateY: 0 },
          ],
        })
      })

      it('passes transform transition with provided pixel translateY to outer view', () => {
        const testId = randomTestId()
        const dimension = randomPixelDimension()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            transformTransitionDuration={View.TransitionDuration.MD}
            translateY={dimension}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({
          transform: [
            { scale: 1 },
            { translateX: 0 },
            { translateY: dimension.toValue() as number },
          ],
        })
      })
    })

    describe('flex direction property', () => {
      it('passes flexDirection to children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            flexDirection={View.FlexDirection.ROW}
          />,
        )
        expect(fillFlexView(testId)).toHaveStyle({ flexDirection: 'row' })
      })
    })

    describe('justify content property', () => {
      it('passes justifyContent to children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            justifyContent={View.JustifyContent.CENTER}
          />,
        )
        expect(fillFlexView(testId)).toHaveStyle({ justifyContent: 'center' })
      })
    })

    describe('align items property', () => {
      it('passes alignItems to children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            alignItems={View.AlignItems.CENTER}
          />,
        )
        expect(fillFlexView(testId)).toHaveStyle({ alignItems: 'center' })
      })
    })

    describe('flex wrap property', () => {
      it('passes flexWrap to children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            flexWrap={View.FlexWrap.WRAP}
          />,
        )
        expect(fillFlexView(testId)).toHaveStyle({ flexWrap: 'wrap' })
      })
    })

    describe('align content property', () => {
      it('passes alignContent to children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
            alignContent={View.AlignContent.CENTER}
          />,
        )
        expect(fillFlexView(testId)).toHaveStyle({ alignContent: 'center' })
      })
    })

    describe('gap property', () => {
      it('renders with default gap style in children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(fillFlexView(testId)).not.toHaveStyle({
          gap: expect.anything(),
        })
      })
    })

    describe('padding top property', () => {
      it('renders with default padding top style in children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(fillFlexView(testId)).not.toHaveStyle({
          paddingTop: expect.anything(),
        })
      })
    })

    describe('padding left property', () => {
      it('renders with default padding left style in children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(fillFlexView(testId)).not.toHaveStyle({
          paddingLeft: expect.anything(),
        })
      })
    })

    describe('padding right property', () => {
      it('renders with default padding right style in children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(fillFlexView(testId)).not.toHaveStyle({
          paddingRight: expect.anything(),
        })
      })
    })

    describe('padding bottom property', () => {
      it('renders with default padding bottom style in children wrapper', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
          />,
        )
        expect(fillFlexView(testId)).not.toHaveStyle({
          paddingBottom: expect.anything(),
        })
      })
    })

    describe('fill absolute component', () => {
      it('renders with absolute position', () => {
        const testId = randomTestId()
        render(
          <Gradient.Linear.Fill.Absolute
            testId={testId}
            direction={Gradient.Linear.Direction.BOTTOM}
            config={defaultConfig()}
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
            config={defaultConfig()}
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
            config={defaultConfig()}
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
            config={defaultConfig()}
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
            config={defaultConfig()}
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
            config={defaultConfig()}
          />,
        )
        expect(screen.getByTestId(testId)).toHaveStyle({ flexGrow: 1 })
      })
    })
  })
})
