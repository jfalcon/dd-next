import { FlatCompat } from '@eslint/eslintrc';

// import.meta.dirname is available after Node.js v20.11.0
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      'no-alert': 'error',
      'no-console': 'warn',
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: 'warn', // account for the AST
    },
  }),
];

export default eslintConfig;
