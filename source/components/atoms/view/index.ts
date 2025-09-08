import { Platform } from 'react-native'
import type {
  ViewComponent,
  ViewLayoutEvent,
  ViewProperties,
} from './view.types'

export const View: ViewComponent = Platform.select({
  native: () => require('./view.native').default,
  web: () => require('./view.web').default,
})()

export type { ViewComponent, ViewLayoutEvent, ViewProperties }
