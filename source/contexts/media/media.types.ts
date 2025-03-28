import type { FunctionComponent, PropsWithChildren } from 'react'
import type { MediaBreakpoint } from './constants'

/**
 * Media context value interface.
 * Contains current media breakpoint.
 */
export interface MediaContextValue {
  /**
   * Current media breakpoint.
   * We are using undefined value during server-side rendering.
   * As mobile-first we also use undefined value for the smallest screens.
   * @default undefined
  */
  breakpoint?: MediaBreakpoint
}
interface MediaContextProviderProps extends PropsWithChildren {
  /**
   * Media breakpoint for MD screens.
   * When layout whould switches first time from its smalest version.
   * @default 768
   */
  breakpointMD?: number
  /**
   * Media breakpoint for LG screens.
   * Second layout switch to its large version.
   * @default 1024
   */
  breakpointLG?: number
  /**
   * Media breakpoint for XL screens.
   * Largest layout version - last switch.
   * @default 1280
   */
  breakpointXL?: number
}
export type MediaContextProviderComponent =
  FunctionComponent<MediaContextProviderProps>
