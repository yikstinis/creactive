import { Platform } from 'react-native'
import type { MediaComponent } from './media.types'

export const Media: MediaComponent = Platform.select({
  web: require('./media.web').default,
  default: require('./media.native').default,
})
export type { MediaComponent, MediaProps } from './media.types'
