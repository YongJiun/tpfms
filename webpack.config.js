var webpack = require('webpack')
var path = require('path')

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractLess = new ExtractTextPlugin({
	filename: "style.css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: './app/js/index.jsx',

	devtool: 'sourcemap',

	resolve: {
		extensions: [ '.js', '.jsx' ],
	},

	output: {
  		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},

	module: {
		rules: [

			{ test: /(\.js|.jsx$)/,
				exclude: '/node_modules/',
				use: [
					{loader: 'babel-loader?presets[]=es2015&presets[]=react'}],
			},
			
			{ test: /\.less$/, use: extractLess.extract({
				use: [
					{loader: "css-loader", options: {sourceMap: true}}, 
					{loader: "autoprefixer-loader"}, 
					{loader: "less-loader", options: {sourceMap: true}}
					], 
					fallback: "style-loader"
				}) 
			},
		],
	},

	plugins: process.env.NODE_ENV === 'production' ? [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	] : [
		extractLess
	],
}
