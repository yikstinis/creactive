import { readFileSync } from 'fs'
import { dirname, join } from 'path'

import { expect } from '@jest/globals'
import { by, device, element, waitFor } from 'detox'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { PNG } from 'pngjs'

import { VISUAL_SCENE_ROOT_TEST_ID } from '@/testing/scenes'

declare global {
  function initialize(sceneId: string): Promise<void>
  function enable(navTestId: string, targetTestId: string): Promise<void>
  function match(targetTestId: string, group: string, name: string): Promise<void>
}

/**
 * Detox overwrites the global `expect` with its own element-assertion DSL
 * (`expect(element(...)).toBeVisible()`), so Jest's own value-matcher
 * `expect` — the one `.extend()` and `toMatchImageSnapshot` need — has to
 * be imported explicitly from `@jest/globals` rather than relying on the
 * ambient global.
 */
expect.extend({ toMatchImageSnapshot })

// Matches the `snapshot-test-{platform}-{device}` job naming in maintain.yml (e.g. `android-pixel-7`).
const DEVICE_SUFFIXES = {
  android: 'android-pixel-7',
  ios: 'ios-iphone-17',
}

async function getElementFrame(testId: string): Promise<{ x: number; y: number; width: number; height: number }> {
  const attributes = (await element(by.id(testId)).getAttributes()) as {
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

async function initialize(sceneId: string): Promise<void> {
  await device.launchApp()

  const sceneNav = element(by.id(`scene-nav-${sceneId}`))
  await waitFor(sceneNav).toBeVisible().withTimeout(10000)
  await sceneNav.tap()
}

async function enable(navTestId: string, targetTestId: string): Promise<void> {
  await element(by.id(navTestId)).tap()
  await waitFor(element(by.id(targetTestId))).toBeVisible().withTimeout(10000)
}

async function match(targetTestId: string, group: string, name: string): Promise<void> {
  const screenshotPath = await device.takeScreenshot(targetTestId)
  const screenshot = PNG.sync.read(readFileSync(screenshotPath))

  // device.takeScreenshot() returns raw device pixels, but getAttributes().frame comes back in
  // points on iOS (and, empirically, already in pixels on Android) - deriving the scale from
  // the full-screen root's own frame works on both, rather than assuming either unit.
  const rootFrame = await getElementFrame(VISUAL_SCENE_ROOT_TEST_ID)
  const scale = screenshot.width / rootFrame.width

  const targetFrame = await getElementFrame(targetTestId)

  const croppedScreenshot = cropPng(screenshot, {
    x: Math.round(targetFrame.x * scale),
    y: Math.round(targetFrame.y * scale),
    width: Math.round(targetFrame.width * scale),
    height: Math.round(targetFrame.height * scale),
  })

  const testPath = expect.getState().testPath as string
  const snapshotsDir = join(dirname(testPath), 'snapshots')

  expect(croppedScreenshot).toMatchImageSnapshot({
    customSnapshotIdentifier: `${group}/${name}.${DEVICE_SUFFIXES[device.getPlatform()]}`,
    customSnapshotsDir: snapshotsDir,
  })
}

globalThis.initialize = initialize
globalThis.enable = enable
globalThis.match = match
