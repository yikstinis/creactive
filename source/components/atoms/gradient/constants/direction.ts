export enum GradientDirection {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
}

export const GRADIENT_DIRECTION_COORDINATES = {
  [GradientDirection.TOP]: {
    x1: 0,
    y1: 1,
    x2: 0,
    y2: 0,
  },
  [GradientDirection.LEFT]: {
    x1: 1,
    y1: 0,
    x2: 0,
    y2: 0,
  },
  [GradientDirection.RIGHT]: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
  },
  [GradientDirection.BOTTOM]: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1,
  },
}
