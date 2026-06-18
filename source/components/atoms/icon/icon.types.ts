import type { Color } from '@/types/color.types'
import type { FunctionComponent, PropsWithChildren } from 'react'
import type { IconColor, IconSize } from './constants'

export type IconContextValue = {
  color: Color
}

export type IconProperties = PropsWithChildren<{
  testId?: string
  box?: IconSize
  size?: IconSize
  color?: IconColor
}>

export type IconComponent = FunctionComponent<IconProperties> & {
  Size: Record<keyof typeof IconSize, IconSize>
  Color: Record<keyof typeof IconColor, IconColor>
}
