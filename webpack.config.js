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
        main   : [project.basePath + "/app/main.js"],
        vendor : project.vendor
    },
    output: {
        path     : path.resolve(project.basePath, project.outDir),
        filename : envDevelopment ? '[name].js' : "[name].[chunkhash:5].js",
        publicPath: project.publicPath
    },
    devtool: devtool,
    module : {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules        : true,
                                importLoaders  : 1,
                                localIdentName : '[local]',
                                minimize: {
                                    autoprefixer: {
                                        add: true,
                                        remove: true,
                                        browsers: ['last 2 versions'],
                                    },
                                    discardComments: {
                                        removeAll : true,
                                    },
                                    discardUnused: false,
                                    mergeIdents: false,
                                    reduceIdents: false,
                                    safe: true
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
                test    : /\.(png|jpg|gif)$/,
                loader  : 'url-loader',
                options : {
                    limit : 8192,
                },
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
            minify   : {
                collapseWhitespace: true,
            },
            chunksSortMode: 'dependency'
        }),
        new ExtractTextPlugin({
            filename : 'index.css',
            disable  : false,
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ],
}

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
        new webpack.LoaderOptionsPlugin({
            minimize : true,
            debug    : false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
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
                drop_console: true
            }
        })
    )
}

module.exports = config