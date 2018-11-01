const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin    = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin    = require('copy-webpack-plugin')
const merge   = require('webpack-merge')
const path    = require('path')
const base    = require('./webpack.base.config')
const project = require('../project.config')

const production = {
    output: {
        filename: 'js/[name].[chunkhash:5].js'
    },
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /(\.less|\.css)$/,
                use :[
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options: {
                            importLoaders  : 1,
                            minimize: {
                                autoprefixer: {
                                    add     : true,
                                    remove  : true,
                                    browsers: ['last 2 versions'],
                                },
                                discardComments : {
                                    removeAll : true,
                                },
                                discardUnused: false,
                                mergeIdents  : false,
                                reduceIdents : false,
                                safe         : true
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin({
            width      : 40,
            format     : '[:bar]',
            complete   : '\u001b[47m \u001b[0m',
            incomplete : '\u001b[37m \u001b[0m',
            clear      : true,
            summary    : false
        }),
        new MiniCssExtractPlugin({
            filename      : 'css/main.[chunkhash:5].css',
            chunkFilename : 'css/main.[contenthash:5].css'
        }),
        new CopyWebpackPlugin([{
            from : path.join(project.basePath, 'dll'),
            to   : path.join(project.basePath, 'dist', 'dll')
        }])
    ]
}

module.exports = merge(base, production)
