import { FRACTION_MAX, FRACTION_MIN } from '@/constants'
import { Color } from '@/types'
import { StorybookControl } from '@/utilities'
import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'
import { Gradient } from '.'

const meta: Meta<typeof Gradient.Linear> = {
  component: Gradient.Linear,
  decorators: [StorybookControl.getDecorator()],
}
export default meta
export const LinearDefault: StoryObj<typeof Gradient.Linear> = {
  render: () => (
    <Gradient.Linear>
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
export const LinearRight: StoryObj<typeof Gradient.Linear> = {
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
