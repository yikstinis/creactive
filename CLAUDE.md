# General

- Always cover new functionality with tests.
- After implementing or changing anything, always run `npm run lint` and `npm test` to verify the changes.
- If you're fixing a broken test, always ask if you're unsure.

## Formatting

Value helpers live in `helpers/color/*`, `helpers/dimension/*`, `helpers/fraction/*`.

### Component (context provider) props

- Must be a component constants enum value, or a value formatted via `Color`, `Dimension`, or `Fraction`.
- Never pass raw numbers or strings.

### Context values and inner component props

- Pass enum constants as-is through every layer — context values, inner components, and styled components — for as long as possible.
- Pass already-formatted `Color`/`Dimension`/`Fraction` values as-is through every layer — context values, inner components, and styled components — for as long as possible.
- Call `.toValue()` only at the terminal point of use where a raw primitive is required (e.g. building a style object or setting a native attribute).
- Never use literal values (raw strings or numbers) directly in component props and inner component constants — always go through an enum constant or a `Color`/`Dimension`/`Fraction` helper.

## Naming

- Name things exactly as they are — variables, functions, files, and types should describe what they actually represent, with no abbreviations, vague terms, or misleading names.
- Never use a name that makes a false claim — e.g. don't name a function `update` if it inserts, or `get` if it mutates.

### Hooks

- If a hook returns a style object — name it `useSomeStyle`.
- If a hook returns a value formatted from helpers (`Color`, `Dimension`, `Fraction`) — name it `useSomething` (no suffix).

## Comments

- No implementation comments unless the WHY is non-obvious (hack, workaround, hidden constraint).
- All exported types, interfaces, and enums need a JSDoc block: two sentences on separate lines — responsibility first, then usage intent.
- Every prop and field requires a JSDoc line comment: two sentences on separate lines — responsibility first, then usage intent.
- Every optional prop or field requires `@default undefined` or `@default {@link Target.BASE}`.
- Use `@see {@link Target.Property}` when referencing another type, component, or enum.

## Types

When working with types, read .claude/types.md for instructions.

## Git

When working with git, read .claude/git.md for instructions.

## Tests

When working with tests, read .claude/tests.md for instructions.
