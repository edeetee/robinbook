const webpack = require('webpack')

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Perform customizations to webpack config

    config.plugins = config.plugins.filter(plugin => 
        plugin.constructor.name !== 'UglifyJsPlugin'
    );

    config.plugins.push(new webpack.ProvidePlugin({
	  $: 'jquery',
	  jQuery: 'jquery'
	}))

	config.output.chunkFilename = '[name].chunk.js'

	config.devtool = 'inline-source-map'

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
 
    // Important: return the modified config
    return config
  }
}