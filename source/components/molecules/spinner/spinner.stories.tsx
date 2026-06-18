import { StorybookControl } from '.storybook/control'
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '.'

const isDisabledControl = StorybookControl.forBoolean(false)
const sizeControl = StorybookControl.fromNumericEnum(Spinner.Size)
const colorControl = StorybookControl.fromNumericEnum(Spinner.Color)

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    isDisabled: isDisabledControl,
    size: sizeControl,
    color: colorControl,
  },
  args: {
    isDisabled: isDisabledControl.defaultValue,
    size: sizeControl.defaultValue,
    color: colorControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Spinner> = {}
