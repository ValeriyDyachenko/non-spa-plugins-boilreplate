module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "google",
        "plugin:react/recommended"
    ],
    "rules": {
        "linebreak-style": 0,
        "no-console": "off",
        "require-jsdoc": "off",
    },
    "globals": {
        "window": true,
        "document": true
    },
    "env": {
        "node": true,
        "commonjs": true
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "16.4",
        },
    }
};
