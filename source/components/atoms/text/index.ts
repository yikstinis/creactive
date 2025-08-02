import { Platform } from 'react-native'
import type { TextComponent, TextProperties, TextReference } from './text.types'

// Export platform-specific component version.
export const Text: TextComponent = Platform.select({
  native: () => require('./text.native').default,
  web: () => require('./text.web').default,
})()
export type { TextComponent, TextProperties, TextReference }
