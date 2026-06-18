import { StorybookControl } from '.storybook/control'
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '.'

const sizeControl = StorybookControl.fromNumericEnum(Spinner.Size)
const colorControl = StorybookControl.fromNumericEnum(Spinner.Color)

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    size: sizeControl,
    color: colorControl,
  },
  args: {
    size: sizeControl.defaultValue,
    color: colorControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Spinner> = {}
