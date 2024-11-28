import { faker } from '@faker-js/faker'
import type { StoryObj } from '@storybook/react'
import { Text } from './text'

export default {
  component: Text,
}

export const DefaultState: StoryObj<typeof Text> = {
  args: {
    children: faker.lorem.words(2),
  },
}
