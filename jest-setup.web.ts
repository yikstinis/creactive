// NOTE: jest-expo pulls in react-server-dom-webpack as a dependency.
// It requires react@19 and uses renderToReadableStream, so web tests run under react@19.
// This is fine — both react and react-native-web now support react@19 in our peer dependencies.

import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom'

expect.extend(matchers)

// We sometimes want to hide console outputs to keep things clear.
const originalConsoleError = console.error.bind(console)
const UNRECOGNIZED_TAG_WARNING_MESSAGE =
  'Warning: The tag <%s> is unrecognized in this browser.'
const NON_BOOLEAN_ATTRIBUTE_WARNING_MESSAGE =
  'Warning: Received `%s` for a non-boolean attribute `%s`.'
console.error = (message: unknown, ...args: unknown[]) => {
  if (typeof message === 'string') {
    if (message.includes(UNRECOGNIZED_TAG_WARNING_MESSAGE)) {
      // Ignore the warning about unrecognized <stop> tags, which are valid in SVG and used by react-native-svg.
      if (args[0] === 'stop') return
    }
    if (message.includes(NON_BOOLEAN_ATTRIBUTE_WARNING_MESSAGE)) {
      // Ignore the warning about collapsable passed to SVG DOM elements by react-native-web's createAnimatedComponent.
      if (args[1] === 'collapsable') return
    }
  }

  originalConsoleError(message, ...args)
}

class MockResizeObserver {
  static instances: MockResizeObserver[] = []
  private callback: ResizeObserverCallback
  private disconnected = false

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
    MockResizeObserver.instances.push(this)
  }

  observe(_target: Element) {
    if (this.disconnected) return
    this.callback(
      [{ contentRect: { width: 0, height: 0 } } as ResizeObserverEntry],
      this,
    )
  }

  unobserve() {}

  disconnect() {
    this.disconnected = true
    MockResizeObserver.instances = MockResizeObserver.instances.filter(
      (instance) => instance !== this,
    )
  }

  trigger(width: number, height: number) {
    if (this.disconnected) return
    this.callback(
      [{ contentRect: { width, height } } as ResizeObserverEntry],
      this,
    )
  }
}

global.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver
;(global as unknown as Record<string, unknown>).MockResizeObserver =
  MockResizeObserver

declare global {
  var MockResizeObserver: {
    instances: {
      trigger(width: number, height: number): void
    }[]
  }
}
