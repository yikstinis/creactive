import { renderHook } from '@testing-library/react-native'
import type { PropsWithChildren } from 'react'
import { PressableContext, usePressableContext } from './pressable.context'

describe('@/components/atoms/pressable', () => {
  describe('pressable.context', () => {
    describe('usePressableContext', () => {
      it('returns false isPressedIn by default', () => {
        const { result } = renderHook(() => usePressableContext())
        expect(result.current.isPressedIn).toBe(false)
      })

      it('returns context value when inside provider', () => {
        const wrapper = ({ children }: PropsWithChildren) => (
          <PressableContext.Provider value={{ isPressedIn: true }}>
            {children}
          </PressableContext.Provider>
        )
        const { result } = renderHook(() => usePressableContext(), { wrapper })
        expect(result.current.isPressedIn).toBe(true)
      })
    })
  })
})
