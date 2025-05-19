import type { FunctionComponent, PropsWithChildren } from 'react'
import type { OverlayBackgroundColor } from './constants'

export interface OverlayProps extends PropsWithChildren {
  isPressable: boolean
  isVisible: boolean
  backgroundColor?: OverlayBackgroundColor
  onPress?(): void
}
export type OverlayComponent = FunctionComponent<OverlayProps> & {
  BackgroundColor: Record<
    keyof typeof OverlayBackgroundColor,
    OverlayBackgroundColor
  >
}
