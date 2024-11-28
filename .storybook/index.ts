import AsyncStorage from '@react-native-async-storage/async-storage'
import { registerRootComponent } from 'expo'
import { view } from './storybook.requires'

const StorybookUI = view.getStorybookUI({
  shouldPersistSelection: true,
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
})

registerRootComponent(StorybookUI)
