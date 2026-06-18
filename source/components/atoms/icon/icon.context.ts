import { createContext, useContext } from 'react'
import type { IconContextValue } from './icon.types'

export const IconContext = createContext<IconContextValue | null>(null)

export const useIconContext = () => {
  const context = useContext(IconContext)
  if (context) return context
  throw new Error("Can't use icon context outside of its provider!")
}
