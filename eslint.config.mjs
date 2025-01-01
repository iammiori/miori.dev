import js from '@eslint/js'
import globals from 'globals'
import * as tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  js.configs.recommended,
  {
    ignores: ['.next', 'node_modules', 'dist', '**/*.config.js'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'writable',
      },
      parserOptions: {
        project: true,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      // TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Next.js 관련 규칙
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-sync-scripts': 'error',

      // React Hooks 규칙
      ...reactHooks.configs.recommended.rules,

      // 일반 규칙
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
    },
  },
  eslintPluginPrettier,
  eslintConfigPrettier,
]
