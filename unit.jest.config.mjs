import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const sharedConfig = {
  rootDir,
  testMatch: ['<rootDir>/src/**/*.unit.test.{ts,tsx}'],
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
      setupFiles: ['<rootDir>/unit.jest.setup.web.ts'],
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
