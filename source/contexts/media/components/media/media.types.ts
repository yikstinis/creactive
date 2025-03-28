import type { FunctionComponent, PropsWithChildren } from 'react'
import type { MediaBreakpoint } from '../../constants'

/**
 * Media default component props.
 * This variant does accept any breakpoint.
 * This props variant will render children on smallest screen.
 * It will also will render children during server-side rendering.
 */
interface MediaDefaultProps extends PropsWithChildren {
  isDefault: true
  breakpoint?: never
}
/**
 * Media breakpoint component props.
 * This variant does accept only one breakpoint.
 * Renders children only on a larger than smallest screen.
 */
interface MediaBreakpointProps extends PropsWithChildren {
  isDefault?: never
  breakpoint: MediaBreakpoint
}
export type MediaProps = MediaDefaultProps | MediaBreakpointProps
export type MediaComponent = FunctionComponent<MediaProps> & {
  Breakpoint: Record<keyof typeof MediaBreakpoint, MediaBreakpoint>
}
