import { render, renderHook, screen } from '@testing-library/react-native'
import type { PropsWithChildren } from 'react'
import { Rect } from 'react-native-svg'
import { Icon, useIconContext } from '.'

describe('@/components/atoms/icon', () => {
  describe('test id property', () => {
    it('renders with provided test id', () => {
      const testId = randomTestId()
      render(<Icon testId={testId} />)
      expect(screen.getByTestId(testId)).toBeTruthy()
    })
  })

  describe('children property', () => {
    it('renders provided children', () => {
      const testId = randomTestId()
      const childTestId = randomTestId()
      render(
        <Icon testId={testId}>
          <Rect testID={childTestId} />
        </Icon>,
      )
      expect(screen.getByTestId(childTestId)).toBeTruthy()
    })
  })

  describe('color context value', () => {
    it('provides base 800 foreground color by default', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(25,25,30)')
    })

    it('provides base 100 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_100}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(200,200,205)')
    })

    it('provides base 200 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_200}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(175,175,180)')
    })

    it('provides base 300 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_300}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(150,150,155)')
    })

    it('provides base 400 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_400}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(125,125,130)')
    })

    it('provides base 500 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_500}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(100,100,105)')
    })

    it('provides base 600 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_600}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(75,75,80)')
    })

    it('provides base 700 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_700}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(50,50,55)')
    })

    it('provides base 800 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_800}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(25,25,30)')
    })

    it('provides base 900 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.BASE_900}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(0,0,5)')
    })

    it('provides inverse 100 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_100}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(75,75,80)')
    })

    it('provides inverse 200 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_200}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(100,100,105)')
    })

    it('provides inverse 300 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_300}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(125,125,130)')
    })

    it('provides inverse 400 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_400}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(150,150,155)')
    })

    it('provides inverse 500 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_500}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(175,175,180)')
    })

    it('provides inverse 600 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_600}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(200,200,205)')
    })

    it('provides inverse 700 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_700}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(225,225,230)')
    })

    it('provides inverse 800 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_800}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(250,250,255)')
    })

    it('provides inverse 900 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.INVERSE_900}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(255,255,255)')
    })

    it('provides failure 100 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_100}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(225,200,200)')
    })

    it('provides failure 200 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_200}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(220,175,175)')
    })

    it('provides failure 300 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_300}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(215,150,150)')
    })

    it('provides failure 400 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_400}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(210,125,125)')
    })

    it('provides failure 500 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_500}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(205,100,100)')
    })

    it('provides failure 600 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_600}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(200,75,75)')
    })

    it('provides failure 700 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_700}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(195,50,50)')
    })

    it('provides failure 800 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_800}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(190,25,25)')
    })

    it('provides failure 900 foreground color', () => {
      const wrapper = ({ children }: PropsWithChildren) => (
        <Icon color={Icon.Color.FAILURE_900}>{children}</Icon>
      )
      const { result } = renderHook(() => useIconContext(), { wrapper })
      expect(result.current.color).toBe('rgb(185,0,0)')
    })
  })
})
