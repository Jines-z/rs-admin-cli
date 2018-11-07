const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar           = require('webpackbar')
const CopyWebpackPlugin    = require('copy-webpack-plugin')
const AutoPreFixer         = require('autoprefixer')
const merge                = require('webpack-merge')
const CssNaNo              = require('cssnano')
const path                 = require('path')

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
                            importLoaders  : 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                AutoPreFixer({
                                    browsers: ['> 1%', 'last 5 version'],
                                    cascade : false
                                }),
                                CssNaNo()
                            ]
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
    optimization: {
        sideEffects: false,
        splitChunks: {
            chunks     :'all',
            minSize    : 30000,
            minChunks  : 1,
            cacheGroups: {
                common: {
                    name    : 'common',
                    test    : /node_modules/,
                    chunks  : 'initial',
                    priority: -10,
                    enforce : true
                },
                styles: {
                    name   : 'styles',
                    test   : /(\.less|\.css)$/,
                    chunks : 'all',
                    enforce: true,
                }
            }
        }
    },
    plugins: [
        new WebpackBar({
            minimal: false
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
