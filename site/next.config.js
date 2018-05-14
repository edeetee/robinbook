module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    },
    assetPrefix: process.env.NODE_ENV == 'production' ? '/robinbook' : '',
    webpack: function (cfg) {
        cfg.plugins = cfg.plugins.filter(plugin => 
            plugin.constructor.name !== 'UglifyJsPlugin'
        );

        return cfg
    }
}