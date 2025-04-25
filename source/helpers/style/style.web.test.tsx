import { faker } from '@faker-js/faker'
import { renderReactNativeInitialStyle } from '.'

describe('@/helpers/style', () => {
  describe('render react native initial style', () => {
    it('renders default element', () => {
      const element = renderReactNativeInitialStyle(() => faker.lorem.words(2))
      // Checking that element styles content StyleSheet.absoluteFill styles.
      expect(element.props.dangerouslySetInnerHTML.__html).toContain(
        'position:absolute'
      )
      expect(element.props.dangerouslySetInnerHTML.__html).toContain('top:0')
      expect(element.props.dangerouslySetInnerHTML.__html).toContain('left:0')
      expect(element.props.dangerouslySetInnerHTML.__html).toContain('right:0')
      expect(element.props.dangerouslySetInnerHTML.__html).toContain('bottom:0')
    })
  })
})
