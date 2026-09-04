import { view } from './storybook.requires'

const StorybookUIRoot = view.getStorybookUI({
  initialSelection: 'atoms-view--default',
  shouldPersistSelection: false,
  // No persistence is needed for automated screenshot runs (Detox reinstalls the app
  // every run), and getStorybookUI has no default storage — passing none crashes
  // StorageProvider with "Cannot read property 'getItem' of undefined".
  storage: {
    getItem: async () => null,
    setItem: async () => undefined,
  },
})

export default StorybookUIRoot
