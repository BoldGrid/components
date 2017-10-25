const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const GenerateJsonPlugin = require( 'generate-json-webpack-plugin' );
const MinifyPlugin = require( 'babel-minify-webpack-plugin' );

const srcDir = path.resolve( __dirname, '..', 'src' );
const distDir = path.resolve( __dirname, '..', 'dist' );

module.exports = {
	context: srcDir,

	devtool: false,

	entry: {
		application: './app/index.js',
		components: srcDir + '/components/components.scss'
	},

	output: {
		filename: '[name].[hash].min.js',
		path: distDir,
		publicPath: '/',
		sourceMapFilename: '[name].[hash].map'
	},

	module: {
		rules: [
			{
				test: /\.ejs$/,
				loader: 'ejs-loader'
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',

				loader: 'eslint-loader',
				options: {
					emitWarning: true
				}
			},
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						{
							loader: 'sass-loader'
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: ( loader ) => [
									require( 'autoprefixer' )
								]
							}
						}
					]
				} )
			},
			{
				test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 10000, // Use data url for assets <= 10KB
					name: 'static/[name].[hash].[ext]'
				}
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin( [
			{
				from: './../static',
				to: ''
			}
		] ),

		new GenerateJsonPlugin( 'json/components.json', require( '../src/components/config.js' ) ),

		new MinifyPlugin(),

		new webpack.NamedModulesPlugin(),

		new HtmlWebpackPlugin( {
			template: path.join( srcDir, 'app/index.ejs' ),
			path: distDir,
			filename: 'index.html',
			minify: {
				removeComments: true,
				minifyJS: true,
				minifyCSS: true,
				collapseWhitespace: true
			}
		} ),

		new ExtractTextPlugin( 'css/[name].css' ),
		new ExtractTextPlugin( 'css/[name].min.css' )
	]
};
