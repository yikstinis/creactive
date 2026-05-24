import type { IsMetro } from './environment.types'

// When bundled with Metro (React Native native target),
// Metro resolves this .native.ts file, indicating Metro environment.
export const isMetro: IsMetro = true
