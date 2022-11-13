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
			js: path.resolve(__dirname, 'src/components/js'),
			templates: path.resolve(__dirname, 'src/components/templates'),
			css: path.resolve(__dirname, 'src/components/css'),
			routes: path.resolve(__dirname, 'src/routes'),
			components: path.resolve(__dirname, 'src/components'),
			utils: path.resolve(__dirname, 'src/utils')
		}
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		// 🟠 Disabled HMR
		hot: false,
		compress: true,
		port: 3000
	},
	module: {
		rules: [{ test: /\.handlebars$/, loader: 'handlebars-loader' }]
	},
	plugins: [new HtmlWebpackPlugin()]
};
