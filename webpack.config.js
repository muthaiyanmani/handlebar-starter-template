const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['/src/app.js'],

	// 🟠 Developemt mode
	mode: 'development',
	output: {
		filename: 'bundle.min.js',
		path: path.resolve(__dirname, 'dist'),
		chunkFormat: 'commonjs'
	},
	resolve: {
		alias: {
			js: path.resolve(__dirname, 'src/js'),
			templates: path.resolve(__dirname, 'src/templates'),
			css: path.resolve(__dirname, 'src/css')
		}
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		// 🟠 Disabled HMR
		hot: false,
		compress: true,
		port: 9000
	},
	module: {
		rules: [{ test: /\.handlebars$/, loader: 'handlebars-loader' }]
	},
	plugins: [new HtmlWebpackPlugin()]
};
