// TODO: Would be nice to import type from @storybook/react-native
import type { Parameters } from '@storybook/react'

export const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
