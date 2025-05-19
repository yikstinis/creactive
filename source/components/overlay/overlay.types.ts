import type { FunctionComponent, PropsWithChildren } from 'react'

export interface OverlayProps extends PropsWithChildren {
  isPressable?: boolean
  isVisible: boolean
  onPress?(): void
}
export type OverlayComponent = FunctionComponent<OverlayProps>
