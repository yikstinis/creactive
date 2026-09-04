import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'visual',
  testMatch: '**/*.visual.spec.ts',
  webServer: {
    command: 'npx http-server example/dist -p 6007 -s',
    url: 'http://localhost:6007',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:6007',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
})
