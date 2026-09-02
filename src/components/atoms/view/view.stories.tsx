import type { Meta, StoryObj } from '@storybook/react'
import { Text } from 'react-native'

import { View } from '@/components/atoms/view/view'
import { Spacing } from '@/constants/spacing'

const meta: Meta<typeof View> = {
  title: 'Atoms/View',
  component: View,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: '#ddd' }}>
        <Story />
      </View>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof View>

export const Default: Story = {
  args: {
    padding: Spacing.MD,
    style: { backgroundColor: '#8ecae6' },
  },
  render: (args) => (
    <View {...args}>
      <Text>Hello, View</Text>
    </View>
  ),
}
