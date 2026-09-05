import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import importX from 'eslint-plugin-import-x'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  { ignores: ['node_modules', '**/*.cache/**'] },
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
    // The unused `T` re-declares `expect`'s own Matchers<R, T> type parameter list, which
    // TypeScript's declaration merging requires to match in arity even though this file's
    // added matcher doesn't use it.
    files: ['jest-image-snapshot.types.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    // Metro and Expo's config-plugins system load these via Node's CommonJS require(),
    // so they can't be converted to ESM imports.
    files: ['metro.config.js', 'plugins/**/*.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
])
