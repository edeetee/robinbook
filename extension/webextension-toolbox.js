const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev, vendor }) => {

	//no uglify
    config.plugins = config.plugins.filter(plugin => 
        plugin.constructor.name !== 'UglifyJsPlugin'
    );

	//jquery without import
    config.plugins.push(new webpack.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery'
	}))

	//output all vendors to one chunk (just jQuery)
	config.optimization = {
		minimize: false,
		splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendor",
		            chunks: "all"
		        }
		    }
		}
	}
	//output chunks
	config.output.chunkFilename = '[name].js'

	//source map for even better output
	config.devtool = 'source-map'
 
    return config
  }
}