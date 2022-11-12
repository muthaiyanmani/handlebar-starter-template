module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['standard', 'eslint:recommended', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		quotes: ['warn', 'single'],
		semi: ['warn', 'always']
	}
};
