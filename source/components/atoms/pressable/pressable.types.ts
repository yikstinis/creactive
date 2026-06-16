import type { FunctionComponent, PropsWithChildren } from 'react'
import type { GestureResponderEvent } from 'react-native'

/**
 * Pressable context value interface.
 * Contains current pressed in state of the closest pressable.
 */
export interface PressableContextValue {
  /**
   * Whether the closest pressable is currently pressed in.
   * @default false
   */
  isPressedIn: boolean
}

export interface PressableProperties extends PropsWithChildren {
  /**
   * Allows to select pressable in tests.
   * @default undefined
   */
  testId?: string
  /**
   * Called when the pressable is pressed.
   * @default undefined
   */
  onPress?: (event: GestureResponderEvent) => void
  /**
   * Called when the pressable is pressed in.
   * @default undefined
   */
  onPressIn?: (event: GestureResponderEvent) => void
  /**
   * Called when the pressable is pressed out.
   * @default undefined
   */
  onPressOut?: (event: GestureResponderEvent) => void
}
export type PressableComponent = FunctionComponent<PressableProperties>
