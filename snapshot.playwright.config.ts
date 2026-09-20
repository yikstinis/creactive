import { defineConfig } from '@playwright/test'

// Imported for its side effect: assigns the global `test` a *.snapshot.test.tsx file references
// as a bare identifier (see snapshot.types.d.ts). Playwright requires this config before requiring
// any spec file in a worker process, so the assignment is always in place first.
import '@root/snapshot.playwright.setup'

export default defineConfig({
  testDir: 'src',
  testMatch: '**/*.snapshot.test.{ts,tsx}',
  // Written to a `snapshots/` dir next to each spec file, shared with that component's Detox
  // visual test, suffixed to match the `snapshot-test-{platform}-{browser}` job naming in
  // maintain.yml (e.g. `linux-chromium`).
  snapshotPathTemplate: '{testDir}/{testFileDir}/snapshots/{arg}.{platform}-{projectName}{ext}',
  webServer: {
    // The trailing `?` on the proxy target truncates the original request path before it's
    // forwarded, so any unmatched route (e.g. `/component/view/padding/x6s`, which has no
    // matching file in `dist/`) falls back to `index.html` at `/` instead of 404ing - needed now
    // that tests navigate straight to a scene/case's own path rather than always starting at `/`.
    command: 'npx http-server dist -p 6007 -s -P http://localhost:6007?',
    url: 'http://localhost:6007',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:6007',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
})
