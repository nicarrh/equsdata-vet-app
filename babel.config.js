module.exports = {
	presets: ['babel-preset-expo'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@/auth': './src/auth/index.ts',
					'@/shared/*': './src/shared/*',		
					'@/navigation': './src/navigation/index.ts',		
				},
			},
		],
	],
};
