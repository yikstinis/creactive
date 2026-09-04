module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/src/**/*.e2e.ts'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: ['<rootDir>/e2e/setup.ts'],
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,
}
