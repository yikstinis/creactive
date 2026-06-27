import { COLOR_TRANSPARENT } from '@/helpers'
import { faker } from '@faker-js/faker'
import { act, fireEvent, render, screen } from '@testing-library/react-native'
import { View } from '.'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

describe('@/components/atoms/view', () => {
  describe('top property', () => {
    it('renders with default top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        top: expect.anything(),
      })
    })
  })

  describe('left property', () => {
    it('renders with default left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        left: expect.anything(),
      })
    })
  })

  describe('right property', () => {
    it('renders with default right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        right: expect.anything(),
      })
    })
  })

  describe('bottom property', () => {
    it('renders with default bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        bottom: expect.anything(),
      })
    })
  })

  describe('opacity property', () => {
    it('renders with default opacity style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        opacity: expect.anything(),
      })
    })

    it('renders with provided fraction opacity style', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <View
          testId={testId}
          opacity={fraction}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        opacity: fraction.toValue(),
      })
    })
  })

  describe('scale property', () => {
    it('renders with default scale 1 in transform', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        transform: [{ scale: 1 }, { translateX: 0 }, { translateY: 0 }],
      })
    })

    it('renders with provided fraction scale', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <View
          testId={testId}
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
    it('renders with provided pixel translateX', () => {
      const testId = randomTestId()
      const dimension = randomPixelDimension()
      render(
        <View
          testId={testId}
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
    it('renders with provided pixel translateY', () => {
      const testId = randomTestId()
      const dimension = randomPixelDimension()
      render(
        <View
          testId={testId}
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
    it('renders with default flex grow style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        flexGrow: expect.anything(),
      })
    })
  })

  describe('flex shrink property', () => {
    it('renders with default flex shrink style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        flexShrink: expect.anything(),
      })
    })
  })

  describe('flex basis property', () => {
    it('renders with default flex basis style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        flexBasis: expect.anything(),
      })
    })
  })

  describe('align self property', () => {
    it('renders with default align self style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        alignSelf: expect.anything(),
      })
    })
  })

  describe('align content property', () => {
    it('renders with default align content style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        alignContent: expect.anything(),
      })
    })
  })

  describe('gap property', () => {
    it('renders with default gap style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        gap: expect.anything(),
      })
    })
  })

  describe('margin top property', () => {
    it('renders with default margin top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        marginTop: expect.anything(),
      })
    })
  })

  describe('padding top property', () => {
    it('renders with default padding top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        paddingTop: expect.anything(),
      })
    })
  })

  describe('margin left property', () => {
    it('renders with default margin left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        marginLeft: expect.anything(),
      })
    })
  })

  describe('padding left property', () => {
    it('renders with default padding left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        paddingLeft: expect.anything(),
      })
    })
  })

  describe('margin right property', () => {
    it('renders with default margin right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        marginRight: expect.anything(),
      })
    })
  })

  describe('padding right property', () => {
    it('renders with default padding right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        paddingRight: expect.anything(),
      })
    })
  })

  describe('margin bottom property', () => {
    it('renders with default margin bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        marginBottom: expect.anything(),
      })
    })
  })

  describe('padding bottom property', () => {
    it('renders with default padding bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        paddingBottom: expect.anything(),
      })
    })
  })

  describe('min width property', () => {
    it('renders with default min width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        minWidth: expect.anything(),
      })
    })
  })

  describe('width property', () => {
    it('renders with default width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        width: expect.anything(),
      })
    })
  })

  describe('max width property', () => {
    it('renders with default max width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        maxWidth: expect.anything(),
      })
    })
  })

  describe('min height property', () => {
    it('renders with default min height style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        minHeight: expect.anything(),
      })
    })
  })

  describe('height property', () => {
    it('renders with default height style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        height: expect.anything(),
      })
    })
  })

  describe('max height property', () => {
    it('renders with default max height style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        maxHeight: expect.anything(),
      })
    })
  })

  describe('box shadow property', () => {
    it('renders with default box shadow style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        boxShadow: expect.anything(),
      })
    })
  })

  describe('border color property', () => {
    it('renders with default border color style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderColor: expect.anything(),
      })
    })
  })

  describe('border width property', () => {
    it('renders with default border width style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderWidth: expect.anything(),
      })
    })
  })

  describe('border width top property', () => {
    it('renders with default border width top style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderTopWidth: expect.anything(),
      })
    })
  })

  describe('border width left property', () => {
    it('renders with default border width left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderLeftWidth: expect.anything(),
      })
    })
  })

  describe('border width right property', () => {
    it('renders with default border width right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderRightWidth: expect.anything(),
      })
    })
  })

  describe('border width bottom property', () => {
    it('renders with default border width bottom style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderBottomWidth: expect.anything(),
      })
    })
  })

  describe('border radius property', () => {
    it('renders with default border radius style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderRadius: expect.anything(),
      })
    })
  })

  describe('border radius top left property', () => {
    it('renders with default border radius top left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderTopLeftRadius: expect.anything(),
      })
    })
  })

  describe('border radius top right property', () => {
    it('renders with default border radius top right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderTopRightRadius: expect.anything(),
      })
    })
  })

  describe('border radius bottom left property', () => {
    it('renders with default border radius bottom left style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderBottomLeftRadius: expect.anything(),
      })
    })
  })

  describe('border radius bottom right property', () => {
    it('renders with default border radius bottom right style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        borderBottomRightRadius: expect.anything(),
      })
    })
  })

  describe('background color property', () => {
    it('renders with default background color style', () => {
      const testId = randomTestId()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).not.toHaveStyle({
        backgroundColor: expect.anything(),
      })
    })

    it('renders with transparent background color style', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          backgroundColor={COLOR_TRANSPARENT}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'transparent',
      })
    })

    it('renders with custom rgb background color style', () => {
      const testId = randomTestId()
      const backgroundColor = randomRgb()
      render(
        <View
          testId={testId}
          backgroundColor={backgroundColor}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({ backgroundColor: backgroundColor.toValue() })
    })
  })

  describe('layout callback property', () => {
    it('calls provided callback when layout event fired', () => {
      const testId = randomTestId()
      const handleLayout = jest.fn()
      const { getByTestId } = render(
        <View
          testId={testId}
          onLayout={handleLayout}
        />,
      )
      const width = faker.number.float({
        min: 0,
      })
      const height = faker.number.float({
        min: 0,
      })
      act(() =>
        fireEvent(getByTestId(testId), 'onLayout', {
          nativeEvent: {
            layout: {
              width,
              height,
            },
          },
        }),
      )
      expect(handleLayout).toHaveBeenCalledWith({
        width,
        height,
      })
    })

    it('calls provided callback with new dimensions when layout event fired again', () => {
      const testId = randomTestId()
      const handleLayout = jest.fn()
      const { getByTestId } = render(
        <View
          testId={testId}
          onLayout={handleLayout}
        />,
      )
      act(() =>
        fireEvent(getByTestId(testId), 'onLayout', {
          nativeEvent: {
            layout: {
              width: faker.number.float({ min: 0 }),
              height: faker.number.float({ min: 0 }),
            },
          },
        }),
      )
      const width = faker.number.float({ min: 0 })
      const height = faker.number.float({ min: 0 })
      act(() =>
        fireEvent(getByTestId(testId), 'onLayout', {
          nativeEvent: {
            layout: {
              width,
              height,
            },
          },
        }),
      )
      expect(handleLayout).toHaveBeenLastCalledWith({ width, height })
    })

    it('does not call provided callback when not provided', () => {
      const testId = randomTestId()
      const { getByTestId } = render(<View testId={testId} />)
      expect(() =>
        act(() =>
          fireEvent(getByTestId(testId), 'onLayout', {
            nativeEvent: {
              layout: {
                width: faker.number.float({ min: 0 }),
                height: faker.number.float({ min: 0 }),
              },
            },
          }),
        ),
      ).not.toThrow()
    })
  })

  describe('opacityTransitionDuration property', () => {
    it('renders with default opacity 1', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          opacityTransitionDuration={View.TransitionDuration.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({ opacity: 1 })
    })

    it('renders with provided fraction opacity', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <View
          testId={testId}
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
    it('renders with default transform', () => {
      const testId = randomTestId()
      render(
        <View
          testId={testId}
          transformTransitionDuration={View.TransitionDuration.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        transform: [{ scale: 1 }, { translateX: 0 }, { translateY: 0 }],
      })
    })

    it('renders with provided fraction scale in transform', () => {
      const testId = randomTestId()
      const fraction = randomFraction()
      render(
        <View
          testId={testId}
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

    it('renders with provided pixel translateX in transform', () => {
      const testId = randomTestId()
      const dimension = randomPixelDimension()
      render(
        <View
          testId={testId}
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

    it('renders with provided pixel translateY in transform', () => {
      const testId = randomTestId()
      const dimension = randomPixelDimension()
      render(
        <View
          testId={testId}
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

  describe('fill absolute component', () => {
    it('renders with absolute position', () => {
      const testId = randomTestId()
      render(<View.Fill.Absolute testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ position: 'absolute' })
    })

    it('renders with zero top', () => {
      const testId = randomTestId()
      render(<View.Fill.Absolute testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ top: 0 })
    })

    it('renders with zero left', () => {
      const testId = randomTestId()
      render(<View.Fill.Absolute testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ left: 0 })
    })

    it('renders with zero right', () => {
      const testId = randomTestId()
      render(<View.Fill.Absolute testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ right: 0 })
    })

    it('renders with zero bottom', () => {
      const testId = randomTestId()
      render(<View.Fill.Absolute testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ bottom: 0 })
    })
  })

  describe('fill flex component', () => {
    it('renders with flex grow 1', () => {
      const testId = randomTestId()
      render(<View.Fill.Flex testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({ flexGrow: 1 })
    })
  })
})
