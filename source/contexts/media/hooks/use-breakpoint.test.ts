import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import { Dimensions } from 'react-native'
import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_XL,
  MediaBreakpoint,
} from '../constants'
import { useMediaBreakpoint } from './use-breakpoint'

const isWeb = process.env.npm_lifecycle_event === 'test:web'

const mockWidth = (width: number) => {
  if (isWeb) {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      configurable: true,
      value: width,
    })
    window.dispatchEvent(new Event('resize'))
  } else {
    Dimensions.set({
      window: {
        width,
        height: 768,
        scale: 1,
        fontScale: 1,
      },
    })
  }
}

describe('@/contexts/media', () => {
  describe('hooks/use-breakpoint', () => {
    const breakpointMD = faker.number.int({
      min: BREAKPOINT_MD * 0.5,
      max: BREAKPOINT_MD,
    })

    const breakpointLG = faker.number.int({
      min: breakpointMD + 1,
      max: BREAKPOINT_LG,
    })

    const breakpointXL = faker.number.int({
      min: breakpointLG + 1,
      max: BREAKPOINT_XL,
    })

    it('returns undefined when width is below MD breakpoint', () => {
      mockWidth(breakpointMD - 1)
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBeUndefined()
    })

    it('returns MD when width equals MD breakpoint', () => {
      mockWidth(breakpointMD)
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBe(MediaBreakpoint.MD)
    })

    it('returns MD when width is between MD and LG breakpoints', () => {
      mockWidth(breakpointLG - 1)
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBe(MediaBreakpoint.MD)
    })

    it('returns LG when width equals LG breakpoint', () => {
      mockWidth(breakpointLG)
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBe(MediaBreakpoint.LG)
    })

    it('returns LG when width is between LG and XL breakpoints', () => {
      mockWidth(breakpointXL - 1)
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBe(MediaBreakpoint.LG)
    })

    it('returns XL when width equals XL breakpoint', () => {
      mockWidth(breakpointXL)
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBe(MediaBreakpoint.XL)
    })

    it('returns XL when width exceeds XL breakpoint', () => {
      mockWidth(breakpointXL + faker.number.int({ min: 1, max: 1000 }))
      const { result } = renderHook(() =>
        useMediaBreakpoint(breakpointMD, breakpointLG, breakpointXL),
      )
      expect(result.current).toBe(MediaBreakpoint.XL)
    })
  })
})
