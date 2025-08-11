import { StorybookControl } from '@/utilities'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const tagControl = StorybookControl.fromNumericEnum(Text.Tag)
const alignControl = StorybookControl.fromNumericEnum(Text.TextAlign)
const decorationControl = StorybookControl.fromNumericEnum(Text.TextDecoration)
const fontFamilyControl = StorybookControl.fromNumericEnum(Text.FontFamily)
const fontWeightControl = StorybookControl.fromNumericEnum(Text.FontWeight)
const fontSizeControl = StorybookControl.fromNumericEnum(Text.FontSize)
const lineHeightControl = StorybookControl.fromNumericEnum(Text.LineHeight)
const maxLinesControl = StorybookControl.forNumber()
const colorControl = StorybookControl.fromNumericEnum(Text.Color)
const opacityControl = StorybookControl.forFraction()
const childrenControl = StorybookControl.forChildren()

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    tag: tagControl,
    textAlign: alignControl,
    textDecoration: decorationControl,
    fontFamily: fontFamilyControl,
    fontWeight: fontWeightControl,
    fontSize: fontSizeControl,
    lineHeight: lineHeightControl,
    maxLines: maxLinesControl,
    color: colorControl,
    opacity: opacityControl,
    children: childrenControl,
  },
  args: {
    tag: tagControl.defaultValue,
    textAlign: alignControl.defaultValue,
    textDecoration: decorationControl.defaultValue,
    fontFamily: fontFamilyControl.defaultValue,
    fontWeight: fontWeightControl.defaultValue,
    fontSize: fontSizeControl.defaultValue,
    lineHeight: lineHeightControl.defaultValue,
    maxLines: maxLinesControl.defaultValue,
    color: colorControl.defaultValue,
    opacity: opacityControl.defaultValue,
    children: childrenControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Text> = {}
