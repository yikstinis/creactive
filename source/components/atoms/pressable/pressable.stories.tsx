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
const borderRadiusControl = StorybookControl.fromNumericEnum(
  Pressable.BorderRadius,
)
const borderRadiusTopLeftControl = StorybookControl.fromNumericEnum(
  Pressable.BorderRadius,
)
const borderRadiusTopRightControl = StorybookControl.fromNumericEnum(
  Pressable.BorderRadius,
)
const borderRadiusBottomLeftControl = StorybookControl.fromNumericEnum(
  Pressable.BorderRadius,
)
const borderRadiusBottomRightControl = StorybookControl.fromNumericEnum(
  Pressable.BorderRadius,
)

const meta: Meta<typeof Pressable> = {
  component: Pressable,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    isDisabled: isDisabledControl,
    tag: tagControl,
    href: hrefControl,
    borderRadius: borderRadiusControl,
    borderRadiusTopLeft: borderRadiusTopLeftControl,
    borderRadiusTopRight: borderRadiusTopRightControl,
    borderRadiusBottomLeft: borderRadiusBottomLeftControl,
    borderRadiusBottomRight: borderRadiusBottomRightControl,
  },
  args: {
    isDisabled: isDisabledControl.defaultValue,
    tag: tagControl.defaultValue,
    href: hrefControl.defaultValue,
    borderRadius: borderRadiusControl.defaultValue,
    borderRadiusTopLeft: borderRadiusTopLeftControl.defaultValue,
    borderRadiusTopRight: borderRadiusTopRightControl.defaultValue,
    borderRadiusBottomLeft: borderRadiusBottomLeftControl.defaultValue,
    borderRadiusBottomRight: borderRadiusBottomRightControl.defaultValue,
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
