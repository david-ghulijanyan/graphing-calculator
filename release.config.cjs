module.exports = {
	branches: [
		{ name: "feat/*",
			channel: "features" },
		{ name: "fix/*",
			channel: "fixes" },
		{ name: "main",
			channel: "main" },
		{ name: "dev",
			channel: "dev" },
	],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/changelog",
		[
			"@semantic-release/release-notes-generator",
		],
		// '@semantic-release/npm',
		[
			"@semantic-release/git",
			{
				assets: [
					"package.json",
					"CHANGELOG.md"
				],
				message: "release(version): Release ${nextRelease.version} [skip ci]\n"
					+ "\n"
					+ "${nextRelease.notes}"
			}
		]
	],
	preset: "angular",
	releaseRules: [
		{ breaking: true,
			release: "major" },
		{ revert: true,
			release: "patch" },
		{ type: "feat",
			release: "minor" },
		{ type: "fix",
			release: "patch" }
	]
};