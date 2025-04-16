import { TestPlatfrom } from '@/utilities'
import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { ViewBorderRadius, ViewBorderWidth } from '../constants'
import {
  useViewBorderRadiusCSSValue,
  useViewBorderRadiusStyle,
  useViewBorderWidthStyle,
  useViewBorderWidthTokenValue,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view border width style', () => {
    it('returns undefined border width style', () => {
      const { result } = renderHook(() => useViewBorderWidthStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns small border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual({
        borderWidth: 0.5,
      })
    })

    it('returns medium border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual({
        borderWidth: 1,
      })
    })

    it('returns large border width style', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthStyle(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual({
        borderWidth: 1.5,
      })
    })
  })

  describe('use view border width token value', () => {
    it('returns undefined border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(undefined)
      )
      expect(result.current).toEqual(0)
    })

    it('returns small border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(ViewBorderWidth.SM)
      )
      expect(result.current).toEqual(0.5)
    })

    it('returns medium border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(ViewBorderWidth.MD)
      )
      expect(result.current).toEqual(1)
    })

    it('returns large border width token value', () => {
      const { result } = renderHook(() =>
        useViewBorderWidthTokenValue(ViewBorderWidth.LG)
      )
      expect(result.current).toEqual(1.5)
    })
  })

  describe('use view border radius style', () => {
    it('returns undefined border radius style', () => {
      const { result } = renderHook(() => useViewBorderRadiusStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns extra-small border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.XS)
      )
      expect(result.current).toEqual({
        borderRadius: 2,
      })
    })

    it('returns small border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.SM)
      )
      expect(result.current).toEqual({
        borderRadius: 4,
      })
    })

    it('returns medium border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.MD)
      )
      expect(result.current).toEqual({
        borderRadius: 6,
      })
    })

    it('returns large border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.LG)
      )
      expect(result.current).toEqual({
        borderRadius: 8,
      })
    })

    it('returns extra-large border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.XL)
      )
      expect(result.current).toEqual({
        borderRadius: 10,
      })
    })

    it('returns maximum border radius style', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusStyle(ViewBorderRadius.MAX)
      )
      expect(result.current).toEqual({
        borderRadius: '50%',
      })
    })
  })

  describe('use view border radius CSS value', () => {
    it('returns undefined border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns extra-small border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.XS)
      )
      expect(result.current).toEqual('2px')
    })

    it('returns small border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.SM)
      )
      expect(result.current).toEqual('4px')
    })

    it('returns medium border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.MD)
      )
      expect(result.current).toEqual('6px')
    })

    it('returns large border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.LG)
      )
      expect(result.current).toEqual('8px')
    })

    it('returns extra-large border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.XL)
      )
      expect(result.current).toEqual('10px')
    })

    it('returns maximum border radius CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderRadiusCSSValue(ViewBorderRadius.MAX)
      )
      expect(result.current).toEqual('50%')
    })
  })

  describe('view border width', () => {
    it('renders undefined border width', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 0,
      })
    })

    it('renders small border width', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 0.5,
      })
    })

    it('renders medium border width', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 1,
      })
    })

    it('renders large border width', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderWidth={View.BorderWidth.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderWidth: 1.5,
      })
    })
  })

  describe('view border radius', () => {
    it('renders undefined border radius', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: undefined,
      })
    })

    it('renders extra-small border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.XS}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(2),
      })
    })

    it('renders small border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.SM}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(4),
      })
    })

    it('renders medium border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.MD}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(6),
      })
    })

    it('renders large border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.LG}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(8),
      })
    })

    it('renders extra-large border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.XL}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: TestPlatfrom.toPixels(10),
      })
    })

    it('renders maximum border radius', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderRadius={View.BorderRadius.MAX}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderRadius: '50%',
      })
    })
  })
})
