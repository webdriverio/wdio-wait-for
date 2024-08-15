module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'unicorn', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        node: true
    },
    rules: {
        'quotes': [2, 'single'],
        'unicorn/prefer-node-protocol': ['error'],
        'import/extensions': ['error', 'ignorePackages'],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-namespace': 1,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
    },
}
