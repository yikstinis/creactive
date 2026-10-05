import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import importX from 'eslint-plugin-import-x'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  { ignores: ['node_modules', 'dist', '**/*.cache/**', 'snapshot.scenes.ts'] },
  { settings: { react: { version: 'detect' } } },
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      'import-x': importX,
    },
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports' },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*'],
              message: 'Use the "@/" alias instead of relative imports.',
            },
          ],
        },
      ],
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            { pattern: '@/**', group: 'internal' },
            { pattern: '@root/**', group: 'internal' },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-props-no-multi-spaces': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.d.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Interfaces must be declared in a colocated "*.types.d.ts" file, not alongside implementation code.',
        },
        {
          selector: 'TSTypeAliasDeclaration',
          message: 'Type aliases must be declared in a colocated "*.types.d.ts" file, not alongside implementation code.',
        },
      ],
    },
  },
  {
    // `T` is unused but required, because declaration merging needs the same type parameters as `expect`'s `Matchers<R, T>`.
    files: ['snapshot.jest.types.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    // Metro loads these files via CommonJS `require()`, so they can't use ESM imports.
    files: ['metro.config.js', 'scripts/**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    // Scene files and `renderLayoutProbe` require() react-native inside render functions, so Playwright's Node runner, which can't parse react-native, can load them.
    // `typeof import(...)` types those require() calls inline instead of a separate `import type`.
    files: ['**/*.snapshot.test.tsx', 'snapshot.helpers.tsx'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
    },
  },
])
