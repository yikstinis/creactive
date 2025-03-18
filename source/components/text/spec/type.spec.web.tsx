import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'
import { Text } from '../text'

describe('@/components/text', () => {
  describe('type passing as property', () => {
    it('renders provided string into DIV tag by default', () => {
      const text = faker.lorem.words(2)
      render(<Text>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('DIV')
    })

    it('renders H1 tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.H1}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('H1')
    })

    it('renders H2 tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.H2}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('H2')
    })

    it('renders H3 tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.H3}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('H3')
    })

    it('renders H4 tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.H4}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('H4')
    })

    it('renders H5 tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.H5}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('H5')
    })

    it('renders H6 tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.H6}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('H6')
    })

    it('renders P tag when same type prop provided', () => {
      const text = faker.lorem.words(2)
      render(<Text type={Text.Type.P}>{text}</Text>)
      expect(screen.getByText(text).tagName).toEqual('P')
    })
  })
})
