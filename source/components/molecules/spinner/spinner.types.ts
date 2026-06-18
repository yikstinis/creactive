import type { IconSize } from '@/constants'
import type { FunctionComponent } from 'react'
import type { SpinnerColor } from './constants'

export type SpinnerProperties = {
  testId?: string
  size?: IconSize
  color?: SpinnerColor
}

export type SpinnerComponent = FunctionComponent<SpinnerProperties> & {
  Size: Record<keyof typeof IconSize, IconSize>
  Color: Record<keyof typeof SpinnerColor, SpinnerColor>
}
