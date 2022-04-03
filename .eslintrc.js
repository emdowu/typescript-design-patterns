const path = require('path');

module.exports = {
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'autofix', 'jest'],
  ignorePatterns: ['node_modules', '**/dist', '**/vendors/**', 'docs'],
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports'],
      extends: ['airbnb-typescript', 'plugin:react/recommended'],
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      rules: {
        'no-underscore-dangle': 0,
        'spaced-comment': 0,
        'no-nested-ternary': 0,
        'consistent-return': 1,
        'prettier/prettier': 0,
        '@typescript-eslint/naming-convention': 0,
        'no-plusplus': 0,
        'react/prop-types': 0,
        'react/destructuring-assignment': 1, // Vscode doesn"t support automatically destructuring, it"s a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 0, // Next.js use his own internal link system
        'react/require-default-props': 0, // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 0, // _app.tsx uses spread operator and also,
        'no-bitwise': ['error', { allow: ['~'] }],
        'import/no-cycle': 0,
        'import/order': [
          1,
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/prefer-default-export': 2, // Named export is easier to refactor automatically
        'class-methods-use-this': 0,
        'no-multi-assign': 0,
        '@typescript-eslint/no-unused-vars': 2,
      },
    },
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
};
