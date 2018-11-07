const webpack             = require('webpack')
const path                = require('path')
const HtmlWebpackPlugin   = require('html-webpack-plugin')
const IncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const ESLintFormatter     = require('eslint-friendly-formatter')
const project             = require('../project.config.js')
const isEsLint            = project.eslint
const SRC_DIR             = path.join(project.basePath, project.srcDir)

const fonts = [
    ['otf'  , 'font/opentype'],
    ['ttf'  , 'application/octet-stream'],
    ['eot'  , 'application/vnd.ms-fontobject'],
    ['svg'  , 'image/svg+xml'],
    ['woff' , 'application/font-woff'],
    ['woff2', 'application/font-woff2']
]

const ESLintRule = () => ({
    test: /(\.jsx|\.js)$/,
    use : {
        loader : 'eslint-loader?cacheDirectory',
        options: {
            formatter: ESLintFormatter
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
            ...(isEsLint ? [ESLintRule()] : []),
            {
                test: /(\.jsx|\.js)$/,
                use : {
                    loader: 'babel-loader?cacheDirectory'
                },
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.(png|PNG|jpe?g|JPG|gif|GIF)(\?.*)?$/,
                use : {
                    loader  : 'url-loader',
                    options : {
                        limit: 10000,
                        name: 'images/[name].[hash:5].[ext]'
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use : {
                    loader  : 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:5].[ext]'
                    }
                }
            },
            ...(() => {
                let rules = []
                fonts.forEach((item) => {
                    rules.push({
                        test: new RegExp(`\\.${item[0]}$`),
                        use : {
                            loader  : 'url-loader',
                            options : {
                                name    : 'fonts/[name].[hash:5].[ext]',
                                limit   : 10000,
                                mimetype: item[1]
                            }
                        }
                    })
                })
                return rules
            })()
        ]
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

module.exports = base
