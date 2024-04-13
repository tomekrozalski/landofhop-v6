/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'no-undef': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'svelte/valid-compile': 'off', // @ToDo: remove in a future
		'svelte/no-at-html-tags': 'off' // @ToDo: remove in a future
	}
};
