import { Platform } from 'react-native'
import type { TransitionComponent, TransitionProperties } from './transition.types'

export const Transition: TransitionComponent = Platform.select({
  native: require('./transition.native').default,
  web: require('./transition.web').default,
})

export type { TransitionComponent, TransitionProperties }
