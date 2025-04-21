import { StorybookControl } from '@/utilities'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '..'

const tagControl = StorybookControl.fromNumericEnum(Text.Tag)
const alignControl = StorybookControl.fromNumericEnum(Text.Align)
const fontWeightControl = StorybookControl.fromNumericEnum(Text.FontWeight)
const fontSizeControl = StorybookControl.fromNumericEnum(Text.FontSize)
const lineHeightControl = StorybookControl.fromNumericEnum(Text.LineHeight)
const maxLinesControl = StorybookControl.forNumber()
const colorControl = StorybookControl.fromNumericEnum(Text.Color)
const childrenControl = StorybookControl.forChildren()

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    tag: tagControl,
    align: alignControl,
    fontWeight: fontWeightControl,
    fontSize: fontSizeControl,
    lineHeight: lineHeightControl,
    maxLines: maxLinesControl,
    color: colorControl,
    children: childrenControl,
  },
  args: {
    tag: tagControl.defaultValue,
    align: alignControl.defaultValue,
    fontWeight: fontWeightControl.defaultValue,
    fontSize: fontSizeControl.defaultValue,
    lineHeight: lineHeightControl.defaultValue,
    maxLines: maxLinesControl.defaultValue,
    color: colorControl.defaultValue,
    children: childrenControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Text> = {}
