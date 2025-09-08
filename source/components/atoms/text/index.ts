import { Platform } from 'react-native'
import type { TextComponent } from './text.types'

export const Text: TextComponent = Platform.select({
  native: () => require('./text.native').default,
  web: () => require('./text.web').default,
})()
export type {
  TextComponent,
  TextMeasureCallback,
  TextProperties,
  TextReference,
} from './text.types'
