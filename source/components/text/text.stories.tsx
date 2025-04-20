import { StorybookControl } from '@/utilities'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const typeControl = StorybookControl.fromNumericEnum(Text.Type)
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
    type: typeControl,
    align: alignControl,
    fontWeight: fontWeightControl,
    fontSize: fontSizeControl,
    lineHeight: lineHeightControl,
    maxLines: maxLinesControl,
    color: colorControl,
    children: childrenControl,
  },
  args: {
    type: typeControl.defaultValue,
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
