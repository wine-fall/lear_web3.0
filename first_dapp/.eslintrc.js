/* eslint-disable */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        indent: 'off',
        semi: ['error', 'always'],
        'semi-spacing': ['error'],
        'keyword-spacing': ['error'],
        'comma-spacing': ['error'],
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'object-curly-spacing': ['error', 'never'],
        'arrow-spacing': ['error'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'switch-colon-spacing': ['error'],
        'operator-linebreak': ['error', 'before'],
        'space-before-function-paren': [
            'error',
            {anonymous: 'always', named: 'never'},
        ],
        'space-infix-ops': ['error'],
        'no-unused-vars': 'off',
        'no-var': ['error'],
        'prefer-const': ['error'],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/indent': ['error', 4, {'SwitchCase': 1, 'ignoredNodes': ['PropertyDefinition']}],
        '@typescript-eslint/no-unused-vars': ['error'],
        "@typescript-eslint/triple-slash-reference": ["off"],
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 2,
                when: 'always',
            },
        ],
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/display-name': 'off'
    }
}
