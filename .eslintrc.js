module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-var': 'error',
        'semi': [0, 'always'],
        'no-unused-vars': [
            "error",
            {
                'vars': 'all',
                'args': 'after-used',
                'ignoreRestSiblings': false
            }
        ],
        'react/prop-types': 0
    }
};
