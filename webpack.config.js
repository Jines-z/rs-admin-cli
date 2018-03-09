const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('./project.config.js')

const envDevelopment = project.env === 'development'
const envProduction = project.env === 'production'
const devtool = project.sourceMap ? 'source-map' : false

const config = {
    entry: {
        normalize:[path.join(project.basePath, project.srcDir, 'normalize')],
        main   : [path.join(project.basePath, project.srcDir)],
        vendor : project.vendor
    },
    output: {
        path      : path.resolve(project.basePath, project.outDir),
        filename  : envDevelopment ? 'js/[name].js' : "js/[name].[chunkhash:5].js",
        publicPath: project.publicPath
    },
    devtool: devtool,
    resolve: {
        modules: [
            project.srcDir,
            'node_modules',
        ],
        extensions: ['*', '.js', '.jsx', '.json', 'less', 'css']
    },
    module : {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use : {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use : ExtractTextPlugin.extract({
                    use: [
                        {
                            loader : 'css-loader',
                            options: {
                                importLoaders  : 1,
                                localIdentName : '[local]',
                                minimize: {
                                    autoprefixer: {
                                        add     : true,
                                        remove  : true,
                                        browsers: ['last 2 versions'],
                                    },
                                    discardComments: {
                                        removeAll : true,
                                    },
                                    discardUnused: false,
                                    mergeIdents  : false,
                                    reduceIdents : false,
                                    safe         : true,
                                },
                            }
                        },
                        {
                            loader: 'less-loader',
                        },
                    ],
                    fallback: 'style-loader',
                }),
            },
            {
                test    : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader  : 'url-loader',
                options : {
                    limit: 10000,
                    outputPath: "images"
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': { NODE_ENV: JSON.stringify(project.env) }
            }
        }),
        new HtmlWebpackPlugin({
            template : 'index.html',
            inject   : true,
            favicon: path.resolve('favicon.ico'),
            minify   : {
                collapseWhitespace: true,
            }
        }),
        new ExtractTextPlugin({
            filename : 'css/[name].[contenthash:5].css',
            disable  : envDevelopment,
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['normalize', 'vendor', 'manifest']
        })
    ],
}

const fontLoader = [['woff', 'application/font-woff'], ['woff2', 'application/font-woff2'], ['otf', 'font/opentype'], ['ttf', 'application/octet-stream'], ['eot', 'application/vnd.ms-fontobject'], ['svg', 'image/svg+xml']]
fontLoader.forEach((font) => {
    let extension = font[0]
    let mimetype = font[1]
    config.module.rules.push({
        test    : new RegExp(`\\.${extension}$`),
        loader  : 'url-loader',
        options : {
            name  : 'fonts/[name].[ext]',
            limit : 10000,
            mimetype,
        },
    })
})

if (envDevelopment) {
    config.entry.main.push(
        'webpack-hot-middleware/client?path=./__webpack_hmr'
    )
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    )
}

if (envProduction) {
    config.plugins.push(
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize : true,
            debug    : false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: project.sourceMap,
            comments : false,
            compress : {
                warnings     : false,
                screw_ie8    : true,
                conditionals : true,
                unused       : true,
                comparisons  : true,
                sequences    : true,
                dead_code    : true,
                evaluate     : true,
                if_return    : true,
                join_vars    : true,
                drop_debugger: true,
                drop_console : true
            }
        })
    )
}

module.exports = config