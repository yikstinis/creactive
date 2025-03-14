import { faker } from '@faker-js/faker'
import type { Decorator, StoryContext } from '@storybook/react'
import {
  STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG,
  STORYBOOK_CONTROL_UNDEFINED_OPTION,
  StorybookControlType,
} from './constants'

/**
 * Modifies context arguments to handle numeric enum controls.
 * Numeric enum values are passed as strings by storybook controls.
 * Seems like this happens because of select control implementation.
 * This method is exported for test here, but should not be exported ouside.
 */
export const modifyContextNumericEnumControls = (context: StoryContext) => {
  const args = {
    ...context.args,
  }
  for (const key of Object.keys(context.argTypes)) {
    if (typeof context.argTypes[key] === 'object') {
      const control = context.argTypes[key].control as {
        // The only flag, we are interested in..
        [STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG]?: boolean
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
      }
    }
  }
  return {
    ...context,
    args,
  }
}

/**
 * Storybook control helpers.
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
  public fromNumericEnum(target: Record<string, number>, isOptional = false) {
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
   * Returns decorator for storybook stories.
   * This decorator should apply some context modifications.
   */
  public getDecorator(): Decorator {
    return (Story, context) => {
      return Story(modifyContextNumericEnumControls(context))
    }
  }
})()
