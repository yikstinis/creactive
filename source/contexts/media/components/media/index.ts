import { MediaBreakpoint } from '../../constants'
import { Media } from './media'
import type { MediaComponent } from './media.types'

const MediaWithStatic = Media as MediaComponent
MediaWithStatic.Breakpoint = MediaBreakpoint

export { MediaWithStatic as MediaComponent }
