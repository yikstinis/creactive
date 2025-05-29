/**
 * View flex wrap enumerated constants.
 * Should be used to control how children are wrapped in the flex container.
 */
export enum ViewFlexWrap {
  NONE,
  WRAP,
}

/**
 * View flex direction enumerated constants.
 * Should be used to define flex container primary axis.
 */
export enum ViewFlexDirection {
  COLUMN,
  ROW,
}

/**
 * Supported justify content values.
 * Should be used to control spacing between and around items.
 * Allows to define how children are distributed along the main axis.
 */
export enum ViewJustifyContent {
  FLEX_START,
  FLEX_END,
  CENTER,
  SPACE_BETWEEN,
  SPACE_AROUND,
  SPACE_EVENLY,
}

/**
 * View align items enumerated constants.
 * Should be used to control how children are aligned along the cross axis.
 * Affects the vertical alignment in a row and horizontal alignment in a column.
 */
export enum ViewAlignItems {
  FLEX_START,
  FLEX_END,
  CENTER,
  STRETCH,
  BASELINE,
}

/**
 * View align self constants.
 * Should be used to override individual child alignment along the cross axis.
 * Takes precedence over the container's alignItems setting.
 */
export enum ViewAlignSelf {
  FLEX_START,
  FLEX_END,
  CENTER,
  STRETCH,
  BASELINE,
}

/**
 * Supported align content enumerated values.
 * Should be used when there are multiple lines of items.
 * Controls how lines are distributed along the cross axis.
 */
export enum ViewAlignContent {
  FLEX_START,
  FLEX_END,
  CENTER,
  STRETCH,
  SPACE_BETWEEN,
  SPACE_AROUND,
}
