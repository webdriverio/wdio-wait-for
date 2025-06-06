import wdioEslint from '@wdio/eslint'

export default wdioEslint.config([
    {
        ignores: ['dist']
    },
    /**
     * custom test configuration
     */
    {
        files: [
            'tests/**/*',
            'src/cjs/**/*.ts'
        ],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
])
