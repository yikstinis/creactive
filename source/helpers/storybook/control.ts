import {
  STORYBOOK_CONTROL_UNDEFINED_OPTION,
  StorybookControlType,
} from './constants'

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
    const options = Object.keys(target).filter((value) => isNaN(Number(value)))
    if (isOptional) options.unshift(STORYBOOK_CONTROL_UNDEFINED_OPTION)
    const mapping: Record<string, number | undefined> = {
      [STORYBOOK_CONTROL_UNDEFINED_OPTION]: undefined,
      ...target,
    }
    return {
      control: StorybookControlType.SELECT,
      options,
      mapping,
    }
  }
})()
