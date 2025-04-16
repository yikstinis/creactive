import { faker } from '@faker-js/faker'
import { render, renderHook, screen } from '@testing-library/react-native'
import { View } from '..'
import {
  ViewAlignContent,
  ViewAlignItems,
  ViewAlignSelf,
  ViewFlexDirection,
  ViewJustifyContent,
} from '../constants'
import {
  useViewAlignContentStyle,
  useViewAlignItemsStyle,
  useViewAlignSelfStyle,
  useViewFlexDirectionStyle,
  useViewJustifyContentStyle,
} from '../hooks'

describe('@/components/view', () => {
  describe('use view flex direction style', () => {
    it('returns undefined flex direction style', () => {
      const { result } = renderHook(() => useViewFlexDirectionStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns column flex direction style', () => {
      const { result } = renderHook(() =>
        useViewFlexDirectionStyle(ViewFlexDirection.COLUMN)
      )
      expect(result.current).toEqual({
        flexDirection: 'column',
      })
    })

    it('returns row flex direction style', () => {
      const { result } = renderHook(() =>
        useViewFlexDirectionStyle(ViewFlexDirection.ROW)
      )
      expect(result.current).toEqual({
        flexDirection: 'row',
      })
    })
  })

  describe('use view justify content style', () => {
    it('returns undefined justify content style', () => {
      const { result } = renderHook(() => useViewJustifyContentStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flext start justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.FLEX_START)
      )
      expect(result.current).toEqual({
        justifyContent: 'flex-start',
      })
    })

    it('returns flex end justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.FLEX_END)
      )
      expect(result.current).toEqual({
        justifyContent: 'flex-end',
      })
    })

    it('returns CENTER justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.CENTER)
      )
      expect(result.current).toEqual({
        justifyContent: 'center',
      })
    })

    it('returns space between justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.SPACE_BETWEEN)
      )
      expect(result.current).toEqual({
        justifyContent: 'space-between',
      })
    })

    it('returns space around justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.SPACE_AROUND)
      )
      expect(result.current).toEqual({
        justifyContent: 'space-around',
      })
    })

    it('returns space evenly justify content style', () => {
      const { result } = renderHook(() =>
        useViewJustifyContentStyle(ViewJustifyContent.SPACE_EVENLY)
      )
      expect(result.current).toEqual({
        justifyContent: 'space-evenly',
      })
    })
  })

  describe('use view align items style', () => {
    it('returns undefined align items style', () => {
      const { result } = renderHook(() => useViewAlignItemsStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flex start align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.FLEX_START)
      )
      expect(result.current).toEqual({
        alignItems: 'flex-start',
      })
    })

    it('returns flex end align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.FLEX_END)
      )
      expect(result.current).toEqual({
        alignItems: 'flex-end',
      })
    })

    it('returns center align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.CENTER)
      )
      expect(result.current).toEqual({
        alignItems: 'center',
      })
    })

    it('returns stretch align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.STRETCH)
      )
      expect(result.current).toEqual({
        alignItems: 'stretch',
      })
    })

    it('returns baseline align items style', () => {
      const { result } = renderHook(() =>
        useViewAlignItemsStyle(ViewAlignItems.BASELINE)
      )
      expect(result.current).toEqual({
        alignItems: 'baseline',
      })
    })
  })

  describe('use view align self style', () => {
    it('returns undefined align self style', () => {
      const { result } = renderHook(() => useViewAlignSelfStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flex start align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.FLEX_START)
      )
      expect(result.current).toEqual({
        alignSelf: 'flex-start',
      })
    })

    it('returns flex end align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.FLEX_END)
      )
      expect(result.current).toEqual({
        alignSelf: 'flex-end',
      })
    })

    it('returns center align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.CENTER)
      )
      expect(result.current).toEqual({
        alignSelf: 'center',
      })
    })

    it('returns stretch align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.STRETCH)
      )
      expect(result.current).toEqual({
        alignSelf: 'stretch',
      })
    })

    it('returns baseline align self style', () => {
      const { result } = renderHook(() =>
        useViewAlignSelfStyle(ViewAlignSelf.BASELINE)
      )
      expect(result.current).toEqual({
        alignSelf: 'baseline',
      })
    })
  })

  describe('use view align content style', () => {
    it('returns undefined align content style', () => {
      const { result } = renderHook(() => useViewAlignContentStyle(undefined))
      expect(result.current).toEqual(undefined)
    })

    it('returns flex start align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.FLEX_START)
      )
      expect(result.current).toEqual({
        alignContent: 'flex-start',
      })
    })

    it('returns flex end align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.FLEX_END)
      )
      expect(result.current).toEqual({
        alignContent: 'flex-end',
      })
    })

    it('returns center align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.CENTER)
      )
      expect(result.current).toEqual({
        alignContent: 'center',
      })
    })

    it('returns stretch align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.STRETCH)
      )
      expect(result.current).toEqual({
        alignContent: 'stretch',
      })
    })

    it('returns space between align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.SPACE_BETWEEN)
      )
      expect(result.current).toEqual({
        alignContent: 'space-between',
      })
    })

    it('returns space around align content style', () => {
      const { result } = renderHook(() =>
        useViewAlignContentStyle(ViewAlignContent.SPACE_AROUND)
      )
      expect(result.current).toEqual({
        alignContent: 'space-around',
      })
    })
  })

  describe('view flex direction', () => {
    it('renders undefined flex direction', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexDirection: 'column',
      })
    })

    it('renders column flex direction', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          flexDirection={ViewFlexDirection.COLUMN}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexDirection: 'column',
      })
    })

    it('renders row flex direction', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          flexDirection={ViewFlexDirection.ROW}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        flexDirection: 'row',
      })
    })
  })

  describe('view justify content', () => {
    it('renders undefined justify content', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'flex-start',
      })
    })

    it('renders flex start justify content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={ViewJustifyContent.FLEX_START}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'flex-start',
      })
    })

    it('renders flex end justify content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={ViewJustifyContent.FLEX_END}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'flex-end',
      })
    })

    it('renders center justify content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={ViewJustifyContent.CENTER}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'center',
      })
    })

    it('renders space between justify content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={ViewJustifyContent.SPACE_BETWEEN}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'space-between',
      })
    })

    it('renders space around justify content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={ViewJustifyContent.SPACE_AROUND}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'space-around',
      })
    })

    it('renders space evenly justify content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          justifyContent={ViewJustifyContent.SPACE_EVENLY}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        justifyContent: 'space-evenly',
      })
    })
  })

  describe('view align items', () => {
    it('renders undefined align items', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'stretch',
      })
    })

    it('renders flex start align items', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={ViewAlignItems.FLEX_START}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'flex-start',
      })
    })

    it('renders flex end align items', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={ViewAlignItems.FLEX_END}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'flex-end',
      })
    })

    it('renders center align items', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={ViewAlignItems.CENTER}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'center',
      })
    })

    it('renders stretch align items', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={ViewAlignItems.STRETCH}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'stretch',
      })
    })

    it('renders baseline align items', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignItems={ViewAlignItems.BASELINE}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignItems: 'baseline',
      })
    })
  })

  describe('view align self', () => {
    it('renders undefined align self', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: undefined,
      })
    })

    it('renders flex start align self', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={ViewAlignSelf.FLEX_START}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'flex-start',
      })
    })

    it('renders flex end align self', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={ViewAlignSelf.FLEX_END}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'flex-end',
      })
    })

    it('renders center align self', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={ViewAlignSelf.CENTER}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'center',
      })
    })

    it('renders stretch align self', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={ViewAlignSelf.STRETCH}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'stretch',
      })
    })

    it('renders baseline align self', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignSelf={ViewAlignSelf.BASELINE}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignSelf: 'baseline',
      })
    })
  })

  describe('view align content', () => {
    it('renders undefined align content', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'flex-start',
      })
    })

    it('renders flex start align content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={ViewAlignContent.FLEX_START}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'flex-start',
      })
    })

    it('renders flex end align content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={ViewAlignContent.FLEX_END}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'flex-end',
      })
    })

    it('renders center align content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={ViewAlignContent.CENTER}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'center',
      })
    })

    it('renders stretch align content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={ViewAlignContent.STRETCH}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'stretch',
      })
    })

    it('renders space between align content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={ViewAlignContent.SPACE_BETWEEN}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'space-between',
      })
    })

    it('renders space around align content', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          alignContent={ViewAlignContent.SPACE_AROUND}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'space-around',
      })
    })
  })
})
