import { useMemo } from 'react'
import { useWindowDimensions } from 'react-native'
import { MediaBreakpoint } from '../constants'

export const useMediaBreakpoint = (
  breakpointMD: number,
  breakpointLG: number,
  breakpointXL: number
) => {
  const { width } = useWindowDimensions()
  // Returning memorized breakpoint, based on current width.
  return useMemo(() => {
    // Mobile first breakpoint switching ierarchy.
    if (width >= breakpointXL) return MediaBreakpoint.XL
    if (width >= breakpointLG) return MediaBreakpoint.LG
    if (width >= breakpointMD) return MediaBreakpoint.MD
  }, [width >= breakpointXL, width >= breakpointLG, width >= breakpointMD])
}
