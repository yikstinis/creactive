import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { View } from '..'

describe('@/components/view', () => {
  describe('view tag', () => {
    it('renders DIV tag by default', () => {
      const testId = faker.string.uuid()
      render(<View testId={testId} />)
      expect(screen.getByTestId(testId).tagName).toEqual('DIV')
    })

    it('renders DIV tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.DIV}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('DIV')
    })

    it('redners FIGURE tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.FIGURE}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('FIGURE')
    })

    it('renders FIGCAPTION tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.FIGCAPTION}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('FIGCAPTION')
    })

    it('renders ARTICLE tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.ARTICLE}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('ARTICLE')
    })

    it('renders SECTION tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.SECTION}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('SECTION')
    })

    it('renders HEADER tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.HEADER}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('HEADER')
    })

    it('renders MAIN tag', () => {
      const testId = faker.string.uuid()
      render(
        <View
          testId={testId}
          tag={View.Tag.MAIN}
        />
      )
      expect(screen.getByTestId(testId).tagName).toEqual('MAIN')
    })

    it('renders FOOTER tag', () => {
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
