const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
let mode = 'development';
let devtool = 'eval';
let filename = '[name]';
let chunkFilename = '[id]';

if (isProd) {
	mode = 'production';
	devtool = 'source-map';
	filename = '[name].[hash]';
	chunkFilename = '[id].[hash]';
}

module.exports = {
	mode,
	devtool,
	entry: {
		main: './src/index.js',
	},
	output: {
		filename: `${filename}.js`,
		chunkFilename: `${chunkFilename}.js`,
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: `${filename}.css`,
			chunkFilename: `${chunkFilename}.css`,
		}),
	],
	devServer: {
		contentBase: './dist',
	},
};
