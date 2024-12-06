export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended', 'stylelint-prettier/recommended','stylelint-config-clean-order'],
  plugins: ['stylelint-prettier', 'stylelint-z-index-value-constraint'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'plugin/z-index-value-constraint': {
      min: -1000,
      max: 1000,
    },
    'selector-max-type': null,
    'color-function-notation': null,
    'selector-class-pattern': null,
    'alpha-value-notation': null,
    'function-no-unknown': null,
    'function-whitespace-after': null,
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.md'],
      customSyntax: 'postcss-markdown',
    },
  ],
};
