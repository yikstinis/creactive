import { fileURLToPath } from 'node:url'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    config.resolve ??= {}
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
      '@': fileURLToPath(new URL('../src', import.meta.url)),
    }
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.js',
      '.js',
      '.mjs',
      '.jsx',
      '.json',
      ...(config.resolve.extensions ?? []),
    ]
    return config
  },
}

export default config
