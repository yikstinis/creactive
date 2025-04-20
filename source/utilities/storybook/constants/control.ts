/**
 * Storybook control type enum for control helper.
 * Should be used to build control instead of literal values.
 */
export const enum StorybookControlType {
  SELECT = 'select',
  TEXT = 'text',
  NUMBER = 'number',
}

// Undefined control option.
export const STORYBOOK_CONTROL_UNDEFINED_OPTION = '-'

// Flags to identify specific control in modifier.
export const STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG =
  'IS_STORYBOOK_CONTROL_NUMERIC_ENUM_CONTROL'
export const STORYBOOK_CONTROL_POSITION_FLAG =
  'IS_STORYBOOK_CONTROL_POSITION_CONTROL'
export const STORYBOOK_CONTROL_OPACITY_FLAG =
  'IS_STORYBOOK_CONTROL_OPACITY_CONTROL'
export const STORYBOOK_CONTROL_SIZE_FLAG = 'IS_STORYBOOK_CONTROL_SIZE_CONTROL'
