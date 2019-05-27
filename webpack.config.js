var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('source/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .copyFiles({
        from: './source/assets/icons'
    })
    .addStyleEntry('css/app', './source/assets/css/app.css')
    .addEntry('js/app', './source/assets/js/app.js')
    .enablePostCssLoader()
    .disableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .enableSassLoader(function (options) {}, {
        resolveUrlLoader: false
    })
;

module.exports = Encore.getWebpackConfig();