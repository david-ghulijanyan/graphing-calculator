const runtimePackageJson = require("@babel/runtime/package.json");

module.exports = {
	presets: [
		[
			"@babel/preset-typescript",
			"@babel/preset-env",
			{
				targets: "> 0.25%, not dead",
				modules: false,
				exclude: [
					"transform-typeof-symbol"
				],
				useBuiltIns: false,
				corejs: false
			}
		],
		[
			"@babel/preset-react",
			{ development: false }
		]
	],
	plugins: [
		[
			"@babel/plugin-transform-runtime",
			{
				corejs: false,
				helpers: true,
				regenerator: true,
				version: runtimePackageJson.version
			}
		],
	],
	env: {
		esm: {
			presets: [
				[
					"@babel/preset-env",
					{
						targets: "> 0.25%, not dead",
						modules: false,
						exclude: [
							"transform-typeof-symbol"
						],
						useBuiltIns: false,
						corejs: false
					}
				],
				[
					"@babel/preset-react",
					{ development: false }
				]
			],
			plugins: [
				[
					"@babel/plugin-transform-runtime",
					{
						corejs: false,
						helpers: true,
						regenerator: true,
						version: runtimePackageJson.version
					}
				],
				[
					"babel-plugin-transform-react-remove-prop-types",
					{ removeImport: true }
				]
			]
		},
		cjs: {
			presets: [
				[
					"@babel/preset-env",
					{
						targets: "> 0.25%, not dead",
						modules: "commonjs",
						exclude: [
							"transform-typeof-symbol"
						],
						useBuiltIns: false,
						corejs: false
					}
				],
				[
					"@babel/preset-react",
					{ development: false }
				]
			],
			plugins: [
				[
					"@babel/plugin-transform-runtime",
					{
						corejs: false,
						helpers: true,
						regenerator: true,
						version: runtimePackageJson.version
					}
				],
				[
					"babel-plugin-transform-react-remove-prop-types",
					{ removeImport: true }
				]
			]
		}
	}
};