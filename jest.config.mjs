import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const sharedConfig = {
  rootDir,
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default {
  projects: [
    {
      ...sharedConfig,
      displayName: 'native',
      preset: '@react-native/jest-preset',
    },
    {
      ...sharedConfig,
      displayName: 'web',
      testEnvironment: 'node',
      setupFiles: ['<rootDir>/jest.setup.web.js'],
      transform: {
        '^.+\\.(js|ts|tsx)$': 'babel-jest',
      },
      moduleNameMapper: {
        ...sharedConfig.moduleNameMapper,
        '^react-native$': 'react-native-web',
      },
    },
  ],
}
