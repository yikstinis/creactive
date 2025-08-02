import { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { MediaBreakpoint } from '../../constants'
import { useMediaContext } from '../../media'
import type { MediaComponent, MediaProps } from './media.types'

// Breakpoint index object for optimized comparing.
const breakpointIndex = {
  [MediaBreakpoint.MD]: 1,
  [MediaBreakpoint.LG]: 2,
  [MediaBreakpoint.XL]: 3,
}
// Simple comparing breakpoints helper.
// Checks that provided current is greater than provided otherwise breakpoint.
const isGreater = (
  currentBreakpoint: MediaBreakpoint,
  otherwiseBreakpoint: MediaBreakpoint,
) => breakpointIndex[currentBreakpoint] > breakpointIndex[otherwiseBreakpoint]

const MediaBase = Platform.select({
  // Web media component with server side rendering support.
  web: function MediaBaseWeb({
    isDefault,
    isOtherwise,
    breakpoint,
    children,
  }: MediaProps) {
    const mediaContext = useMediaContext()
    // Hydration flag, allows to detect server and first client render.
    const [isHydrated, setHydrated] = useState(false)
    // Update hydration flag after first render.
    useEffect(() => {
      setHydrated(true)
    }, [])
    // Hydration completed, we have window object and we already rendered once.
    // Server and client first renders matched (but hidden by wrapper).
    // We can switch to correct media content now safely.
    if (isHydrated) {
      if (isDefault && mediaContext.breakpoint === undefined) return children
      if (mediaContext.breakpoint === breakpoint) return children
      if (isOtherwise && isGreater(mediaContext.breakpoint, breakpoint)) {
        return children
      }
    } else if (isDefault) {
      // During first or server render we return default media children only.
      return children
    }
  },
  // Native media component whithout any tricks.
  default: function MediaBaseDefault({
    isDefault,
    isOtherwise,
    breakpoint,
    children,
  }: MediaProps) {
    const mediaContext = useMediaContext()
    if (isDefault && mediaContext.breakpoint === undefined) return children
    if (mediaContext.breakpoint === breakpoint) return children
    if (isOtherwise && isGreater(mediaContext.breakpoint, breakpoint)) {
      return children
    }
  },
})

export const Media = MediaBase as MediaComponent
Media.Breakpoint = MediaBreakpoint
