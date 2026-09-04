declare module 'jest-image-snapshot' {
  export function toMatchImageSnapshot(options?: { customSnapshotIdentifier?: string }): unknown
}

declare module 'expect' {
  interface Matchers<R extends void | Promise<void>, T = unknown> {
    toMatchImageSnapshot(options?: { customSnapshotIdentifier?: string }): R
  }
}
