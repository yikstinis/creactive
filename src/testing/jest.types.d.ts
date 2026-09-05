import type { beforeAll as jestBeforeAll, describe as jestDescribe, it as jestIt } from '@jest/globals'

declare global {
  const describe: typeof jestDescribe
  const it: typeof jestIt
  const beforeAll: typeof jestBeforeAll
}

export {}
