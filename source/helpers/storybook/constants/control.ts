/**
 * Storybook control type enum for control helper.
 * Should be used to build control instead of literal values.
 * Feel free to extend this enum with new control types if required.
 */
export const enum StorybookControlType {
  SELECT = 'select',
  TEXT = 'text',
  NUMBER = 'number',
}

/**
 * Storybook control undefined option.
 * Optional enum controls are supposed to have undefined value option.
 * This option is supposed to be mapped to undefined value in control mapping.
 */
export const STORYBOOK_CONTROL_UNDEFINED_OPTION = '-'

export const STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG =
  'IS_STORYBOOK_CONTROL_NUMERIC_ENUM_CONTROL'
export const STORYBOOK_CONTROL_POSITION_FLAG =
  'IS_STORYBOOK_CONTROL_POSITION_CONTROL'
export const STORYBOOK_CONTROL_OPACITY_FLAG =
  'IS_STORYBOOK_CONTROL_OPACITY_CONTROL'
export const STORYBOOK_CONTROL_SIZE_FLAG = 'IS_STORYBOOK_CONTROL_SIZE_CONTROL'
