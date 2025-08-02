module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['expo'],
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'no-undef': 0,
    'linebreak-style': 2,
    semi: [2, 'never'],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
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
        ignoreCase: true,
      },
    ],
    'import/order': [
      2,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['external', 'internal'], ['parent'], ['index'], ['sibling']],
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
  overrides: [
    // We want to see only typisation inside *.types.ts files..
    {
      files: ['*.types.ts'],
      rules: {
        'no-restricted-syntax': [
          'error',
          "ImportDeclaration[importKind='value']",
          'VariableDeclaration',
          'FunctionDeclaration',
          'ClassDeclaration',
          'CallExpression',
          'NewExpression',
          'AssignmentExpression',
        ],
      },
    },
  ],
  ignorePatterns: ['build', 'node_modules'],
}
