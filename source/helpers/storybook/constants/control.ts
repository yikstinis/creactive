/**
 * Storybook control type enum for control helper.
 * Should be used to build control instead of literal values.
 */
export const enum StorybookControlType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  SELECT = 'select',
  TEXT = 'text',
}

/**
 * Storybook control undefined option.
 * Optional enum controls are supposed to have undefined value option.
 * This option is supposed to be mapped to undefined value in control mapping.
 */
export const STORYBOOK_CONTROL_UNDEFINED_OPTION = '-'
