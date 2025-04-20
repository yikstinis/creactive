import { Opacity } from '@/helpers/opacity'
import { Position } from '@/helpers/position'
import { Size } from '@/helpers/size'
import { faker } from '@faker-js/faker'
import type { Decorator, StoryContext } from '@storybook/react'
import {
  STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG,
  STORYBOOK_CONTROL_OPACITY_FLAG,
  STORYBOOK_CONTROL_POSITION_FLAG,
  STORYBOOK_CONTROL_SIZE_FLAG,
  STORYBOOK_CONTROL_UNDEFINED_OPTION,
  StorybookControlType,
} from './constants'
import { renderLayout } from './helpers'

export const modifyContext = (context: StoryContext) => {
  const args = {
    ...context.args,
  }
  for (const key of Object.keys(context.argTypes)) {
    if (typeof context.argTypes[key] === 'object') {
      const control = context.argTypes[key].control as {
        // The only flag, we are interested in..
        [STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]?: boolean
        [STORYBOOK_CONTROL_POSITION_FLAG]?: boolean
        [STORYBOOK_CONTROL_OPACITY_FLAG]?: boolean
        [STORYBOOK_CONTROL_SIZE_FLAG]?: boolean
        // We don't care about everything else inside this type..
        [key: string | number | symbol]: unknown
      }
      if (control[STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]) {
        if (typeof args[key] === 'string') {
          args[key] =
            args[key] === STORYBOOK_CONTROL_UNDEFINED_OPTION
              ? undefined
              : Number(args[key])
        }
      } else if (control[STORYBOOK_CONTROL_POSITION_FLAG]) {
        if (isNaN(Number(args[key]))) {
          args[key] = undefined
        } else {
          args[key] = new Position(
            args[key] as number,
            Position.Dimension.PIXEL
          )
        }
      } else if (control[STORYBOOK_CONTROL_OPACITY_FLAG]) {
        if (isNaN(Number(args[key]))) {
          args[key] = undefined
        } else {
          args[key] = new Opacity(args[key] as number)
        }
      } else if (control[STORYBOOK_CONTROL_SIZE_FLAG]) {
        if (isNaN(Number(args[key]))) {
          args[key] = undefined
        } else {
          args[key] = new Size(args[key] as number, Size.Dimension.PIXEL)
        }
      }
    }
  }
  return {
    ...context,
    args,
  }
}

/**
 * Storybook control utilities.
 * Collected into a single class for convenient import.
 * Helps to build storybook control objects for components stories.
 */
export const StorybookControl = new (class {
  /**
   * Builds a story object form provided numeric enum.
   * Numeric enum will be mapped to storybook select control.
   *
   * @param target - target numeric enum for control
   * @param isOptional - whether control is optional
   */
  public fromNumericEnum(target: Record<string, number>, isOptional = true) {
    const options = Object.values(target).filter(
      (value) => !isNaN(Number(value))
    )
    const keys = Object.keys(target).filter((value) => isNaN(Number(value)))
    if (isOptional) options.unshift(undefined)
    const labels: Record<number, string> = {}
    for (const key of keys) labels[target[key]] = key
    labels[undefined as number] = STORYBOOK_CONTROL_UNDEFINED_OPTION
    return {
      control: {
        // Passing flag to handle numeric enum inside decorator.
        [STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]: true,
        type: StorybookControlType.SELECT,
        labels,
      },
      options,
      defaultValue: options[0],
    }
  }

  public forPosition(defaultValue?: number) {
    return {
      control: {
        [STORYBOOK_CONTROL_POSITION_FLAG]: true,
        // We are using text type instead of number.
        // There are unsetting issues with number type.
        // When clear the field it passes 0 instead of undefined when numeric.
        type: StorybookControlType.TEXT,
      },
      defaultValue: defaultValue as unknown as Position,
    }
  }

  public forOpacity(defaultValue?: number) {
    return {
      control: {
        [STORYBOOK_CONTROL_OPACITY_FLAG]: true,
        // We are using text type instead of number.
        // There are unsetting issues with number type.
        // When clear the field it passes 0 instead of undefined when numeric.
        type: StorybookControlType.TEXT,
      },
      defaultValue: defaultValue as unknown as Opacity,
    }
  }

  public forSize(defaultValue?: number) {
    return {
      control: {
        [STORYBOOK_CONTROL_SIZE_FLAG]: true,
        // We are using text type instead of number.
        // There are unsetting issues with number type.
        // When clear the field it passes 0 instead of undefined when numeric.
        type: StorybookControlType.TEXT,
      },
      defaultValue: defaultValue as unknown as Size,
    }
  }

  /**
   * Builds a story object for numeric input control.
   * Numeric input will be mapped to storybook number control.
   *
   * @param defaultValue - can be provided to set default value
   */
  public forNumber(defaultValue?: number) {
    return {
      control: {
        type: StorybookControlType.NUMBER,
      },
      defaultValue,
    }
  }

  /**
   * Returns default children control.
   * Keeps storybook control factory logic together.
   * Also allows to avoid faker import in every story file.
   */
  public forChildren() {
    return {
      control: {
        type: StorybookControlType.TEXT,
      },
      defaultValue: faker.lorem.words(2),
    }
  }

  /**
   * Rendering layout method.
   * Supposed to be used in stories as children.
   * Sometimes insetad of using control we prefer this method.
   */
  public renderLayout(amount: number = 3) {
    return renderLayout(amount)
  }

  /**
   * Returns decorator for storybook stories.
   * This decorator should apply some context modifications.
   */
  public getDecorator(): Decorator {
    return (Story, context) => {
      return Story(modifyContext(context))
    }
  }
})()
