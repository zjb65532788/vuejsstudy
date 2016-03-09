var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {//entry 中的属性是与output中filename中的[name]相对应,如app对应app.js
		app: [path.join(__dirname, 'src/ceshi.js')],
		ceshi1:[path.join(__dirname, 'src/ceshi1.js')],
		/*drap:['webpack/hot/dev-server', path.join(__dirname, 'src/drag_index.js')],*/
		vendors: ['vue','vue-router']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: 'chunks/[name].chunk.js',
	},
	resolve: {
	    extensions: ['', '.js', '.vue'],
	},
	module: {
		/*preLoaders: [
	      {
	        test: /\.vue$/,
	        loader: 'eslint'
	      },
	      {
	        test: /\.js$/,
	        loader: 'eslint'
	      }
	    ],*/
		loaders: [{
				test: /\.(vue)$/,
        		loader: 'vue',
			}, 
			{
		        test: /\.js$/,
		        loader: 'babel',
		        query: {
					presets: ['es2015']
				}
		    },
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}, // use ! to chain loaders
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			} // inline base64 URLs for <=8k images, direct URLs for the rest
		]
	},
	plugins: [
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};