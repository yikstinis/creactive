/**
 * Storybook control type enum for control helper.
 * Should be used to build control instead of literal values.
 * Feel free to extend this enum with new control types if required.
 */
export const enum StorybookControlType {
  SELECT = 'select',
  TEXT = 'text',
}

/**
 * Storybook control undefined option.
 * Optional enum controls are supposed to have undefined value option.
 * This option is supposed to be mapped to undefined value in control mapping.
 */
export const STORYBOOK_CONTROL_UNDEFINED_OPTION = '-'

/**
 * Storybook control numeric enum flag.
 * We pass this flag throug storybook inside control object.
 * Allows to handle this flag later, inside decorator if we need.
 */
export const STORYBOOK_CONTROL_NUMERIC_ENUM_FLAG =
  'isCreactiveStorybookNumericEnum'
