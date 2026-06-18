import { IconColor } from '@/components/atoms/icon'
import { renderHook } from '@testing-library/react-native'
import { SpinnerColor } from '../constants'
import { useSpinnerColorValue } from './use-color'

describe('@/components/molecules/spinner', () => {
  describe('hooks/use-color', () => {
    describe('useSpinnerColorValue', () => {
      it('maps base 100 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_100),
        )
        expect(result.current).toBe(IconColor.BASE_100)
      })

      it('maps base 200 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_200),
        )
        expect(result.current).toBe(IconColor.BASE_200)
      })

      it('maps base 300 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_300),
        )
        expect(result.current).toBe(IconColor.BASE_300)
      })

      it('maps base 400 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_400),
        )
        expect(result.current).toBe(IconColor.BASE_400)
      })

      it('maps base 500 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_500),
        )
        expect(result.current).toBe(IconColor.BASE_500)
      })

      it('maps base 600 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_600),
        )
        expect(result.current).toBe(IconColor.BASE_600)
      })

      it('maps base 700 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_700),
        )
        expect(result.current).toBe(IconColor.BASE_700)
      })

      it('maps base 800 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_800),
        )
        expect(result.current).toBe(IconColor.BASE_800)
      })

      it('maps base 900 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.BASE_900),
        )
        expect(result.current).toBe(IconColor.BASE_900)
      })

      it('maps inverse 100 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_100),
        )
        expect(result.current).toBe(IconColor.INVERSE_100)
      })

      it('maps inverse 200 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_200),
        )
        expect(result.current).toBe(IconColor.INVERSE_200)
      })

      it('maps inverse 300 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_300),
        )
        expect(result.current).toBe(IconColor.INVERSE_300)
      })

      it('maps inverse 400 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_400),
        )
        expect(result.current).toBe(IconColor.INVERSE_400)
      })

      it('maps inverse 500 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_500),
        )
        expect(result.current).toBe(IconColor.INVERSE_500)
      })

      it('maps inverse 600 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_600),
        )
        expect(result.current).toBe(IconColor.INVERSE_600)
      })

      it('maps inverse 700 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_700),
        )
        expect(result.current).toBe(IconColor.INVERSE_700)
      })

      it('maps inverse 800 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_800),
        )
        expect(result.current).toBe(IconColor.INVERSE_800)
      })

      it('maps inverse 900 spinner color to icon color', () => {
        const { result } = renderHook(() =>
          useSpinnerColorValue(SpinnerColor.INVERSE_900),
        )
        expect(result.current).toBe(IconColor.INVERSE_900)
      })
    })
  })
})
