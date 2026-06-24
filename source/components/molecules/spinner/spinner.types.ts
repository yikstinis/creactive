import type { IconSize } from '@/constants'
import type { FunctionComponent } from 'react'
import type { SpinnerColor } from './constants'

/**
 * Spinner children render prop interface.
 * Passed to children to reflect the spinner's disabled state.
 */
export type SpinnerChildrenProperties = {
  isDisabled: boolean
}

export type SpinnerProperties = {
  /**
   * Allows to select spinner in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Controls whether the spinner is in a disabled state.
   * Passed down to children via render prop.
   * @default undefined
   */
  isDisabled?: boolean
  /**
   * Size of the spinner.
   * @see Spinner.Size
   * @default undefined
   */
  size?: IconSize
  /**
   * Color of the spinner.
   * @see Spinner.Color
   * @default undefined
   */
  color?: SpinnerColor
}

export type SpinnerComponent = FunctionComponent<SpinnerProperties> & {
  Size: Record<keyof typeof IconSize, IconSize>
  Color: Record<keyof typeof SpinnerColor, SpinnerColor>
}
