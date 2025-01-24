import js from '@eslint/js'
import globals from 'globals'
import * as tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImport from 'eslint-plugin-import'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/*.config.js',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
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
      import: eslintPluginImport,
    },
    rules: {
      'no-unused-vars': 'off',
      // TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          args: 'none',
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

      // import 순서
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // 내장 모듈과 외부 모듈
            'internal', // 내부 모듈
            ['parent', 'sibling', 'index'], // 상위, 형제, index 모듈
            'type', // 타입 선언 (TypeScript 경우)
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'builtin',
            },
            {
              pattern: '@/*',
              group: 'internal',
              position: 'after', // "@/" 경로가 internal 그룹의 마지막에 오도록
            },
          ],
          'newlines-between': 'always', // 그룹 사이에 빈 줄 추가
          alphabetize: {
            order: 'asc', // 알파벳 순서대로 정렬
            caseInsensitive: true, // 대소문자 구분 없이 정렬
          },
          pathGroupsExcludedImportTypes: [], // 불필요한 제외 항목을 제거
        },
      ],
    },
  },
  eslintPluginPrettier,
  eslintConfigPrettier,
]
