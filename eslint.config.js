import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const autoImportGlobals = JSON.parse(readFileSync(join(__dirname, '.eslintrc-auto-import.json'), 'utf-8'));

const customGlobals = Object.keys(autoImportGlobals.globals).reduce((acc, key) => {
  acc[key] = 'readonly';
  return acc;
}, {});

export default [
  {
    ignores: ['dist', 'src/components.d.ts', 'src/auto-imports.d.ts', 'functions/**/*.ts'],
  },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsparser,
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...customGlobals,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'vue/no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...customGlobals,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
  },
  {
    files: ['src/components.d.ts', 'src/auto-imports.d.ts'],
    rules: {
      'eslint-comments/no-unused-disable': 'off',
    },
  },
];

