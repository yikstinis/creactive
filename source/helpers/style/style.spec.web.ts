import { Fragment, isValidElement } from 'react'
import { renderStyle } from './style'

describe('@/helpers/style.renderStyle', () => {
  it('renders style element for react fragment', () => {
    const element = renderStyle(Fragment)
    expect(isValidElement(element)).toBe(true)
    expect(element.type).toEqual('style')
    const style = element.props.dangerouslySetInnerHTML.__html
    expect(style).toContain('display:inline')
    expect(style).toContain('display:inline-flex')
    expect(style).toContain('display:flex')
    expect(style).toContain('pointer-events:auto')
    expect(style).toContain('pointer-events:none')
  })
})
