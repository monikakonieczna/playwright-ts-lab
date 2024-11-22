import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import typescriptParser from '@typescript-eslint/parser'; // Import the TypeScript parser

export default [
  {
    ignores: ['node_modules/', 'dist/'], // Ignore these directories
  },
  {
    files: ['**/*.js', '**/*.ts'], // Apply to JavaScript and TypeScript files
    languageOptions: {
      parser: typescriptParser, // Use the imported parser object
      ecmaVersion: 'latest', // Enable the latest ECMAScript features
      sourceType: 'module',  // Enable ES modules
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Use the TypeScript plugin
    },
    rules: {
      'no-unused-vars': 'warn',
      'quotes': ['error', 'single'], // Enforce single quotes
    },
  },
];