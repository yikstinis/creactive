import { Dimension, Fraction } from '@/helpers'
import { TestPlatform } from '@/utilities'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '.'

describe('@/components/atoms/view', () => {
  describe('position property', () => {
    it('renders with default position', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        position: 'relative',
      })
    })

    it('renders with relative position', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          position={View.Position.RELATIVE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        position: 'relative',
      })
    })

    it('renders with absolute position', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          position={View.Position.ABSOLUTE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        position: 'absolute',
      })
    })
  })

  describe('top property', () => {
    it('renders with pixel top style', () => {
      const testId = faker.string.uuid()
      const top = faker.number.float()
      render(
        <View
          testId={testId}
          top={new Dimension(top, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        top: TestPlatform.toPixels(top),
      })
    })

    it('renders with percent top style', () => {
      const testId = faker.string.uuid()
      const top = faker.number.float({
        min: 0,
        max: 100,
      })
      render(
        <View
          testId={testId}
          top={new Dimension(top, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        top: `${top}%`,
      })
    })
  })

  describe('left property', () => {
    it('renders with pixel left style', () => {
      const testId = faker.string.uuid()
      const left = faker.number.float()
      render(
        <View
          testId={testId}
          left={new Dimension(left, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        left: TestPlatform.toPixels(left),
      })
    })

    it('renders with percent left style', () => {
      const testId = faker.string.uuid()
      const left = faker.number.float({
        min: 0,
        max: 100,
      })
      render(
        <View
          testId={testId}
          left={new Dimension(left, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        left: `${left}%`,
      })
    })
  })

  describe('right property', () => {
    it('renders with pixel right style', () => {
      const testId = faker.string.uuid()
      const right = faker.number.float()
      render(
        <View
          testId={testId}
          right={new Dimension(right, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        right: TestPlatform.toPixels(right),
      })
    })

    it('renders with percent right style', () => {
      const testId = faker.string.uuid()
      const right = faker.number.float({
        min: 0,
        max: 100,
      })
      render(
        <View
          testId={testId}
          right={new Dimension(right, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        right: `${right}%`,
      })
    })
  })

  describe('bottom property', () => {
    it('renders with pixel bottom style', () => {
      const testId = faker.string.uuid()
      const bottom = faker.number.float()
      render(
        <View
          testId={testId}
          bottom={new Dimension(bottom, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        bottom: TestPlatform.toPixels(bottom),
      })
    })

    it('renders with percent bottom style', () => {
      const testId = faker.string.uuid()
      const bottom = faker.number.float({
        min: 0,
        max: 100,
      })
      render(
        <View
          testId={testId}
          right={new Dimension(bottom, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        right: `${bottom}%`,
      })
    })
  })

  describe('opacity property', () => {
    it('renders with provided fraction opacity style', () => {
      const testId = faker.string.uuid()
      const opacity = faker.number.float({ min: 0, max: 1 })
      render(
        <View
          testId={testId}
          opacity={new Fraction(opacity)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        opacity,
      })
    })
  })

  describe('overflow property', () => {
    it('renders with default overflow style', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        overflow: 'visible',
      })
    })

    it('renders with visible overflow style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          overflow={View.Overflow.VISIBLE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        overflow: 'visible',
      })
    })

    it('renders with hidden overflow style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          overflow={View.Overflow.HIDDEN}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        overflow: 'hidden',
      })
    })
  })

  describe('flex grow property', () => {
    it('renders with provided fraction flex grow style', () => {
      const testId = faker.string.uuid()
      const flexGrow = faker.number.float({
        min: 0,
      })
      render(
        <View
          testId={testId}
          flexGrow={new Fraction(flexGrow)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexGrow,
      })
    })
  })

  describe('flex shrink property', () => {
    it('renders with provided fraction flex shrink style', () => {
      const testId = faker.string.uuid()
      const flexShrink = faker.number.float({
        min: 0,
      })
      render(
        <View
          testId={testId}
          flexShrink={new Fraction(flexShrink)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexShrink,
      })
    })
  })

  describe('flex basis property', () => {
    it('renders with pixel flex basis style', () => {
      const testId = faker.string.uuid()
      const flexBasis = faker.number.float()
      render(
        <View
          testId={testId}
          flexBasis={new Dimension(flexBasis, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        // Jest type for react native does not allow `${number}px` string.
        // @see https://reactnative.dev/docs/layout-props#flexbasis
        flexBasis: TestPlatform.toPixels(flexBasis) as number,
      })
    })

    it('renders with percent flex basis style', () => {
      const testId = faker.string.uuid()
      const flexBasis = faker.number.float({
        min: 0,
        max: 100,
      })
      render(
        <View
          testId={testId}
          flexBasis={new Dimension(flexBasis, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexBasis: `${flexBasis}%`,
      })
    })
  })

  describe('flex wrap property', () => {
    it('renders with default flex wrap style', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexWrap: 'nowrap',
      })
    })

    it('renders with none flex wrap style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          flexWrap={View.FlexWrap.NONE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexWrap: 'nowrap',
      })
    })

    it('renders with wrap flex wrap style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          flexWrap={View.FlexWrap.WRAP}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexWrap: 'wrap',
      })
    })
  })

  describe('flex direction property', () => {
    it('renders with default flex direction style', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexDirection: 'column',
      })
    })

    it('renders with column flex direction style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          flexDirection={View.FlexDirection.COLUMN}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexDirection: 'column',
      })
    })

    it('renders with row flex direction style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          flexDirection={View.FlexDirection.ROW}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexDirection: 'row',
      })
    })
  })

  describe('justify content property', () => {
    it('renders with default justify content style', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'flex-start',
      })
    })

    it('renders with flex start justify content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={View.JustifyContent.FLEX_START}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'flex-start',
      })
    })

    it('renders with flex end justify content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={View.JustifyContent.FLEX_END}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'flex-end',
      })
    })

    it('renders with center justify content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={View.JustifyContent.CENTER}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'center',
      })
    })

    it('renders with space between justify content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={View.JustifyContent.SPACE_BETWEEN}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'space-between',
      })
    })

    it('renders with space around justify content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={View.JustifyContent.SPACE_AROUND}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'space-around',
      })
    })

    it('renders with space evenly justify content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={View.JustifyContent.SPACE_EVENLY}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'space-evenly',
      })
    })
  })

  describe('align items property', () => {
    it('renders with default align items style', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'stretch',
      })
    })

    it('renders with flex start align items style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={View.AlignItems.FLEX_START}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'flex-start',
      })
    })

    it('renders with flex end align items style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={View.AlignItems.FLEX_END}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'flex-end',
      })
    })

    it('renders with center align items style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={View.AlignItems.CENTER}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'center',
      })
    })

    it('renders with stretch align items style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={View.AlignItems.STRETCH}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'stretch',
      })
    })

    it('renders with baseline align items style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={View.AlignItems.BASELINE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'baseline',
      })
    })
  })

  describe('align self property', () => {
    it('renders with flex start align self style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={View.AlignSelf.FLEX_START}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'flex-start',
      })
    })

    it('renders with flex end align self style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={View.AlignSelf.FLEX_END}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'flex-end',
      })
    })

    it('renders with center align self style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={View.AlignSelf.CENTER}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'center',
      })
    })

    it('renders with stretch align self style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={View.AlignSelf.STRETCH}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'stretch',
      })
    })

    it('renders with baseline align self style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={View.AlignSelf.BASELINE}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'baseline',
      })
    })
  })

  describe('align content property', () => {
    it('renders with flex start align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.FLEX_START}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'flex-start',
      })
    })

    it('renders with flex end align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.FLEX_END}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'flex-end',
      })
    })

    it('renders with center align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.CENTER}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'center',
      })
    })

    it('renders with stretch align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.STRETCH}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'stretch',
      })
    })

    it('renders with space between align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.SPACE_BETWEEN}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'space-between',
      })
    })

    it('renders with space around align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.SPACE_AROUND}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'space-around',
      })
    })

    it('renders with space evenly align content style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={View.AlignContent.SPACE_EVENLY}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'space-evenly',
      })
    })
  })

  describe('margin top property', () => {
    it('renders with 6 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 2,
      })
    })

    it('renders with 5 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 4,
      })
    })

    it('renders with 4 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 6,
      })
    })

    it('renders with 3 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 8,
      })
    })

    it('renders with 2 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 10,
      })
    })

    it('renders with extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 12,
      })
    })

    it('renders with small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 14,
      })
    })

    it('renders with medium margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 16,
      })
    })

    it('renders with large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 18,
      })
    })

    it('renders with extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 20,
      })
    })

    it('renders with 2 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 24,
      })
    })

    it('renders with 3 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 28,
      })
    })

    it('renders with 4 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 32,
      })
    })

    it('renders with 5 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 36,
      })
    })

    it('renders with 6 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginTop={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginTop: 40,
      })
    })
  })

  describe('padding top property', () => {
    it('renders with 6 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 2,
      })
    })

    it('renders with 5 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 4,
      })
    })

    it('renders with 4 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 6,
      })
    })

    it('renders with 3 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 8,
      })
    })

    it('renders with 2 times extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 10,
      })
    })

    it('renders with extra-small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 12,
      })
    })

    it('renders with small margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 14,
      })
    })

    it('renders with medium margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 16,
      })
    })

    it('renders with large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 18,
      })
    })

    it('renders with extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 20,
      })
    })

    it('renders with 2 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 24,
      })
    })

    it('renders with 3 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 28,
      })
    })

    it('renders with 4 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 32,
      })
    })

    it('renders with 5 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 36,
      })
    })

    it('renders with 6 times extra-large margin top style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingTop={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingTop: 40,
      })
    })
  })

  describe('margin left property', () => {
    it('renders with 6 times extra-small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 2,
      })
    })

    it('renders with 5 times extra-small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 4,
      })
    })

    it('renders with 4 times extra-small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 6,
      })
    })

    it('renders with 3 times extra-small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 8,
      })
    })

    it('renders with 2 times extra-small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 10,
      })
    })

    it('renders with extra-small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 12,
      })
    })

    it('renders with small margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 14,
      })
    })

    it('renders with medium margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 16,
      })
    })

    it('renders with large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 18,
      })
    })

    it('renders with extra-large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 20,
      })
    })

    it('renders with 2 times extra-large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 24,
      })
    })

    it('renders with 3 times extra-large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 28,
      })
    })

    it('renders with 4 times extra-large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 32,
      })
    })

    it('renders with 5 times extra-large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 36,
      })
    })

    it('renders with 6 times extra-large margin left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginLeft={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginLeft: 40,
      })
    })
  })

  describe('padding left property', () => {
    it('renders with 6 times extra-small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 2,
      })
    })

    it('renders with 5 times extra-small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 4,
      })
    })

    it('renders with 4 times extra-small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 6,
      })
    })

    it('renders with 3 times extra-small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 8,
      })
    })

    it('renders with 2 times extra-small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 10,
      })
    })

    it('renders with extra-small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 12,
      })
    })

    it('renders with small padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 14,
      })
    })

    it('renders with medium padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 16,
      })
    })

    it('renders with large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 18,
      })
    })

    it('renders with extra-large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 20,
      })
    })

    it('renders with 2 times extra-large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 24,
      })
    })

    it('renders with 3 times extra-large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 28,
      })
    })

    it('renders with 4 times extra-large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 32,
      })
    })

    it('renders with 5 times extra-large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 36,
      })
    })

    it('renders with 6 times extra-large padding left style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingLeft={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingLeft: 40,
      })
    })
  })

  describe('margin right property', () => {
    it('renders with 6 times extra-small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 2,
      })
    })

    it('renders with 5 times extra-small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 4,
      })
    })

    it('renders with 4 times extra-small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 6,
      })
    })

    it('renders with 3 times extra-small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 8,
      })
    })

    it('renders with 2 times extra-small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 10,
      })
    })

    it('renders with extra-small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 12,
      })
    })

    it('renders with small margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 14,
      })
    })

    it('renders with medium margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 16,
      })
    })

    it('renders with large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 18,
      })
    })

    it('renders with extra-large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 20,
      })
    })

    it('renders with 2 times extra-large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 24,
      })
    })

    it('renders with 3 times extra-large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 28,
      })
    })

    it('renders with 4 times extra-large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 32,
      })
    })

    it('renders with 5 times extra-large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 36,
      })
    })

    it('renders with 6 times extra-large margin right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginRight={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginRight: 40,
      })
    })
  })

  describe('padding right property', () => {
    it('renders with 6 times extra-small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 2,
      })
    })

    it('renders with 5 times extra-small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 4,
      })
    })

    it('renders with 4 times extra-small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 6,
      })
    })

    it('renders with 3 times extra-small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 8,
      })
    })

    it('renders with 2 times extra-small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 10,
      })
    })

    it('renders with extra-small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 12,
      })
    })

    it('renders with small padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 14,
      })
    })

    it('renders with medium padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 16,
      })
    })

    it('renders with large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 18,
      })
    })

    it('renders with extra-large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 20,
      })
    })

    it('renders with 2 times extra-large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 24,
      })
    })

    it('renders with 3 times extra-large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 28,
      })
    })

    it('renders with 4 times extra-large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 32,
      })
    })

    it('renders with 5 times extra-large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 36,
      })
    })

    it('renders with 6 times extra-large padding right style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingRight={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingRight: 40,
      })
    })
  })

  describe('margin bottom property', () => {
    it('renders with 6 times extra-small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 2,
      })
    })

    it('renders with 5 times extra-small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 4,
      })
    })

    it('renders with 4 times extra-small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 6,
      })
    })

    it('renders with 3 times extra-small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 8,
      })
    })

    it('renders with 2 times extra-small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 10,
      })
    })

    it('renders with extra-small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 12,
      })
    })

    it('renders with small margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 14,
      })
    })

    it('renders with medium margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 16,
      })
    })

    it('renders with large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 18,
      })
    })

    it('renders with extra-large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 20,
      })
    })

    it('renders with 2 times extra-large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 24,
      })
    })

    it('renders with 3 times extra-large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 28,
      })
    })

    it('renders with 4 times extra-large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 32,
      })
    })

    it('renders with 5 times extra-large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 36,
      })
    })

    it('renders with 6 times extra-large margin bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          marginBottom={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        marginBottom: 40,
      })
    })
  })

  describe('padding bottom property', () => {
    it('renders with 6 times extra-small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X6S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 2,
      })
    })

    it('renders with 5 times extra-small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X5S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 4,
      })
    })

    it('renders with 4 times extra-small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X4S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 6,
      })
    })

    it('renders with 3 times extra-small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X3S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 8,
      })
    })

    it('renders with 2 times extra-small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X2S}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 10,
      })
    })

    it('renders with extra-small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 12,
      })
    })

    it('renders with small padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 14,
      })
    })

    it('renders with medium padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 16,
      })
    })

    it('renders with large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 18,
      })
    })

    it('renders with extra-large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 20,
      })
    })

    it('renders with 2 times extra-large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X2L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 24,
      })
    })

    it('renders with 3 times extra-large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X3L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 28,
      })
    })

    it('renders with 4 times extra-large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X4L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 32,
      })
    })

    it('renders with 5 times extra-large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X5L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 36,
      })
    })

    it('renders with 6 times extra-large padding bottom style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          paddingBottom={View.Spacing.X6L}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBottom: 40,
      })
    })
  })

  describe('min width property', () => {
    it('renders with pixel min width style', () => {
      const testId = faker.string.uuid()
      const minWidth = faker.number.float({ min: 0 })
      render(
        <View
          testId={testId}
          minWidth={new Dimension(minWidth, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minWidth: TestPlatform.toPixels(minWidth),
      })
    })

    it('renders with percent min width style', () => {
      const testId = faker.string.uuid()
      const minWidth = faker.number.float({ min: 0, max: 100 })
      render(
        <View
          testId={testId}
          minWidth={new Dimension(minWidth, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minWidth: `${minWidth}%`,
      })
    })
  })

  describe('width property', () => {
    it('renders with pixel width style', () => {
      const testId = faker.string.uuid()
      const width = faker.number.float({ min: 0 })
      render(
        <View
          testId={testId}
          width={new Dimension(width, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        width: TestPlatform.toPixels(width),
      })
    })

    it('renders with percent width style', () => {
      const testId = faker.string.uuid()
      const width = faker.number.float({ min: 0, max: 100 })
      render(
        <View
          testId={testId}
          width={new Dimension(width, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        width: `${width}%`,
      })
    })
  })

  describe('max width property', () => {
    it('renders with pixel max width style', () => {
      const testId = faker.string.uuid()
      const maxWidth = faker.number.float({ min: 0 })
      render(
        <View
          testId={testId}
          maxWidth={new Dimension(maxWidth, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxWidth: TestPlatform.toPixels(maxWidth),
      })
    })

    it('renders with percent max width style', () => {
      const testId = faker.string.uuid()
      const maxWidth = faker.number.float({ min: 0, max: 100 })
      render(
        <View
          testId={testId}
          maxWidth={new Dimension(maxWidth, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxWidth: `${maxWidth}%`,
      })
    })
  })

  describe('min height property', () => {
    it('renders with pixel min height style', () => {
      const testId = faker.string.uuid()
      const minHeight = faker.number.float({ min: 0 })
      render(
        <View
          testId={testId}
          minHeight={new Dimension(minHeight, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minHeight: TestPlatform.toPixels(minHeight),
      })
    })

    it('renders with percent min height style', () => {
      const testId = faker.string.uuid()
      const minHeight = faker.number.float({ min: 0, max: 100 })
      render(
        <View
          testId={testId}
          minHeight={new Dimension(minHeight, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        minHeight: `${minHeight}%`,
      })
    })
  })

  describe('height property', () => {
    it('renders with pixel height style', () => {
      const testId = faker.string.uuid()
      const height = faker.number.float({ min: 0 })
      render(
        <View
          testId={testId}
          height={new Dimension(height, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        height: TestPlatform.toPixels(height),
      })
    })

    it('renders with percent height style', () => {
      const testId = faker.string.uuid()
      const height = faker.number.float({ min: 0, max: 100 })
      render(
        <View
          testId={testId}
          height={new Dimension(height, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        height: `${height}%`,
      })
    })
  })

  describe('max height property', () => {
    it('renders with pixel max height style', () => {
      const testId = faker.string.uuid()
      const maxHeight = faker.number.float({ min: 0 })
      render(
        <View
          testId={testId}
          maxHeight={new Dimension(maxHeight, Dimension.Unit.PIXEL)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxHeight: TestPlatform.toPixels(maxHeight),
      })
    })

    it('renders with percent max height style', () => {
      const testId = faker.string.uuid()
      const maxHeight = faker.number.float({ min: 0, max: 100 })
      render(
        <View
          testId={testId}
          maxHeight={new Dimension(maxHeight, Dimension.Unit.PERCENT)}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        maxHeight: `${maxHeight}%`,
      })
    })
  })

  describe('box shadow property', () => {
    it('renders with small box shadow style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: [
          '0 1px 3px 0 rgba(0,0,0,0.1)',
          '0 1px 2px -1px rgba(0,0,0,0.1)',
        ].join(','),
      })
    })

    it('renders with medium box shadow style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: [
          '0 4px 6px -1px rgba(0,0,0,0.1)',
          '0 2px 4px -2px rgba(0,0,0,0.1)',
        ].join(','),
      })
    })

    it('renders with large box shadow style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          boxShadow={View.BoxShadow.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        boxShadow: [
          '0 10px 15px -3px rgba(0,0,0,0.1)',
          '0 4px 6px -4px rgba(0,0,0,0.1)',
        ].join(','),
      })
    })
  })

  describe('border color property', () => {
    it('renders with base 100 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_100}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(235,235,240)',
      })
    })

    it('renders with base 200 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_200}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(230,230,235)',
      })
    })

    it('renders with base 300 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_300}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(225,225,230)',
      })
    })

    it('renders with base 400 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_400}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(220,220,225)',
      })
    })

    it('renders with base 500 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_500}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(215,215,220)',
      })
    })

    it('renders with base 600 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_600}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(210,210,215)',
      })
    })

    it('renders with base 700 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_700}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(205,205,210)',
      })
    })

    it('renders with base 800 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_800}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(200,200,205)',
      })
    })

    it('renders with base 900 border color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_900}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(195,195,200)',
      })
    })
  })

  describe('border width property', () => {
    it('renders with small border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 0.5,
      })
    })

    it('renders with medium border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 1,
      })
    })

    it('renders with large border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 1.5,
      })
    })
  })

  describe('border width top property', () => {
    it('renders with small border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthTop={View.BorderWidth.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 0.5,
      })
    })

    it('renders with medium border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthTop={View.BorderWidth.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 1,
      })
    })

    it('renders with large border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthTop={View.BorderWidth.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopWidth: 1.5,
      })
    })
  })

  describe('border width left property', () => {
    it('renders with small border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthLeft={View.BorderWidth.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 0.5,
      })
    })

    it('renders with medium border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthLeft={View.BorderWidth.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 1,
      })
    })

    it('renders with large border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthLeft={View.BorderWidth.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderLeftWidth: 1.5,
      })
    })
  })

  describe('border width right property', () => {
    it('renders with small border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthRight={View.BorderWidth.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 0.5,
      })
    })

    it('renders with medium border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthRight={View.BorderWidth.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 1,
      })
    })

    it('renders with large border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthRight={View.BorderWidth.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRightWidth: 1.5,
      })
    })
  })

  describe('border width bottom property', () => {
    it('renders with small border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthBottom={View.BorderWidth.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 0.5,
      })
    })

    it('renders with medium border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthBottom={View.BorderWidth.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 1,
      })
    })

    it('renders with large border width style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidthBottom={View.BorderWidth.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomWidth: 1.5,
      })
    })
  })

  describe('border radius property', () => {
    it('renders with extra small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatform.toPixels(2),
      })
    })

    it('renders with small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatform.toPixels(4),
      })
    })

    it('renders with medium border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatform.toPixels(6),
      })
    })

    it('renders with large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatform.toPixels(8),
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatform.toPixels(10),
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: '50%',
      })
    })
  })

  describe('border radius top left property', () => {
    it('renders with extra small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopLeft={View.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopLeftRadius: TestPlatform.toPixels(2),
      })
    })

    it('renders with small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopLeft={View.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopLeftRadius: TestPlatform.toPixels(4),
      })
    })

    it('renders with medium border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopLeft={View.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopLeftRadius: TestPlatform.toPixels(6),
      })
    })

    it('renders with large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopLeft={View.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopLeftRadius: TestPlatform.toPixels(8),
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopLeft={View.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopLeftRadius: TestPlatform.toPixels(10),
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopLeft={View.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopLeftRadius: '50%',
      })
    })
  })

  describe('border radius top right property', () => {
    it('renders with extra small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopRight={View.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopRightRadius: TestPlatform.toPixels(2),
      })
    })

    it('renders with small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopRight={View.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopRightRadius: TestPlatform.toPixels(4),
      })
    })

    it('renders with medium border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopRight={View.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopRightRadius: TestPlatform.toPixels(6),
      })
    })

    it('renders with large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopRight={View.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopRightRadius: TestPlatform.toPixels(8),
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopRight={View.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopRightRadius: TestPlatform.toPixels(10),
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusTopRight={View.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderTopRightRadius: '50%',
      })
    })
  })

  describe('border radius bottom left property', () => {
    it('renders with extra small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomLeft={View.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomLeftRadius: TestPlatform.toPixels(2),
      })
    })

    it('renders with small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomLeft={View.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomLeftRadius: TestPlatform.toPixels(4),
      })
    })

    it('renders with medium border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomLeft={View.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomLeftRadius: TestPlatform.toPixels(6),
      })
    })

    it('renders with large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomLeft={View.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomLeftRadius: TestPlatform.toPixels(8),
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomLeft={View.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomLeftRadius: TestPlatform.toPixels(10),
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomLeft={View.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomLeftRadius: '50%',
      })
    })
  })

  describe('border radius bottom right property', () => {
    it('renders with extra small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomRight={View.BorderRadius.XS}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomRightRadius: TestPlatform.toPixels(2),
      })
    })

    it('renders with small border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomRight={View.BorderRadius.SM}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomRightRadius: TestPlatform.toPixels(4),
      })
    })

    it('renders with medium border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomRight={View.BorderRadius.MD}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomRightRadius: TestPlatform.toPixels(6),
      })
    })

    it('renders with large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomRight={View.BorderRadius.LG}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomRightRadius: TestPlatform.toPixels(8),
      })
    })

    it('renders with extra large border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomRight={View.BorderRadius.XL}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomRightRadius: TestPlatform.toPixels(10),
      })
    })

    it('renders with maximum border radius style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadiusBottomRight={View.BorderRadius.MAX}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderBottomRightRadius: '50%',
      })
    })
  })

  describe('background color property', () => {
    it('renders with base 100 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_100}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(215,215,220)',
      })
    })

    it('renders with base 200 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_200}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(220,220,225)',
      })
    })

    it('renders with base 300 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_300}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(225,225,230)',
      })
    })

    it('renders with base 400 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_400}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(230,230,235)',
      })
    })

    it('renders with base 500 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_500}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(235,235,240)',
      })
    })

    it('renders with base 600 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_600}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(240,240,245)',
      })
    })

    it('renders with base 700 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_700}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(245,245,250)',
      })
    })

    it('renders with base 800 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_800}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(250,250,255)',
      })
    })

    it('renders with base 900 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_900}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(255,255,255)',
      })
    })

    it('renders with primary 100 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_100}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(40,40,45)',
      })
    })

    it('renders with primary 200 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_200}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(35,35,40)',
      })
    })

    it('renders with primary 300 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_300}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(30,30,35)',
      })
    })

    it('renders with primary 400 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_400}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(25,25,30)',
      })
    })

    it('renders with primary 500 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_500}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(20,20,25)',
      })
    })

    it('renders with primary 600 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_600}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(15,15,20)',
      })
    })

    it('renders with primary 700 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_700}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(10,10,15)',
      })
    })

    it('renders with primary 800 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_800}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(5,5,10)',
      })
    })

    it('renders with primary 900 background color style', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.PRIMARY_900}
        />,
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(0,0,5)',
      })
    })
  })
})
