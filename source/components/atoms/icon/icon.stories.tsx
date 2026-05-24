import { StorybookControl } from '.storybook/control'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'

const nameControl = StorybookControl.fromNumericEnum(Icon.Name, false)
const sizeControl = StorybookControl.fromNumericEnum(Icon.Size, false)
const colorControl = StorybookControl.fromNumericEnum(Icon.Color)

const meta: Meta<typeof Icon> = {
  component: Icon,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    name: nameControl,
    size: sizeControl,
    color: colorControl,
  },
  args: {
    name: nameControl.defaultValue,
    size: sizeControl.defaultValue,
    color: colorControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Icon> = {}
