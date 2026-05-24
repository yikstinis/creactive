import type { IsMetro } from './environment.types'

// When bundled with classic bundlers (webpack, vite, etc.),
// this file is resolved instead of the .native.ts file.
export const isMetro: IsMetro = false
