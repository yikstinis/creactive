import { MediaBreakpoint } from '../../constants'
import { useMediaContext } from '../../media'
import type { MediaComponent } from './media.types'

// We keep this component closer to media context.
// It makes no sense without context and uses context constants.
export const Media: MediaComponent = ({ isDefault, breakpoint, children }) => {
  const mediaContext = useMediaContext()
  if (isDefault && mediaContext.breakpoint === undefined) return children
  if (mediaContext.breakpoint === breakpoint) return children
}
Media.Breakpoint = MediaBreakpoint
