// Global script, not a module: TypeScript ignores a `declare module` shim for an untyped package inside a module-format `.d.ts`.
declare module 'jest-image-snapshot' {
  export function toMatchImageSnapshot(options?: { customSnapshotIdentifier?: string }): unknown
}

declare module 'expect' {
  interface Matchers<R extends void | Promise<void>, T = unknown> {
    toMatchImageSnapshot(options?: { customSnapshotIdentifier?: string }): R
  }
}
