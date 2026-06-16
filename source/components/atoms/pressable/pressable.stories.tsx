import { StorybookControl } from '.storybook/control'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from 'react-native'
import { Pressable, usePressableContext } from '.'

const PressableContent = () => {
  const pressableContext = usePressableContext()

  return (
    <Text>
      {JSON.stringify({
        isPressedIn: pressableContext.isPressedIn,
      })}
    </Text>
  )
}

const meta: Meta<typeof Pressable> = {
  component: Pressable,
  decorators: [StorybookControl.getDecorator()],
}
export default meta
export const DefaultState: StoryObj<typeof Pressable> = {
  render: (args) => (
    <Pressable {...args}>
      <PressableContent />
    </Pressable>
  ),
}
