import { StorybookControl } from '.storybook/control'
import { FRACTION_MAX, FRACTION_MIN } from '@/helpers'
import { Color } from '@/types'
import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'
import { Gradient } from '.'

const meta: Meta<typeof Gradient.Linear> = {
  component: Gradient.Linear,
  decorators: [StorybookControl.getDecorator()],
}
export default meta
export const Top: StoryObj<typeof Gradient.Linear> = {
  render: () => (
    <Gradient.Linear direction={Gradient.Linear.Direction.TOP}>
      <Gradient.Stop
        offset={FRACTION_MIN}
        color={faker.color.rgb() as Color}
      />

      <Gradient.Stop
        offset={FRACTION_MAX}
        color={faker.color.rgb() as Color}
      />
    </Gradient.Linear>
  ),
}
export const Left: StoryObj<typeof Gradient.Linear> = {
  render: () => (
    <Gradient.Linear direction={Gradient.Linear.Direction.LEFT}>
      <Gradient.Stop
        offset={FRACTION_MIN}
        color={faker.color.rgb() as Color}
      />

      <Gradient.Stop
        offset={FRACTION_MAX}
        color={faker.color.rgb() as Color}
      />
    </Gradient.Linear>
  ),
}
export const Right: StoryObj<typeof Gradient.Linear> = {
  render: () => (
    <Gradient.Linear direction={Gradient.Linear.Direction.RIGHT}>
      <Gradient.Stop
        offset={FRACTION_MIN}
        color={faker.color.rgb() as Color}
      />

      <Gradient.Stop
        offset={FRACTION_MAX}
        color={faker.color.rgb() as Color}
      />
    </Gradient.Linear>
  ),
}
export const Bottom: StoryObj<typeof Gradient.Linear> = {
  render: () => (
    <Gradient.Linear direction={Gradient.Linear.Direction.BOTTOM}>
      <Gradient.Stop
        offset={FRACTION_MIN}
        color={faker.color.rgb() as Color}
      />

      <Gradient.Stop
        offset={FRACTION_MAX}
        color={faker.color.rgb() as Color}
      />
    </Gradient.Linear>
  ),
}
