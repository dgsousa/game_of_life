module.exports = {
	context: __dirname + "/app",
	entry: "./index.jsx",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
					{
						test: /\.jsx$/,
						exclude: '/node_modules/',
						loader: "babel-loader"
					},
					{
						test: /\.scss$/,
						loaders: ['style-loader', 'css-loader', 'sass-loader']
					}
		]
	}
}