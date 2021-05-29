module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transformIgnorePatterns: [
        '/node_modules/(?!@fe/utils)',
    ],
    testMatch: [
        '<rootDir>/tests/**/*.js',
    ],
    verbose: true,
    reporters: [
        'default',
        [
            'jest-junit', {
                outputDirectory: 'dist/coverage',
            },
        ],
    ],
    coverageReporters: [
        'html',
        'text-summary',
    ],
    coverageDirectory: 'dist/coverage',
    collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
    setupFilesAfterEnv: ['jest-extended'],
};
