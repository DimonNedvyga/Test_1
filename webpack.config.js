const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: { main:'./src/index.js',
            two: './src/two.js'
            },
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'js/[name].js',
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
        		use: { 
          		loader: "babel-loader"
        		}
				  
			},
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }

  ]
	},
	plugins: [ 
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/catalog.html'
    }),
    new HtmlWebpackPlugin({
    filename: 'addRemove.html',
    template: path.join(__dirname, 'src/addRemove.html')
    }),
    new ExtractTextPlugin({filename: 'css/style.css'})
  ]

}