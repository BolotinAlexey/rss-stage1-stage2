module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  noInlineConfig: true,
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint-config-airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.json', // Specify the path to your tsconfig.json file
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
  },
};
