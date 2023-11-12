const path = require("node:path");

const postcss = require("rollup-plugin-postcss");
const alias = require("@rollup/plugin-alias");
const babel = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const strip = require("@rollup/plugin-strip");
const terser = require("@rollup/plugin-terser");
const copy = require("rollup-plugin-copy");
const del = require("rollup-plugin-delete");
const license = require("rollup-plugin-license");
const sri = require("rollup-plugin-sri");
const typescript = require("@rollup/plugin-typescript");
// const {dts} = require("rollup-plugin-dts");

const isProduction = true; // process.env.NODE_ENV === "production";
const isLibrary = true; // process.env.APP_IS_LIBRARY;
const isUniversal = false; // process.env.APP_IS_UNIVERSAL; (UMD);

const rootDirectory = process.cwd();
const sourceFolder = "src";

module.exports = [
	{
		input: "src/index.ts",
		external: [
			"node:assert",
			"node:async_hooks",
			"node:buffer",
			"node:child_process",
			"node:cluster",
			"node:console",
			"node:constants",
			"node:crypto",
			"node:dgram",
			"node:diagnostics_channel",
			"node:dns",
			"node:domain",
			"node:events",
			"node:fs",
			"node:http",
			"node:http2",
			"node:https",
			"node:inspector",
			"node:module",
			"node:net",
			"node:os",
			"node:path",
			"node:perf_hooks",
			"node:process",
			"node:punycode",
			"node:querystring",
			"node:readline",
			"node:repl",
			"node:stream",
			"node:string_decoder",
			"node:timers",
			"node:tls",
			"node:trace_events",
			"node:tty",
			"node:url",
			"node:util",
			"node:v8",
			"node:vm",
			"node:wasi",
			"node:worker_threads",
			"node:zlib",
			"@useit/cache",
			"@useit/icons",
			"@useit/ui",
			"@useit/utils",
			"react",
			"react-dom",
			"recoil"
		],
		output: {
			dir: "dist/cjs",
			format: "cjs",
			sourcemap: true,
			exports: "auto",
		},
		plugins: [
			postcss({
				extensions: [
					".css"
				],
				minimize: true,
			}),
			typescript(),
			// dts(),
			del({ targets: [
				"dist/*",
				"build/*"
			] }),
			alias({
				entries: [
					{ find: "@",
						replacement: path.resolve(rootDirectory, sourceFolder) }
				],
			}),
			nodeResolve({ preferBuiltins: true,
				browser: isUniversal }),
			commonjs({
				include: "node_modules/**",
			}),
			json(),
			babel({ babelrc: true,
				exclude: "node_modules/**",
				babelHelpers: isLibrary ? "runtime" : "bundled" }),
			isProduction
			&& strip({
				functions: [
					"console.log",
					"assert.*",
					"debug",
					"alert"
				],
				debugger: true,
				sourceMap: false,
			}),
			isProduction
			&& terser({
				format: { comments: false },
				compress: { drop_console: true,
					drop_debugger: true },
				mangle: true,
			}),
			isProduction
			&& license({
				banner: { content: { file: path.join(rootDirectory, "LICENSE") } },
			}),
			(!isLibrary || isUniversal) && isProduction && sri({ enabled: true,
				crossorigin: "anonymous" }),
		],
	},
	{
		input: "src/index.ts",
		external: [
			"node:assert",
			"node:async_hooks",
			"node:buffer",
			"node:child_process",
			"node:cluster",
			"node:console",
			"node:constants",
			"node:crypto",
			"node:dgram",
			"node:diagnostics_channel",
			"node:dns",
			"node:domain",
			"node:events",
			"node:fs",
			"node:http",
			"node:http2",
			"node:https",
			"node:inspector",
			"node:module",
			"node:net",
			"node:os",
			"node:path",
			"node:perf_hooks",
			"node:process",
			"node:punycode",
			"node:querystring",
			"node:readline",
			"node:repl",
			"node:stream",
			"node:string_decoder",
			"node:timers",
			"node:tls",
			"node:trace_events",
			"node:tty",
			"node:url",
			"node:util",
			"node:v8",
			"node:vm",
			"node:wasi",
			"node:worker_threads",
			"node:zlib",
			"@useit/cache",
			"@useit/icons",
			"@useit/ui",
			"@useit/utils",
			"react",
			"react-dom",
			"recoil"
		],
		output: {
			dir: "dist/esm",
			format: "esm",
			sourcemap: true,
			exports: "auto",
		},
		plugins: [
			postcss({
				extensions: [
					".css"
				],
				minimize: true,
			}),
			typescript(),
			// dts(),
			alias({
				entries: [
					{ find: "@",
						replacement: path.resolve(rootDirectory, sourceFolder) }
				],
			}),
			nodeResolve({ preferBuiltins: true,
				browser: isUniversal }),
			commonjs({
				include: "node_modules/**",
			}),
			json(),
			babel({ babelrc: true,
				exclude: "node_modules/**",
				babelHelpers: isLibrary ? "runtime" : "bundled" }),
			isProduction
			&& strip({
				functions: [
					"console.log",
					"assert.*",
					"debug",
					"alert"
				],
				debugger: true,
				sourceMap: false,
			}),
			isProduction
			&& terser({
				format: { comments: false },
				compress: { drop_console: true,
					drop_debugger: true },
				mangle: true,
			}),
			isProduction
			&& license({
				banner: { content: { file: path.join(rootDirectory, "LICENSE") } },
			}),
			(!isLibrary || isUniversal) && isProduction && sri({ enabled: true,
				crossorigin: "anonymous" }),
		]
	},
	{
		input: "src/index.ts",
		external: [
			"node:assert",
			"node:async_hooks",
			"node:buffer",
			"node:child_process",
			"node:cluster",
			"node:console",
			"node:constants",
			"node:crypto",
			"node:dgram",
			"node:diagnostics_channel",
			"node:dns",
			"node:domain",
			"node:events",
			"node:fs",
			"node:http",
			"node:http2",
			"node:https",
			"node:inspector",
			"node:module",
			"node:net",
			"node:os",
			"node:path",
			"node:perf_hooks",
			"node:process",
			"node:punycode",
			"node:querystring",
			"node:readline",
			"node:repl",
			"node:stream",
			"node:string_decoder",
			"node:timers",
			"node:tls",
			"node:trace_events",
			"node:tty",
			"node:url",
			"node:util",
			"node:v8",
			"node:vm",
			"node:wasi",
			"node:worker_threads",
			"node:zlib",
			"@useit/cache",
			"@useit/icons",
			"@useit/ui",
			"@useit/utils",
			"react",
			"react-dom",
			"recoil"
		],
		plugins: [
			copy({
				targets: [
					{ src: "src/**/*",
						dest: "dist/lib" }
				],
				flatten: false,
			})
		]
	}
];
