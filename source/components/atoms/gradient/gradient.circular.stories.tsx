import { StorybookControl } from '.storybook/control'
import { FRACTION_MAX, FRACTION_MIN } from '@/helpers'
import { Color } from '@/types'
import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'
import { Gradient } from '.'

const cxControl = StorybookControl.forFraction()
const cyControl = StorybookControl.forFraction()

const meta: Meta<typeof Gradient.Circular> = {
  component: Gradient.Circular,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    cx: cxControl,
    cy: cyControl,
  },
  args: {
    cx: cxControl.defaultValue,
    cy: cyControl.defaultValue,
  },
}
export default meta
export const Default: StoryObj<typeof Gradient.Circular> = {
  render: (args) => (
    <Gradient.Circular {...args}>
      <Gradient.Stop
        offset={FRACTION_MIN}
        color={faker.color.rgb() as Color}
      />

      <Gradient.Stop
        offset={FRACTION_MAX}
        color={faker.color.rgb() as Color}
      />
    </Gradient.Circular>
  ),
}
