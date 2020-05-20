module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		quotes: [2, "double"],
		"no-tabs": [2, { allowIndentationTabs: true }],
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"react/prop-types": 0,
		"react/jsx-indent": 0,
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-fragments": 0,
		"comma-dangle": 0
	},
};
