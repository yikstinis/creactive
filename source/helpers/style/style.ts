import { isValidElement } from 'react'
import { AppRegistry } from 'react-native'
import type { AppRegistry as WebAppRegistryType } from 'react-native-web'
import type { RenderStyleHelper } from './style.types'

export const renderStyle: RenderStyleHelper = (component, key = 'main') => {
  // Converting types to be able to use web specific methods..
  const WebAppRegistry = AppRegistry as unknown as WebAppRegistryType
  WebAppRegistry.registerComponent(key, () => component)
  // If someone use this function on native platform it will throw an error..
  // Seems fine.. calling this function on native platform makes no sence..
  const element = WebAppRegistry.getApplication(key, null).getStyleElement()
  if (isValidElement(element)) return element
}
