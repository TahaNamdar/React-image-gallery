module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'react/prop-types': 0,
    'react/display-name': 'off',
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
