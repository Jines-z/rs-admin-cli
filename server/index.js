const express              = require("express")
const webpack              = require("webpack")
const opn                  = require('opn')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig        = require('../config/webpack.dev.config')
const compress             = require('compression')
const project              = require('../project.config')
const app                  = express()
const port                 = 8080
const compiler             = webpack(webpackConfig)

app.use(compress())

const devMiddleware = webpackDevMiddleware(compiler, {
    quiet   : false,
    noInfo  : false,
    lazy    : false,
    headers : {'Access-Control-Allow-Origin': '*'},
    stats   : 'errors-only',
})

devMiddleware.waitUntilValid(()=>{
    opn('http://localhost:' + port)
})

const hotMiddleware = webpackHotMiddleware(compiler, {
    path : '/__webpack_hmr',
    log  : false
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static(project.basePath))

module.exports = {
    app,
    port
}
