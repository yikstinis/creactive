import { Platform } from 'react-native'
import type { WrapperComponent } from './wrapper.types'

export const Wrapper: WrapperComponent = Platform.select({
  web: require('./wrapper.web').default,
  default: require('./wrapper.native').default,
})
