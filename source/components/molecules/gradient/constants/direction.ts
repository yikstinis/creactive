/**
 * Supported gradient linear direction constants.
 * Controls the axis and orientation of the linear gradient transition.
 * @see {@link GradientLinearComponent.Direction}
 */
export enum GradientLinearDirection {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
}

/**
 * SVG gradient vector coordinates for each {@link GradientLinearDirection}.
 * Maps direction values to x1/y1/x2/y2 attributes for the SVG LinearGradient element.
 */
export const GRADIENT_LINEAR_DIRECTION_COORDINATES = {
  [GradientLinearDirection.TOP]: {
    x1: 0,
    y1: 1,
    x2: 0,
    y2: 0,
  },
  [GradientLinearDirection.LEFT]: {
    x1: 1,
    y1: 0,
    x2: 0,
    y2: 0,
  },
  [GradientLinearDirection.RIGHT]: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  },
  [GradientLinearDirection.BOTTOM]: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1,
  },
  [GradientLinearDirection.TOP_LEFT]: {
    x1: 1,
    y1: 1,
    x2: 0,
    y2: 0,
  },
  [GradientLinearDirection.TOP_RIGHT]: {
    x1: 0,
    y1: 1,
    x2: 1,
    y2: 0,
  },
  [GradientLinearDirection.BOTTOM_LEFT]: {
    x1: 1,
    y1: 0,
    x2: 0,
    y2: 1,
  },
  [GradientLinearDirection.BOTTOM_RIGHT]: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 1,
  },
}
