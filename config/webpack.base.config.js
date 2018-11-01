const webpack             = require('webpack')
const path                = require('path')
const HtmlWebpackPlugin   = require('html-webpack-plugin')
const IncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const eslintFormatter     = require('eslint-friendly-formatter')
const project             = require('../project.config.js')
const isEsLint            = project.eslint
const SRC_DIR             = path.join(project.basePath, project.srcDir)

const eslintRule = () => ({
    test: /(\.jsx|\.js)$/,
    use : {
        loader : 'eslint-loader?cacheDirectory',
        options: {
            formatter: eslintFormatter
        }
    },
    enforce: 'pre',
    include: SRC_DIR,
    exclude: /node_modules/
})

const base = {
    entry: {
        main: [SRC_DIR]
    },
    output: {
        path      : path.resolve(project.basePath, project.outDir),
        publicPath: project.publicPath
    },
    resolve : {
        modules: [
            project.srcDir,
            'node_modules',
        ],
        alias: {
            '@': SRC_DIR
        },
        extensions: ['*', '.js', '.jsx', '.json', '.less', '.css']
    },
    module : {
        rules: [
            ...(isEsLint ? [eslintRule()] : []),
            {
                test: /(\.jsx|\.js)$/,
                use : {
                    loader: 'babel-loader?cacheDirectory'
                },
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use : {
                    loader  : 'url-loader',
                    options : {
                        limit     : 10000,
                        outputPath: "images"
                    }
                },
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
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context : project.basePath,
            manifest: path.resolve(project.basePath, 'dll', 'manifest.json')
        }),
        new HtmlWebpackPlugin({
            template : 'index.html',
            inject   : true,
            favicon  : path.resolve('favicon.ico'),
            minify   : {
                collapseWhitespace: true,
            }
        }),
        new IncludeAssetsPlugin({
            assets: [{
                path: 'dll',
                glob: '*.js',
                globPath: path.join(project.basePath, 'dll')
            }],
            append: false
        })
    ]
}

const fontLoader = [['woff', 'application/font-woff'], ['woff2', 'application/font-woff2'], ['otf', 'font/opentype'], ['ttf', 'application/octet-stream'], ['eot', 'application/vnd.ms-fontobject'], ['svg', 'image/svg+xml']]
fontLoader.forEach((font) => {
    let extension = font[0]
    let mimetype = font[1]
    base.module.rules.push({
        test    : new RegExp(`\\.${extension}$`),
        loader  : 'url-loader',
        options : {
            name  : 'fonts/[name].[ext]',
            limit : 10000,
            mimetype
        }
    })
})

module.exports = base
