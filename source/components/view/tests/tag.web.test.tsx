import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { View } from '..'

describe('@/components/view', () => {
  describe('view tag', () => {
    it('renders undefined tag', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId).tagName).toEqual('DIV')
    })

    it('renders div tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.DIV}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('DIV')
    })

    it('redners figure tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.FIGURE}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('FIGURE')
    })

    it('renders figcaption tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.FIGCAPTION}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('FIGCAPTION')
    })

    it('renders article tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.ARTICLE}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('ARTICLE')
    })

    it('renders section tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.SECTION}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('SECTION')
    })

    it('renders header tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.HEADER}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('HEADER')
    })

    it('renders main tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.MAIN}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('MAIN')
    })

    it('renders footer tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.FOOTER}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('FOOTER')
    })
  })
})
