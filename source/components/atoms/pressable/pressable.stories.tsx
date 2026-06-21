import { StorybookControl } from '.storybook/control'
import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from 'react-native'
import type { PressableProperties } from '.'
import { Pressable, usePressableContext } from '.'

const PressableContent = () => {
  const { isPressedIn } = usePressableContext()
  return <Text>{JSON.stringify({ isPressed: isPressedIn })}</Text>
}

const isDisabledControl = StorybookControl.forBoolean()
const tagControl = StorybookControl.fromNumericEnum(Pressable.Tag)
const hrefControl = StorybookControl.forText(faker.internet.url())

const meta: Meta<typeof Pressable> = {
  component: Pressable,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    isDisabled: isDisabledControl,
    tag: tagControl,
    href: hrefControl,
  },
  args: {
    isDisabled: isDisabledControl.defaultValue,
    tag: tagControl.defaultValue,
    href: hrefControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Pressable> = {
  render: (args: PressableProperties) => (
    <Pressable {...args}>
      <PressableContent />
    </Pressable>
  ),
}
