import { Platform } from 'react-native'
import type { ViewComponent } from './view.types'

// Export platform-specific component version.
export const View: ViewComponent = Platform.select({
  native: () => require('./view.native').default,
  web: () => require('./view.web').default,
})()
