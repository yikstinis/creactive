import { createContext, useContext } from 'react'
import type { PressableContextValue } from './pressable.types'

// We do support context even outside provider.
// This can be helpful for testing and storybook.
export const PressableContext = createContext<PressableContextValue>({
  isPressedIn: false,
})
export const usePressableContext = () => useContext(PressableContext)
