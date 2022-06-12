/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  setings: {
    react: {
      version: 18,
    },
  },
};
