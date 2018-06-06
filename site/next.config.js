module.exports = {
    //single page map
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    },

    //internal link prefix for github pages
    assetPrefix: process.env.NODE_ENV == 'production' ? '/robinbook' : '',

    webpack: function (cfg) {
        //no uglify
        cfg.plugins = cfg.plugins.filter(plugin => 
            plugin.constructor.name !== 'UglifyJsPlugin'
        );

        return cfg
    }
}