import { useEffect, useState } from 'react'
import { MediaBreakpoint } from '../../constants'
import { useMediaContext } from '../../media'
import type { MediaComponent } from './media.types'

// Web media component with server side rendering support.
const Media: MediaComponent = ({ isDefault, breakpoint, children }) => {
  const mediaContext = useMediaContext()
  const [isHydrated, setHydrated] = useState(false)

  // Updating hydration flag
  useEffect(() => {
    setHydrated(true)
  }, [])

  // Hydration completed, we have window object and we already rendered once.
  // Server and client first renders matched (but hidden by wrapper).
  // We can switch to correct media content now safely.
  if (isHydrated) {
    if (isDefault && mediaContext.breakpoint === undefined) return children
    if (mediaContext.breakpoint === breakpoint) return children
  } else if (isDefault) {
    // During first or server render we return default media children only.
    return children
  }
}
Media.Breakpoint = MediaBreakpoint
export default Media
