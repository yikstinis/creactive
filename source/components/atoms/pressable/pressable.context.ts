import { createContext, useContext } from 'react'
import type { PressableContextValue } from './pressable.types'

export const PressableContext = createContext<PressableContextValue>({
  isPressedIn: false,
})
export const usePressableContext = () => useContext(PressableContext)
