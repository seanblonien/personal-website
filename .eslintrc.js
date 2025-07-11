module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'], // Your TypeScript files extension
        parserOptions: {
          project: ['./tsconfig.json'], // Specify it only for TypeScript files
        },
      }
    ],
    env: {
      node: true,
      browser: true,
      jest: true,
      es6: true,
    },
    plugins: [
      'react',
      'jsx-a11y',
      'import',
      'unused-imports',
      'prettier',
      'eslint-plugin-tsdoc',
      '@typescript-eslint',
    ],
    extends: [
      'react-app',
      'airbnb',
      'airbnb/hooks',
      'prettier',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['node_modules', 'build', '.eslintrc.js'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        },
      },
      'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
      react: {
        version: '17.0',
      },
      jsdoc: {
        mode: 'typescript',
      },
    },
    reportUnusedDisableDirectives: true,
    rules: {
      // other
      'no-useless-constructor': 'off',
      'no-underscore-dangle': ['warn', {allow: ['_id']}],
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      // prettier
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'lf',
          semi: true,
          singleQuote: true,
          bracketSpacing: false,
          jsxSingleQuote: true,
          bracketSameLine: false,
          arrowParens: 'avoid',
          tabWidth: 2,
          trailingComma: 'all',
          printWidth: 100,
        },
      ],
      // TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      '@typescript-eslint/no-use-before-define': 'warn',
      // React
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
      'react/prop-types': ['off', {}],
      'react/jsx-no-undef': ['error', { 'allowGlobals': true }],
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-tag-spacing': ['error', {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never'
      }],
      'react/function-component-definition': ['error', {namedComponents: 'arrow-function'}],
      'jsx-a11y/media-has-caption': 'off',
      // import
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/order': [
        'warn',
        {'newlines-between': 'never', alphabetize: {order: 'asc', caseInsensitive: true}},
      ],
      'import/prefer-default-export': 'off',
      // unused-import
      'unused-imports/no-unused-imports-ts': 'warn',
      'unused-imports/no-unused-vars-ts': [
        'warn',
        {vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
      ],
    },
  };
  