const webpack = require('webpack')
const merge   = require('webpack-merge')
const base    = require('./webpack.base.config')
const {
    srcDir,
    theme
} = require('../project.config')

const development = {
    entry: {
        main: ['webpack-hot-middleware/client?path=./__webpack_hmr']
    },
    mode   : 'development',
    devtool: 'cheap-module-eval-source-map',
    module : {
        rules: [
            {
                test: /(\.less|\.css)$/,
                use : [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader : 'less-loader',
                    options: {
                        javascriptEnabled: true,
                        paths: [srcDir],
                        modifyVars: theme
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(base, development)
