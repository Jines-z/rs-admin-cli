const path = require("path")
const express = require("express")
const webpack = require("webpack")
const opn = require('opn')
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackConfig = require('../webpack.config.js')
const compress = require('compression')
const app = express()
const port = 8080
app.use(compress())

const DIST_DIR = path.join(__dirname, "dist")
const compiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
})

devMiddleware.waitUntilValid(()=>{
    opn("http://localhost:"+ port)
})

const hotMiddleware = webpackHotMiddleware(compiler, {
    path : '/__webpack_hmr',
    log  : false
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static(DIST_DIR))

module.exports = {
    app,
    port
}