import { readFileSync } from 'fs'
import { join } from 'path'

import { beforeAll, describe, expect, it } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'
import { PNG } from 'pngjs'

import { VIEW_PADDING_CASES, VIEW_PADDING_SCENE_ID } from '@/components/atoms/view/view.padding.cases'
import { VISUAL_SCENE_ROOT_TEST_ID } from '@/testing/scenes'

const SNAPSHOTS_DIR = join(__dirname, 'snapshots')

// Matches the `snapshot-test-{platform}-{device}` job naming in maintain.yml (e.g. `android-pixel-7`).
const DEVICE_SUFFIXES = {
  android: 'android-pixel-7',
  ios: 'ios-iphone-17',
}

async function getElementFrame(testID: string): Promise<{ x: number; y: number; width: number; height: number }> {
  const attributes = (await element(by.id(testID)).getAttributes()) as {
    frame: { x: number; y: number; width: number; height: number }
  }

  return attributes.frame
}

function cropPng(source: PNG, rect: { x: number; y: number; width: number; height: number }): Buffer {
  const cropped = new PNG({ width: rect.width, height: rect.height })

  for (let row = 0; row < rect.height; row += 1) {
    const sourceStart = ((rect.y + row) * source.width + rect.x) * 4
    const destStart = row * rect.width * 4

    source.data.copy(cropped.data, destStart, sourceStart, sourceStart + rect.width * 4)
  }

  return PNG.sync.write(cropped)
}

describe('atoms/View', () => {
  beforeAll(async () => {
    await device.launchApp()

    const sceneNav = element(by.id(`scene-nav-${VIEW_PADDING_SCENE_ID}`))
    await waitFor(sceneNav).toBeVisible().withTimeout(10000)
    await sceneNav.tap()
  })

  it.each(VIEW_PADDING_CASES)('renders with $name padding', async ({ name }) => {
    const testID = `view-padding-${name}`

    await element(by.id(`view-padding-nav-${name}`)).tap()
    await waitFor(element(by.id(testID))).toBeVisible().withTimeout(10000)

    const screenshotPath = await device.takeScreenshot(testID)
    const screenshot = PNG.sync.read(readFileSync(screenshotPath))

    // device.takeScreenshot() returns raw device pixels, but getAttributes().frame comes back in
    // points on iOS (and, empirically, already in pixels on Android) - deriving the scale from
    // the full-screen root's own frame works on both, rather than assuming either unit.
    const rootFrame = await getElementFrame(VISUAL_SCENE_ROOT_TEST_ID)
    const scale = screenshot.width / rootFrame.width

    const caseFrame = await getElementFrame(testID)

    const croppedScreenshot = cropPng(screenshot, {
      x: Math.round(caseFrame.x * scale),
      y: Math.round(caseFrame.y * scale),
      width: Math.round(caseFrame.width * scale),
      height: Math.round(caseFrame.height * scale),
    })

    const snapshotIdentifier = `padding/${name}.${DEVICE_SUFFIXES[device.getPlatform()]}`

    expect(croppedScreenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: snapshotIdentifier,
      customSnapshotsDir: SNAPSHOTS_DIR,
    })
  })
})
