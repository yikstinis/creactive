import { Platform } from 'react-native'
import type { PressableComponent } from './pressable.types'

export const Pressable: PressableComponent = Platform.select({
  native: require('./pressable.native').Pressable,
  web: require('./pressable.web').Pressable,
})

export { usePressableContext } from './pressable.context'
export type {
  PressEvent,
  PressableComponent,
  PressableContextValue,
  PressableProperties,
} from './pressable.types'
