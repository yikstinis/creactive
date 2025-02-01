module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['standard'],
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'no-undef': 0,
    'linebreak-style': 2,
    semi: [2, 'never'],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'max-len': [
      2,
      {
        code: 80,
        tabWidth: 2,
      },
    ],
    'comma-dangle': 0,
    'no-nested-ternary': 2,
    'space-before-function-paren': 0,
    'sort-imports': [
      2,
      {
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        ignoreCase: false,
      },
    ],
    'import/order': [
      2,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['external', 'internal'], ['parent'], ['sibling']],
        'newlines-between': 'never',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  ignorePatterns: ['build', 'node_modules'],
}
