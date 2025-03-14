import { StorybookControl } from '@/helpers'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const typeControl = StorybookControl.fromNumericEnum(Text.Type, true)
const alignControl = StorybookControl.fromNumericEnum(Text.Align, true)
const fontWeightControl = StorybookControl.fromNumericEnum(
  Text.FontWeight,
  true
)
const fontSizeControl = StorybookControl.fromNumericEnum(Text.FontSize, true)
const lineHeightControl = StorybookControl.fromNumericEnum(
  Text.LineHeight,
  true
)
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
    children: childrenControl,
  },
  args: {
    type: typeControl.defaultValue,
    align: alignControl.defaultValue,
    fontWeight: fontWeightControl.defaultValue,
    fontSize: fontSizeControl.defaultValue,
    lineHeight: lineHeightControl.defaultValue,
    children: childrenControl.defaultValue,
  },
}
export default meta

export const DefaultState: StoryObj<typeof Text> = {}
