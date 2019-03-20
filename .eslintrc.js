module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser : true,
        commonjs: true,
        es6     : true
    },
    extends: [
        'standard',
        'plugin:react/recommended'
    ],
    globals: {
        JSBridge : true,
        window   : true,
        document : true,
        wx       : true,
        __ENV__  : true
    },
    parserOptions: {
        sourceType  : 'module',
        ecmaVersion : 6,
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'standard'
    ],
    settings: {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.js',
                    '.jsx'
                ]
            }
        },
        'react': {
            'version': '16.2.0'
        }
    },
    rules: {
        'indent'                            : ['error', 4, { 'SwitchCase': 1 }],
        'eqeqeq'                            : 'off',
        'camelcase'                         : 'off',
        'no-extra-boolean-cast'             : 'off',
        'padded-blocks'                     : 'off',
        'eol-last'                          : 'off',
        'no-useless-escape'                 : 'off',
        'no-useless-constructor'            : 'off',
        'semi'                              : ['error', "never"],
        'arrow-parens'                      : ['error', 'as-needed'],
        'no-multiple-empty-lines'           : ['error', { 'max': 1 }],
        'space-before-function-paren'       : ['error', 'never'],
        'no-trailing-spaces'                : ['error', { 'skipBlankLines': true }],
        'jsx-quotes'                        : ['error', 'prefer-single'],
        'no-unreachable'                    : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger'                       : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console'                        : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'react/prop-types'                  : 'off',
        "react/no-array-index-key"          : 'off',
        'react/jsx-closing-bracket-location': 'error',
        "react/self-closing-comp"           : ['error', {"component": true, "html": false}],
        'react/jsx-tag-spacing'             : ['error', {'beforeSelfClosing': 'always'}]
    }
}
