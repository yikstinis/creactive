import { Platform } from 'react-native'
import { Media as MediaNative } from './media.native'
import type { MediaComponent } from './media.types'
import { Media as MediaWeb } from './media.web'

export const Media: MediaComponent = Platform.select({
  web: MediaWeb,
  default: MediaNative,
})
export type { MediaComponent, MediaProps } from './media.types'
