import { renderHook } from '@testing-library/react-native'
import type { PropsWithChildren } from 'react'
import { IconContext, useIconContext } from './icon.context'

describe('@/components/atoms/icon', () => {
  describe('icon.context', () => {
    describe('useIconContext', () => {
      it('throws when used outside provider', () => {
        expect(() => renderHook(() => useIconContext())).toThrow(
          "Can't use icon context outside of its provider!",
        )
      })

      it('returns context value when inside provider', () => {
        const colorValue = 'rgb(25,25,30)' as const
        const wrapper = ({ children }: PropsWithChildren) => (
          <IconContext.Provider value={{ colorValue }}>
            {children}
          </IconContext.Provider>
        )
        const { result } = renderHook(() => useIconContext(), { wrapper })
        expect(result.current.colorValue).toBe(colorValue)
      })
    })
  })
})
