'use strict';

module.exports = {
	root : true,
	parser : '@typescript-eslint/parser',
	parserOptions : {
		ecmaVersion : 'latest',
		sourceType : 'module',
	},
	plugins : ['ember', '@typescript-eslint'],
	extends : [
		'eslint:recommended',
		'plugin:ember/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	env : {
		browser : true,
	},
	rules : {
		'no-console' : ['error', { allow : ['warn', 'error'] }],
		'no-debugger' : 'error',
		semi : ['error', 'always'],
		indent : [1, 'tab'],
		'space-before-function-paren' : [
			'warn',
			{
				anonymous : 'always',
				named : 'never',
			},
		],
		'key-spacing' : [
			'warn',
			{
				beforeColon : true,
			},
		],
		'operator-linebreak' : ['error', 'after'],
		'no-nested-ternary' : 'error',
		quotes : ['error', 'single'],
		'arrow-parens' : ['error', 'always'],
		'@typescript-eslint/no-explicit-any' : 'warn',
	},
	overrides : [
		// node files
		{
			files : [
				'./.eslintrc.js',
				'./.prettierrc.js',
				'./.template-lintrc.js',
				'./ember-cli-build.js',
				'./index.js',
				'./testem.js',
				'./blueprints/*/index.js',
				'./config/**/*.js',
				'./tests/dummy/config/**/*.js',
			],
			parser : 'espree',
			parserOptions : {
				sourceType : 'script',
				ecmaVersion : 'latest',
			},
			env : {
				browser : false,
				node : true,
			},
			plugins : ['n'],
			extends : ['plugin:n/recommended'],
			rules : {
				'@typescript-eslint/no-var-requires' : 'off',
				'@typescript-eslint/no-require-imports' : 'off',
			},
		},
		{
			// test files
			files : ['tests/**/*-test.{js,ts}'],
			extends : ['plugin:qunit/recommended'],
		},
	],
};
