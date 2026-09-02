import { by, device, element, waitFor } from 'detox'
import { readFileSync } from 'fs'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })

describe('atoms/View', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('renders the default story', async () => {
    await waitFor(element(by.text('Hello, View'))).toBeVisible().withTimeout(10000)

    const screenshotPath = await device.takeScreenshot('view-default')

    expect(readFileSync(screenshotPath)).toMatchImageSnapshot({
      customSnapshotIdentifier: 'view-default',
    })
  })
})
