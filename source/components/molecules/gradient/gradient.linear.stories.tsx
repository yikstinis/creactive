import { StorybookControl } from '.storybook/control'
import { Color, FRACTION_MAX, FRACTION_MIN } from '@/helpers'
import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'
import { Gradient } from '.'

const directionControl = StorybookControl.fromNumericEnum(
  Gradient.Linear.Direction,
  false,
)
const tagControl = StorybookControl.fromNumericEnum(Gradient.Tag)
const positionControl = StorybookControl.fromNumericEnum(Gradient.Position)
const topControl = StorybookControl.forPosition()
const leftControl = StorybookControl.forPosition()
const rightControl = StorybookControl.forPosition()
const bottomControl = StorybookControl.forPosition()
const opacityControl = StorybookControl.forFraction()
const opacityTransitionDurationControl = StorybookControl.fromNumericEnum(
  Gradient.TransitionDuration,
)
const scaleControl = StorybookControl.forFraction()
const translateXControl = StorybookControl.forPosition()
const translateYControl = StorybookControl.forPosition()
const transformTransitionDurationControl = StorybookControl.fromNumericEnum(
  Gradient.TransitionDuration,
)
const overflowControl = StorybookControl.fromNumericEnum(Gradient.Overflow)
const flexGrowControl = StorybookControl.forFraction()
const flexShrinkControl = StorybookControl.forFraction()
const flexBasisControl = StorybookControl.forSize()
const flexDirectionControl = StorybookControl.fromNumericEnum(
  Gradient.FlexDirection,
)
const justifyContentControl = StorybookControl.fromNumericEnum(
  Gradient.JustifyContent,
)
const alignItemsControl = StorybookControl.fromNumericEnum(Gradient.AlignItems)
const alignSelfControl = StorybookControl.fromNumericEnum(Gradient.AlignSelf)
const alignContentControl = StorybookControl.fromNumericEnum(
  Gradient.AlignContent,
)
const gapControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const marginTopControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const paddingTopControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const marginLeftControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const paddingLeftControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const marginRightControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const paddingRightControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const marginBottomControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const paddingBottomControl = StorybookControl.fromNumericEnum(Gradient.Spacing)
const minWidthControl = StorybookControl.forSize()
const widthControl = StorybookControl.forSize()
const maxWidthControl = StorybookControl.forSize()
const minHeightControl = StorybookControl.forSize()
const heightControl = StorybookControl.forSize()
const maxHeightControl = StorybookControl.forSize()
const boxShadowControl = StorybookControl.fromNumericEnum(Gradient.BoxShadow)
const borderColorControl = StorybookControl.fromNumericEnum(
  Gradient.BorderColor,
)
const borderWidthControl = StorybookControl.fromNumericEnum(
  Gradient.BorderWidth,
)
const borderWidthTopControl = StorybookControl.fromNumericEnum(
  Gradient.BorderWidth,
)
const borderWidthLeftControl = StorybookControl.fromNumericEnum(
  Gradient.BorderWidth,
)
const borderWidthRightControl = StorybookControl.fromNumericEnum(
  Gradient.BorderWidth,
)
const borderWidthBottomControl = StorybookControl.fromNumericEnum(
  Gradient.BorderWidth,
)
const borderRadiusControl = StorybookControl.fromNumericEnum(
  Gradient.BorderRadius,
)
const borderRadiusTopLeftControl = StorybookControl.fromNumericEnum(
  Gradient.BorderRadius,
)
const borderRadiusTopRightControl = StorybookControl.fromNumericEnum(
  Gradient.BorderRadius,
)
const borderRadiusBottomLeftControl = StorybookControl.fromNumericEnum(
  Gradient.BorderRadius,
)
const borderRadiusBottomRightControl = StorybookControl.fromNumericEnum(
  Gradient.BorderRadius,
)
const backgroundColorControl = StorybookControl.fromNumericEnum(
  Gradient.BackgroundColor,
)

const meta: Meta<typeof Gradient.Linear> = {
  component: Gradient.Linear,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    direction: directionControl,
    tag: tagControl,
    position: positionControl,
    top: topControl,
    left: leftControl,
    right: rightControl,
    bottom: bottomControl,
    opacity: opacityControl,
    opacityTransitionDuration: opacityTransitionDurationControl,
    scale: scaleControl,
    translateX: translateXControl,
    translateY: translateYControl,
    transformTransitionDuration: transformTransitionDurationControl,
    overflow: overflowControl,
    flexGrow: flexGrowControl,
    flexShrink: flexShrinkControl,
    flexBasis: flexBasisControl,
    flexDirection: flexDirectionControl,
    justifyContent: justifyContentControl,
    alignItems: alignItemsControl,
    alignSelf: alignSelfControl,
    alignContent: alignContentControl,
    gap: gapControl,
    marginTop: marginTopControl,
    paddingTop: paddingTopControl,
    marginLeft: marginLeftControl,
    paddingLeft: paddingLeftControl,
    marginRight: marginRightControl,
    paddingRight: paddingRightControl,
    marginBottom: marginBottomControl,
    paddingBottom: paddingBottomControl,
    minWidth: minWidthControl,
    width: widthControl,
    maxWidth: maxWidthControl,
    minHeight: minHeightControl,
    height: heightControl,
    maxHeight: maxHeightControl,
    boxShadow: boxShadowControl,
    borderColor: borderColorControl,
    borderWidth: borderWidthControl,
    borderWidthTop: borderWidthTopControl,
    borderWidthLeft: borderWidthLeftControl,
    borderWidthRight: borderWidthRightControl,
    borderWidthBottom: borderWidthBottomControl,
    borderRadius: borderRadiusControl,
    borderRadiusTopLeft: borderRadiusTopLeftControl,
    borderRadiusTopRight: borderRadiusTopRightControl,
    borderRadiusBottomLeft: borderRadiusBottomLeftControl,
    borderRadiusBottomRight: borderRadiusBottomRightControl,
    backgroundColor: backgroundColorControl,
  },
  args: {
    direction: directionControl.defaultValue,
    tag: tagControl.defaultValue,
    position: positionControl.defaultValue,
    top: topControl.defaultValue,
    left: leftControl.defaultValue,
    right: rightControl.defaultValue,
    bottom: bottomControl.defaultValue,
    opacity: opacityControl.defaultValue,
    opacityTransitionDuration: opacityTransitionDurationControl.defaultValue,
    scale: scaleControl.defaultValue,
    translateX: translateXControl.defaultValue,
    translateY: translateYControl.defaultValue,
    transformTransitionDuration:
      transformTransitionDurationControl.defaultValue,
    overflow: overflowControl.defaultValue,
    flexGrow: flexGrowControl.defaultValue,
    flexShrink: flexShrinkControl.defaultValue,
    flexBasis: flexBasisControl.defaultValue,
    flexDirection: flexDirectionControl.defaultValue,
    justifyContent: justifyContentControl.defaultValue,
    alignItems: alignItemsControl.defaultValue,
    alignSelf: alignSelfControl.defaultValue,
    alignContent: alignContentControl.defaultValue,
    gap: gapControl.defaultValue,
    marginTop: marginTopControl.defaultValue,
    paddingTop: paddingTopControl.defaultValue,
    marginLeft: marginLeftControl.defaultValue,
    paddingLeft: paddingLeftControl.defaultValue,
    marginRight: marginRightControl.defaultValue,
    paddingRight: paddingRightControl.defaultValue,
    marginBottom: marginBottomControl.defaultValue,
    paddingBottom: paddingBottomControl.defaultValue,
    minWidth: minWidthControl.defaultValue,
    width: widthControl.defaultValue,
    maxWidth: maxWidthControl.defaultValue,
    minHeight: minHeightControl.defaultValue,
    height: heightControl.defaultValue,
    maxHeight: maxHeightControl.defaultValue,
    boxShadow: boxShadowControl.defaultValue,
    borderColor: borderColorControl.defaultValue,
    borderWidth: borderWidthControl.defaultValue,
    borderWidthTop: borderWidthTopControl.defaultValue,
    borderWidthLeft: borderWidthLeftControl.defaultValue,
    borderWidthRight: borderWidthRightControl.defaultValue,
    borderWidthBottom: borderWidthBottomControl.defaultValue,
    borderRadius: borderRadiusControl.defaultValue,
    borderRadiusTopLeft: borderRadiusTopLeftControl.defaultValue,
    borderRadiusTopRight: borderRadiusTopRightControl.defaultValue,
    borderRadiusBottomLeft: borderRadiusBottomLeftControl.defaultValue,
    borderRadiusBottomRight: borderRadiusBottomRightControl.defaultValue,
    backgroundColor: backgroundColorControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Gradient.Linear> = {
  render: (args) => (
    <Gradient.Linear
      {...args}
      stops={[
        { offset: FRACTION_MIN, color: new Color(faker.number.int({ min: 0, max: 255 }), faker.number.int({ min: 0, max: 255 }), faker.number.int({ min: 0, max: 255 })) },
        { offset: FRACTION_MAX, color: new Color(faker.number.int({ min: 0, max: 255 }), faker.number.int({ min: 0, max: 255 }), faker.number.int({ min: 0, max: 255 })) },
      ]}
    >
      {StorybookControl.renderLayout()}
    </Gradient.Linear>
  ),
}
