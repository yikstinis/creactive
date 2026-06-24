export enum GradientLinearDirection {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
}

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
}
