import { MediaBreakpoint } from '../../constants'
import { useMediaContext } from '../../media'
import type { MediaComponent } from './media.types'

// Native media component whithout any tricks.
const Media: MediaComponent = ({ isDefault, breakpoint, children }) => {
  const mediaContext = useMediaContext()
  if (isDefault && mediaContext.breakpoint === undefined) return children
  if (mediaContext.breakpoint === breakpoint) return children
}
Media.Breakpoint = MediaBreakpoint
export default Media
