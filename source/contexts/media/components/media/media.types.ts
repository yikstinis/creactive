import type { FunctionComponent, PropsWithChildren } from 'react'
import type { MediaBreakpoint } from '../../constants'

/**
 * Media default component props.
 * This variant does accept any breakpoint.
 * This props variant will render children on smallest screen.
 * It will also will render children during server-side rendering.
 */
interface MediaDefaultProps extends PropsWithChildren {
  /**
   * Media component default flag.
   * Means this media will render children on smallest screen.
   * Media components with this flag will be also rendered on server.
   */
  isDefault: true
  isOtherwise?: never
  breakpoint?: never
}
/**
 * Media breakpoint component props.
 * This variant does accept only one breakpoint.
 * Renders children only on a larger than smallest screen.
 */
interface MediaBreakpointProps extends PropsWithChildren {
  isDefault?: never
  /**
   * Media component otherwise flag.
   * Means that provided breakpoint supposed to be used as greater or equal.
   * @default false
   */
  isOtherwise?: boolean
  /**
   * Media breakpoint property.
   * Will be used to determine if children should be rendered.
   * This property can also be used in pair with otherwise flag.
   * @default undefined
   */
  breakpoint: MediaBreakpoint
}
export type MediaProps = MediaDefaultProps | MediaBreakpointProps
export type MediaComponent = FunctionComponent<MediaProps> & {
  Breakpoint: Record<keyof typeof MediaBreakpoint, MediaBreakpoint>
}
