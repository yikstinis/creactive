import type { Color } from '@/types'
import type { FunctionComponent } from 'react'
import type { IconColor, IconName, IconSize } from './constants'

export interface IconProperties {
  testId?: string
  name: IconName
  size: IconSize
  color?: IconColor
}
export type IconComponent = FunctionComponent<IconProperties> & {
  Name: Record<keyof typeof IconName, IconName>
  Size: Record<keyof typeof IconSize, IconSize>
  Color: Record<keyof typeof IconColor, IconColor>
}

export interface IconComponentProperties extends BaseIconProperties {
  testId?: string
  color: Color
  size: number
}
