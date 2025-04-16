import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import { ViewBackgroundColor, ViewBorderColor } from '../constants'
import {
  useViewBackgroundColorCSSValue,
  useViewBackgroundColorStyle,
  useViewBorderColorCSSValue,
  useViewBorderColorStyle,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view border color style', () => {
    it('returns undefined border color style', () => {
      const { result } = renderHook(() => useViewBorderColorStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_100)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(253,252,254)',
      })
    })

    it('returns base 200 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_200)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(249,249,250)',
      })
    })

    it('returns base 300 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_300)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(247,247,249)',
      })
    })

    it('returns base 400 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_400)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(244,244,245)',
      })
    })

    it('returns base 500 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_500)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(224,224,238)',
      })
    })

    it('returns base 600 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_600)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(218,218,234)',
      })
    })

    it('returns base 700 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_700)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(216,216,228)',
      })
    })

    it('returns base 800 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_800)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(212,212,216)',
      })
    })

    it('returns base 900 border color style', () => {
      const { result } = renderHook(() =>
        useViewBorderColorStyle(ViewBorderColor.BASE_900)
      )
      expect(result.current).toEqual({
        borderColor: 'rgb(198,198,202)',
      })
    })
  })

  describe('use view border color CSS value', () => {
    it('returns undefined border color CSS value', () => {
      const { result } = renderHook(() => useViewBorderColorCSSValue(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_100)
      )
      expect(result.current).toEqual('rgb(253,252,254)')
    })

    it('returns base 200 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_200)
      )
      expect(result.current).toEqual('rgb(249,249,250)')
    })

    it('returns base 300 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_300)
      )
      expect(result.current).toEqual('rgb(247,247,249)')
    })

    it('returns base 400 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_400)
      )
      expect(result.current).toEqual('rgb(244,244,245)')
    })

    it('returns base 500 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_500)
      )
      expect(result.current).toEqual('rgb(224,224,238)')
    })

    it('returns base 600 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_600)
      )
      expect(result.current).toEqual('rgb(218,218,234)')
    })

    it('returns base 700 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_700)
      )
      expect(result.current).toEqual('rgb(216,216,228)')
    })

    it('returns base 800 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_800)
      )
      expect(result.current).toEqual('rgb(212,212,216)')
    })

    it('returns base 900 border color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBorderColorCSSValue(ViewBorderColor.BASE_900)
      )
      expect(result.current).toEqual('rgb(198,198,202)')
    })
  })

  describe('use view background color style', () => {
    it('returns undefined background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_100)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(198,198,202)',
      })
    })

    it('returns base 200 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_200)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(212,212,216)',
      })
    })

    it('returns base 300 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_300)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(216,216,228)',
      })
    })

    it('returns base 400 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_400)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(218,218,234)',
      })
    })

    it('returns base 500 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_500)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(224,224,238)',
      })
    })

    it('returns base 600 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_600)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(244,244,245)',
      })
    })

    it('returns base 700 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_700)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(247,247,249)',
      })
    })

    it('returns base 800 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_800)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(249,249,250)',
      })
    })

    it('returns base 900 background color style', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorStyle(ViewBackgroundColor.BASE_900)
      )
      expect(result.current).toEqual({
        backgroundColor: 'rgb(254,254,255)',
      })
    })
  })

  describe('use view background color CSS value', () => {
    it('returns undefined background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(undefined)
      )
      expect(result.current).toEqual(undefined)
    })

    it('returns base 100 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_100)
      )
      expect(result.current).toEqual('rgb(198,198,202)')
    })

    it('returns base 200 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_200)
      )
      expect(result.current).toEqual('rgb(212,212,216)')
    })

    it('returns base 300 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_300)
      )
      expect(result.current).toEqual('rgb(216,216,228)')
    })

    it('returns base 400 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_400)
      )
      expect(result.current).toEqual('rgb(218,218,234)')
    })

    it('returns base 500 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_500)
      )
      expect(result.current).toEqual('rgb(224,224,238)')
    })

    it('returns base 600 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_600)
      )
      expect(result.current).toEqual('rgb(244,244,245)')
    })

    it('returns base 700 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_700)
      )
      expect(result.current).toEqual('rgb(247,247,249)')
    })

    it('returns base 800 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_800)
      )
      expect(result.current).toEqual('rgb(249,249,250)')
    })

    it('returns base 900 background color CSS value', () => {
      const { result } = renderHook(() =>
        useViewBackgroundColorCSSValue(ViewBackgroundColor.BASE_900)
      )
      expect(result.current).toEqual('rgb(254,254,255)')
    })
  })

  describe('view border color', () => {
    it('renders undefined border color', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: undefined,
      })
    })

    it('renders base 100 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_100}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(253,252,254)',
      })
    })

    it('renders base 200 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_200}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(249,249,250)',
      })
    })

    it('renders base 300 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_300}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(247,247,249)',
      })
    })

    it('renders base 400 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_400}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(244,244,245)',
      })
    })

    it('renders base 500 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_500}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(224,224,238)',
      })
    })

    it('renders base 600 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_600}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(218,218,234)',
      })
    })

    it('renders base 700 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_700}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(216,216,228)',
      })
    })

    it('renders base 800 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_800}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(212,212,216)',
      })
    })

    it('renders base 900 border color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          borderColor={View.BorderColor.BASE_900}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: 'rgb(198,198,202)',
      })
    })
  })

  describe('view background color', () => {
    it('renders undefined background color', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: undefined,
      })
    })

    it('renders base 100 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_100}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(198,198,202)',
      })
    })

    it('renders base 200 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_200}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(212,212,216)',
      })
    })

    it('renders base 300 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_300}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(216,216,228)',
      })
    })

    it('renders base 400 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_400}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(218,218,234)',
      })
    })

    it('renders base 500 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_500}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(224,224,238)',
      })
    })

    it('renders base 600 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_600}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(244,244,245)',
      })
    })

    it('renders base 700 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_700}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(247,247,249)',
      })
    })

    it('renders base 800 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_800}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(249,249,250)',
      })
    })

    it('renders base 900 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={ViewBackgroundColor.BASE_900}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(254,254,255)',
      })
    })
  })
})
