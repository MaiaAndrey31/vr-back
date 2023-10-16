module.exports = {
   parser: '@typescript-eslint/parser', 
    "env": {
        "es2021": true,
        "node": true
    },
    plugins: ['@typescript-eslint'],
    "extends": [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typesript-eslint',
        "standard-with-typescript"
        
    ],
    "overrides": [
    ],
    "parserOptions": {
		"ecmaVersion": "latest",
		"project": "./tsconfig.json",
		"parser": "@typescript-eslint/parser"
	},
    "rules": {
    }
}
