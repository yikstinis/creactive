import { isValidElement } from 'react'
import { AppRegistry } from 'react-native'
import type { AppRegistry as WebAppRegistryType } from 'react-native-web'
import type { RenderReactNativeInitialStyleHelper } from './style.types'

export const renderReactNativeInitialStyle: RenderReactNativeInitialStyleHelper =
  (component, key = 'main') => {
    AppRegistry.registerComponent(key, () => component)
    const WebAppRegistry = AppRegistry as unknown as WebAppRegistryType
    const application = WebAppRegistry.getApplication(key, {})
    const styleElement = application.getStyleElement()
    if (isValidElement(styleElement)) return styleElement
    throw new Error('Failed to render react-native initial style element!')
  }
