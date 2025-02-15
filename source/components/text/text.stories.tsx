import { StorybookControl } from '@/helpers'
import { faker } from '@faker-js/faker'
import type { StoryObj } from '@storybook/react'
import { Text } from './text'

export default {
  component: Text,
  argTypes: {
    type: StorybookControl.fromNumericEnum(Text.Type, true),
  },
  args: {
    children: faker.lorem.words(2),
  },
}

export const DefaultState: StoryObj<typeof Text> = {}
