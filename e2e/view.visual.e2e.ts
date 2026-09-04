import { readFileSync } from 'fs'

import { beforeAll, describe, expect, it } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'

describe('atoms/View', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('renders with padding', async () => {
    await waitFor(element(by.text('Hello, View'))).toBeVisible().withTimeout(10000)

    const screenshotPath = await device.takeScreenshot('view-default')
    const snapshotIdentifier = `view-default-${device.getPlatform()}`

    expect(readFileSync(screenshotPath)).toMatchImageSnapshot({
      customSnapshotIdentifier: snapshotIdentifier,
    })
  })
})
