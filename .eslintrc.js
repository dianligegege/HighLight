module.exports = {
    env: {
        browser: true,
    },
    rules: {
        'global-require': 'off',
        'func-names': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4,
            { SwitchCase: 1 },
        ],

        'max-len': ['error', { code: 150 }],

        'no-param-reassign': 'off',
        'consistent-return': 'off',

        // jsdoc
        'jsdoc/check-param-names': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/newline-after-description': 1,
        'jsdoc/require-description-complete-sentence': 0,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 0,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-name': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 1,

        'import/extensions': ['error', 'always', {
            vue: 'never',
            js: 'never',
        }],
        'no-shadow': [
            'error',
            {
                allow: [
                    'state',
                    'getters',
                ],
            },
        ],
        // 4 行空格缩进
        'vue/html-indent': [
            'error',
            4,
        ],
        'vue/custom-event-name-casing': 'off',
        "linebreak-style": 0,
    },
    settings: {
        jsdoc: {
            preferredTypes: {
                object: 'Object',
            },
            tagNamePreference: {
                returns: 'return',
            },
        },
        'import/extensions': [
            '.vue',
            '.js',
        ],
        'import/resolver': {
            [require.resolve('eslint-import-resolver-node')]: {},
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.vue', '.js'],
            },
        },
    },

    plugins: [
        'chai-friendly',
        'jsdoc',
    ],

    extends: [
        'airbnb-base',
        'plugin:vue/strongly-recommended',
        'plugin:chai-friendly/recommended',
    ],

    overrides: [
        {
            files: [
                '**/tests/**/*.js',
            ],
            env: {
                mocha: true,
                jest: true,
            },
        },
    ],
};
