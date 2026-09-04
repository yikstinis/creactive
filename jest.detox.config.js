module.exports = {
  testMatch: ['<rootDir>/src/**/*.detox.test.ts'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.detox.ts'],
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,
}
