import type { StorybookConfig } from '@storybook/react-native'

const storybookConfig: StorybookConfig = {
  stories: ['../source/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
}
export default storybookConfig
