const basic = require('@matryoshka_lxw/eslint-config-basic');

module.exports = {
  extends: ['@matryoshka_lxw/eslint-config-basic', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  overrides: basic.overrides,
  rules: {
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'array-bracket-spacing': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-this-alias': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'brace-style': ['error', '1tbs'],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  },
};
