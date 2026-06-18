import { IconColor } from '@/components/atoms/icon'
import { SpinnerColor } from '../constants'

const SPINNER_COLOR_ICON_COLOR: Record<SpinnerColor, IconColor> = {
  [SpinnerColor.BASE_100]: IconColor.BASE_100,
  [SpinnerColor.BASE_200]: IconColor.BASE_200,
  [SpinnerColor.BASE_300]: IconColor.BASE_300,
  [SpinnerColor.BASE_400]: IconColor.BASE_400,
  [SpinnerColor.BASE_500]: IconColor.BASE_500,
  [SpinnerColor.BASE_600]: IconColor.BASE_600,
  [SpinnerColor.BASE_700]: IconColor.BASE_700,
  [SpinnerColor.BASE_800]: IconColor.BASE_800,
  [SpinnerColor.BASE_900]: IconColor.BASE_900,
  [SpinnerColor.INVERSE_100]: IconColor.INVERSE_100,
  [SpinnerColor.INVERSE_200]: IconColor.INVERSE_200,
  [SpinnerColor.INVERSE_300]: IconColor.INVERSE_300,
  [SpinnerColor.INVERSE_400]: IconColor.INVERSE_400,
  [SpinnerColor.INVERSE_500]: IconColor.INVERSE_500,
  [SpinnerColor.INVERSE_600]: IconColor.INVERSE_600,
  [SpinnerColor.INVERSE_700]: IconColor.INVERSE_700,
  [SpinnerColor.INVERSE_800]: IconColor.INVERSE_800,
  [SpinnerColor.INVERSE_900]: IconColor.INVERSE_900,
}

export const useSpinnerColorValue = (color: SpinnerColor): IconColor =>
  SPINNER_COLOR_ICON_COLOR[color]
