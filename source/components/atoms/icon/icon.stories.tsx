import { StorybookControl } from '.storybook/control'
import type { Meta, StoryObj } from '@storybook/react'
import { Rect } from 'react-native-svg'
import type { IconProperties } from '.'
import { Icon, useIconContext } from '.'

const boxControl = StorybookControl.fromNumericEnum(Icon.Size)
const sizeControl = StorybookControl.fromNumericEnum(Icon.Size)
const colorControl = StorybookControl.fromNumericEnum(Icon.Color)

const meta: Meta<typeof Icon> = {
  component: Icon,
  decorators: [StorybookControl.getDecorator()],
  argTypes: {
    box: boxControl,
    size: sizeControl,
    color: colorControl,
  },
  args: {
    box: boxControl.defaultValue,
    size: sizeControl.defaultValue,
    color: colorControl.defaultValue,
  },
}
export default meta
export const DefaultState: StoryObj<typeof Icon> = {
  render: (args: IconProperties) => (
    <Icon {...args}>
      <IconRect />
    </Icon>
  ),
}

function IconRect() {
  const iconContext = useIconContext()

  return (
    <Rect
      x='5'
      y='5'
      width='14'
      height='14'
      fill={iconContext.colorValue}
    />
  )
}
