'use strict';

module.exports = {
	root : true,
	parser : 'babel-eslint',
	parserOptions : {
		ecmaVersion : 2018,
		sourceType : 'module',
		ecmaFeatures : {
			legacyDecorators : true,
		},
	},
	plugins : ['ember'],
	extends : [
		'eslint:recommended',
		'plugin:ember/recommended'
	],
	ignorePatterns : ['/dist/**'],
	env : {
		browser : true,
	},
	rules : {
		'no-console' : ['error', { allow : ['warn', 'error'] }],
		'no-debugger' : 'error',
		'no-var' : 'off',
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
			parserOptions : {
				sourceType : 'script',
			},
			env : {
				browser : false,
				node : true,
			},
			plugins : ['node'],
			extends : ['plugin:node/recommended'],
		},
		{
			// test files
			files : ['tests/**/*-test.{js,ts}'],
			extends : ['plugin:qunit/recommended'],
		},
	],
};
