import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  { ignores: ['node_modules'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: './tsconfig.json',
      },
    },
    rules: {
      ...eslintConfigPrettier.rules,
      semi: ['warn', 'always'],
      'no-console': ['warn'],
      'prefer-const': [
        'warn',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'react/jsx-no-target-blank': 'off',
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
