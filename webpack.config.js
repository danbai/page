var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		hot: true,
		inline: true
	},
	entry: './src/index.js',
	output: {
		path: path.join(__dirname),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loader: ['style-loader', 'css-loader', 'sass-loader']
		}]
	}
};