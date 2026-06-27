# Tests

## Coverage

- Cover all cases: props, flags, and edge values.
- Use `faker` for random test data (IDs, strings, numbers).
- Enum props require a separate `it` for every value.
- Read all `jest-setup.*` files before writing tests. Use the global helpers (e.g. `randomTestId`, `randomRgb`, `randomPixelDimension`) and custom matchers (e.g. `toHavePlatformStyle`, `toEqualPlatformStyle`) defined there. If a new reusable helper or matcher is needed, add it to the appropriate `jest-setup.*` file and extend the global declarations.

## File naming

- Default (all platforms): `*.test.ts` / `*.test.tsx`
- Web only: `*.web.test.ts` / `*.web.test.tsx`
- Native only: `*.native.test.ts` / `*.native.test.tsx`

## Structure

Use nested `describe` blocks: path alias → file name → function/hook name → `it` cases.

```ts
describe('@/hooks', () => {
  describe('use-border', () => {
    describe('useBorderRadiusStyle', () => {
      it('returns undefined when border radius is not provided', () => { ... })
      it('returns small border radius', () => { ... })
    })
  })
})
```

## Imports

Always import from `@testing-library/react-native` — the jest config remaps it to `@testing-library/react` for web automatically.

## Running tests

- All platforms: `npm test`
- Web only: `npm run test:web`
- Android only: `npm run test:android`
- iOS only: `npm run test:ios`
