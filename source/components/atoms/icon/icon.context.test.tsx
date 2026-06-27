import type { RGBColorValue } from '@/helpers/color'
import { faker } from '@faker-js/faker'
import { renderHook } from '@testing-library/react-native'
import type { PropsWithChildren } from 'react'
import { IconContext, useIconContext } from './icon.context'

describe('@/components/atoms/icon', () => {
  describe('icon.context', () => {
    describe('useIconContext', () => {
      it('throws when used outside provider', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {})
        expect(() => renderHook(() => useIconContext())).toThrow(
          "Can't use icon context outside of its provider!",
        )
        jest.restoreAllMocks()
      })

      it('returns context value when inside provider', () => {
        const color =
          `rgb(${faker.number.int({ max: 255 })},${faker.number.int({ max: 255 })},${faker.number.int({ max: 255 })})` satisfies RGBColorValue
        const wrapper = ({ children }: PropsWithChildren) => (
          <IconContext.Provider value={{ color }}>
            {children}
          </IconContext.Provider>
        )
        const { result } = renderHook(() => useIconContext(), { wrapper })
        expect(result.current.color).toBe(color)
      })
    })
  })
})
