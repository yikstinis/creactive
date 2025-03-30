import { Platform } from 'react-native'
import { Wrapper as WrapperNative } from './wrapper.native'
import type { WrapperComponent } from './wrapper.types'
import { Wrapper as WrapperWeb } from './wrapper.web'

export const Wrapper: WrapperComponent = Platform.select({
  web: WrapperWeb,
  default: WrapperNative,
})
