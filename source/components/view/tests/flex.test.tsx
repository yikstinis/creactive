import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '..'

describe('@/components/view', () => {
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
          flexDirection={View.FlexDirection.COLUMN}
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
          flexDirection={View.FlexDirection.ROW}
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
          justifyContent={View.JustifyContent.FLEX_START}
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
          justifyContent={View.JustifyContent.FLEX_END}
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
          justifyContent={View.JustifyContent.CENTER}
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
          justifyContent={View.JustifyContent.SPACE_BETWEEN}
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
          justifyContent={View.JustifyContent.SPACE_AROUND}
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
          justifyContent={View.JustifyContent.SPACE_EVENLY}
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
          alignItems={View.AlignItems.FLEX_START}
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
          alignItems={View.AlignItems.FLEX_END}
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
          alignItems={View.AlignItems.CENTER}
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
          alignItems={View.AlignItems.STRETCH}
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
          alignItems={View.AlignItems.BASELINE}
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
          alignSelf={View.AlignSelf.FLEX_START}
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
          alignSelf={View.AlignSelf.FLEX_END}
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
          alignSelf={View.AlignSelf.CENTER}
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
          alignSelf={View.AlignSelf.STRETCH}
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
          alignSelf={View.AlignSelf.BASELINE}
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
          alignContent={View.AlignContent.FLEX_START}
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
          alignContent={View.AlignContent.FLEX_END}
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
          alignContent={View.AlignContent.CENTER}
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
          alignContent={View.AlignContent.STRETCH}
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
          alignContent={View.AlignContent.SPACE_BETWEEN}
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
          alignContent={View.AlignContent.SPACE_AROUND}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        alignContent: 'space-around',
      })
    })
  })
})
