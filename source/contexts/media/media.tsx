import { createContext, useContext, useMemo } from 'react'
import { Wrapper } from './components'
import { BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_XL } from './constants'
import { useMediaBreakpoint } from './hooks'
import type {
  MediaContextProviderComponent,
  MediaContextValue,
} from './media.types'

const MediaContext = createContext<MediaContextValue>({})

export const MediaContextProvider: MediaContextProviderComponent = ({
  breakpointMD,
  breakpointLG,
  breakpointXL,
  children,
}) => {
  const breakpoint = useMediaBreakpoint(
    breakpointMD ?? BREAKPOINT_MD,
    breakpointLG ?? BREAKPOINT_LG,
    breakpointXL ?? BREAKPOINT_XL
  )
  // Memorizing context value to avoid extra re-renders.
  const value = useMemo(
    () => ({
      breakpoint,
    }),
    [breakpoint]
  )
  return (
    <MediaContext.Provider value={value}>
      <Wrapper>{children}</Wrapper>
    </MediaContext.Provider>
  )
}
export const useMediaContext = () => useContext(MediaContext)
