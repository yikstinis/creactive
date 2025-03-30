import { Platform } from 'react-native'

export const Media = Platform.select({
  web: require('./media.web'),
  default: require('./media.native'),
})

export type { MediaComponent, MediaProps } from './media.types'
