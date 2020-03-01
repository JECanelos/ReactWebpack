const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	plugins: {
		'postcss-preset-env': {},
		'cssnano': isProd ? {} : false,
	},
};
