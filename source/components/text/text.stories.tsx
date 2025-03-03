import { StorybookControl } from '@/helpers'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const typeControl = StorybookControl.fromNumericEnum(Text.Type, true)
const fontWeightControl = StorybookControl.fromNumericEnum(
  Text.FontWeight,
  true
)
const fontSizeControl = StorybookControl.fromNumericEnum(Text.FontSize, true)
const childrenControl = StorybookControl.forChildren()

const meta: Meta<typeof Text> = {
  component: Text,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    type: typeControl,
    fontWeight: fontWeightControl,
    fontSize: fontSizeControl,
    children: childrenControl,
  },
  args: {
    type: typeControl.defaultValue,
    fontWeight: fontWeightControl.defaultValue,
    fontSize: fontSizeControl.defaultValue,
    children: childrenControl.defaultValue,
  },
}
export default meta

export const DefaultState: StoryObj<typeof Text> = {}
