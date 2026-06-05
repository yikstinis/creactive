import { StorybookControl } from '.storybook/control'
import type { Meta, StoryObj } from '@storybook/react'
import { Transition } from '.'

const opacityControl = StorybookControl.forFraction()
const scaleControl = StorybookControl.forFraction()
const translateXControl = StorybookControl.forPosition()
const translateYControl = StorybookControl.forPosition()
const durationControl = StorybookControl.fromNumericEnum(Transition.Duration)

const meta: Meta<typeof Transition> = {
  component: Transition,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    opacity: opacityControl,
    scale: scaleControl,
    translateX: translateXControl,
    translateY: translateYControl,
    duration: durationControl,
  },
  args: {
    opacity: opacityControl.defaultValue,
    scale: scaleControl.defaultValue,
    translateX: translateXControl.defaultValue,
    translateY: translateYControl.defaultValue,
    duration: durationControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Transition> = {
  render: (args) => (
    <Transition {...args}>{StorybookControl.renderLayout()}</Transition>
  ),
}
