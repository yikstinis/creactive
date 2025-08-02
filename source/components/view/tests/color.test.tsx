import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react-native'
import { View } from '..'

describe('@/components/view', () => {
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
          backgroundColor={View.BackgroundColor.BASE_100}
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
          backgroundColor={View.BackgroundColor.BASE_200}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(212,212,216)',
      })
    })

    // it('renders base 300 background color', () => {
    //   const testId = faker.string.uuid()
    //   render(
    //     <View
    //       testId={testId}
    //       backgroundColor={View.BackgroundColor.BASE_300}
    //     />
    //   )
    //   expect(screen.getByTestId(testId)).toHaveStyle({
    //     backgroundColor: 'rgb(216,216,228)',
    //   })
    // })

    // it('renders base 400 background color', () => {
    //   const testId = faker.string.uuid()
    //   render(
    //     <View
    //       testId={testId}
    //       backgroundColor={View.BackgroundColor.BASE_400}
    //     />
    //   )
    //   expect(screen.getByTestId(testId)).toHaveStyle({
    //     backgroundColor: 'rgb(218,218,234)',
    //   })
    // })

    // it('renders base 500 background color', () => {
    //   const testId = faker.string.uuid()
    //   render(
    //     <View
    //       testId={testId}
    //       backgroundColor={View.BackgroundColor.BASE_500}
    //     />
    //   )
    //   expect(screen.getByTestId(testId)).toHaveStyle({
    //     backgroundColor: 'rgb(224,224,238)',
    //   })
    // })

    it('renders base 600 background color', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          backgroundColor={View.BackgroundColor.BASE_600}
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
          backgroundColor={View.BackgroundColor.BASE_700}
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
          backgroundColor={View.BackgroundColor.BASE_800}
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
          backgroundColor={View.BackgroundColor.BASE_900}
        />
      )
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: 'rgb(254,254,255)',
      })
    })
  })
})
