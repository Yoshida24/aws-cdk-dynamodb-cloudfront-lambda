/* globals module */
module.exports = {
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  parser: 'babel-eslint',
  rules: {
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      root: true,
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
          },
        ],
      },
    }
  ]
};
