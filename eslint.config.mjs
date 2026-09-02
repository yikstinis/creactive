import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import importX from 'eslint-plugin-import-x'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  { ignores: ['node_modules', 'storybook-static', '**/*.cache/**', 'example/**'] },
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
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.d.ts', '**/*.stories.tsx'],
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
])
