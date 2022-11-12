const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
	entry: './src/app.js',

	// 🟠 Developemt mode
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	resolve: {
		alias: {
			utils: path.resolve(__dirname, 'src')
		}
	},
	plugins: [new NodemonPlugin()]
};
