// A global script (no top-level import/export), not a module - TypeScript only honors a
// `declare module` shim for a package with no types of its own (like jest-image-snapshot) when
// it's declared globally; inside a module-format `.d.ts` file it's silently ignored instead.
declare module 'jest-image-snapshot' {
  export function toMatchImageSnapshot(options?: { customSnapshotIdentifier?: string }): unknown
}

declare module 'expect' {
  interface Matchers<R extends void | Promise<void>, T = unknown> {
    toMatchImageSnapshot(options?: { customSnapshotIdentifier?: string }): R
  }
}
