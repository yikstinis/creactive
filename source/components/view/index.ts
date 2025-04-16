import { Platform } from 'react-native'
import type { ViewComponent, ViewProps } from './view.types'

// Export platform-specific component version.
export const View: ViewComponent = Platform.select({
  native: () => require('./view.native').default,
  web: () => require('./view.web').default,
})()

export type { ViewComponent, ViewProps }
