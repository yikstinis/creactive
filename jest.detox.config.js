module.exports = {
  preset: '@react-native/jest-preset',
  testMatch: ['<rootDir>/src/**/*.snapshot.test.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@root/(.*)$': '<rootDir>/$1',
  },
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['<rootDir>/detox.setup.ts'],
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,
}
