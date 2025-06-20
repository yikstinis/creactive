import { StorybookControl } from '@/utilities'
import type { Meta, StoryObj } from '@storybook/react'
import { View } from '.'

const tagControl = StorybookControl.fromNumericEnum(View.Tag)
const positionControl = StorybookControl.fromNumericEnum(View.Position)
const topControl = StorybookControl.forPosition()
const leftControl = StorybookControl.forPosition()
const rightControl = StorybookControl.forPosition()
const bottomControl = StorybookControl.forPosition()
const opacityControl = StorybookControl.forFraction()
const overflowControl = StorybookControl.fromNumericEnum(View.Overflow)
const flexGrowControl = StorybookControl.forFraction()
const flexShrinkControl = StorybookControl.forFraction()
const flexBasisControl = StorybookControl.forSize()
const flexDirectionControl = StorybookControl.fromNumericEnum(
  View.FlexDirection
)
const justifyContentControl = StorybookControl.fromNumericEnum(
  View.JustifyContent
)
const alignItemsControl = StorybookControl.fromNumericEnum(View.AlignItems)
const alignSelfControl = StorybookControl.fromNumericEnum(View.AlignSelf)
const alignContentControl = StorybookControl.fromNumericEnum(View.AlignContent)
const marginTopControl = StorybookControl.fromNumericEnum(View.Spacing)
const paddingTopControl = StorybookControl.fromNumericEnum(View.Spacing)
const marginLeftControl = StorybookControl.fromNumericEnum(View.Spacing)
const paddingLeftControl = StorybookControl.fromNumericEnum(View.Spacing)
const marginRightControl = StorybookControl.fromNumericEnum(View.Spacing)
const paddingRightControl = StorybookControl.fromNumericEnum(View.Spacing)
const marginBottomControl = StorybookControl.fromNumericEnum(View.Spacing)
const paddingBottomControl = StorybookControl.fromNumericEnum(View.Spacing)
const minWidthControl = StorybookControl.forSize()
const widthControl = StorybookControl.forSize()
const maxWidthControl = StorybookControl.forSize()
const minHeightControl = StorybookControl.forSize()
const heightControl = StorybookControl.forSize()
const maxHeightControl = StorybookControl.forSize()
const boxShadowControl = StorybookControl.fromNumericEnum(View.BoxShadow)
const borderColorControl = StorybookControl.fromNumericEnum(View.BorderColor)
const borderWidthControl = StorybookControl.fromNumericEnum(View.BorderWidth)
const borderWidthTopControl = StorybookControl.fromNumericEnum(View.BorderWidth)
const borderWidthLeftControl = StorybookControl.fromNumericEnum(
  View.BorderWidth
)
const borderWidthRightControl = StorybookControl.fromNumericEnum(
  View.BorderWidth
)
const borderWidthBottomControl = StorybookControl.fromNumericEnum(
  View.BorderWidth
)
const borderRadiusControl = StorybookControl.fromNumericEnum(View.BorderRadius)
const backgroundColorControl = StorybookControl.fromNumericEnum(
  View.BackgroundColor
)

const meta: Meta<typeof View> = {
  component: View,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    tag: tagControl,
    position: positionControl,
    top: topControl,
    left: leftControl,
    right: rightControl,
    bottom: bottomControl,
    opacity: opacityControl,
    overflow: overflowControl,
    flexGrow: flexGrowControl,
    flexShrink: flexShrinkControl,
    flexBasis: flexBasisControl,
    flexDirection: flexDirectionControl,
    justifyContent: justifyContentControl,
    alignItems: alignItemsControl,
    alignSelf: alignSelfControl,
    alignContent: alignContentControl,
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
    backgroundColor: backgroundColorControl,
  },
  args: {
    tag: tagControl.defaultValue,
    position: positionControl.defaultValue,
    top: topControl.defaultValue,
    left: leftControl.defaultValue,
    right: rightControl.defaultValue,
    bottom: bottomControl.defaultValue,
    opacity: opacityControl.defaultValue,
    overflow: overflowControl.defaultValue,
    flexGrow: flexGrowControl.defaultValue,
    flexShrink: flexShrinkControl.defaultValue,
    flexBasis: flexBasisControl.defaultValue,
    flexDirection: flexDirectionControl.defaultValue,
    justifyContent: justifyContentControl.defaultValue,
    alignItems: alignItemsControl.defaultValue,
    alignSelf: alignSelfControl.defaultValue,
    alignContent: alignContentControl.defaultValue,
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
    backgroundColor: backgroundColorControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof View> = {
  render: (args) => <View {...args}>{StorybookControl.renderLayout()}</View>,
}
