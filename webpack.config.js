var Encore = require('@symfony/webpack-encore');

Encore
// directory where compiled assets will be stored
    .setOutputPath('source/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .copyFiles({
        from: './source/assets/icons'
    })
    .addEntry('app', './source/assets/js/app.js')

    .disableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
