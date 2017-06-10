module.exports = {
	// entry: ['./src/app.js'],
	entry: {
		index: './src/index.js',
		about: './src/about.js'
	},
	output: {
		path: __dirname + '/build',
		// filename: 'bundle.js'
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ["es2015", "react"]
				}				
			},
			{
				loader: 'style-loader!css-loader!sass-loader',
				test: /\.scss?$/

			},
			{
				loader: 'url-loader?limit=20000',
				test: /\.(png|jpg)$/
			}
		]
	},
	devServer: {
		port: 3456,
		inline: true,
		contentBase: './build'
	}
}
