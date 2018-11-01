const webpack           = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path              = require('path')
const project           = require('../project.config')

module.exports = {
    entry: {
        vendor: project.vendor
    },
    mode  : 'production',
    output: {
        path     : path.resolve(project.basePath, 'dll'),
        filename : '[name].dll.[hash:5].js',
        library  : '[name]_library'
    },
    performance: {
        hints: false
    },
    plugins: [
        new ProgressBarPlugin({
            width      : 40,
            clear      : true,
            summary    : false,
            format     : '[:bar]',
            complete   : '\u001b[47m \u001b[0m',
            incomplete : '\u001b[37m \u001b[0m'
        }),
        new webpack.DllPlugin({
            name    : '[name]_library',
            path    : path.resolve(project.basePath, 'dll', 'manifest.json'),
            context : project.basePath
        })
    ]
};
