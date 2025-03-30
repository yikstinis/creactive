import { Platform } from 'react-native'
import type { MediaComponent } from './media.types'

export const Media: MediaComponent = Platform.select({
  web: require('./media.web'),
  default: require('./media.native'),
})
export type { MediaComponent, MediaProps } from './media.types'
