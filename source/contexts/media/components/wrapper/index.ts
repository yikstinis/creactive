import { Platform } from 'react-native'

export const Wrapper = Platform.select({
  web: require('./wrapper.web'),
  default: require('./wrapper.native'),
})
