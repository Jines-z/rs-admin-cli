/* ========================================================

    ** 配置文件 **

    1、theme  ：antd主题配置
    2、html   ：在 index.html 中，使用 <%= htmlWebpackPlugin.options.xxx %> 来访问 html 中的属性，可扩展
    3、global ：全局变量，使用时前后加“__”，字母变大写，例如 __ENV__，可扩展
    4、branch ：当前所在分支，可用于打包时判断（测试/线上）环境，等等
    5、proxy  ：本地代理，请在 proxy.config.js 中配置你需要代理的地址
    6、env    ：环境变量，开发环境为 development，生产环境为 production
    7、vendor ：用于生成 dll 包，当 (dll不存在) (vendor被改变) (包的版本被更换) 时，请 npm run dll

   ====================================================== */
const NODE_ENV = process.env.NODE_ENV || 'development'
const path     = require('path')
const cp       = require('child_process')
const proxy    = require('./proxy.config')
const branch   = cp.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')

module.exports = {
    theme: {
        'primary-color'       : '#495060',
        'menu-dark-bg'        : '#495060',
        'menu-dark-submenu-bg': '#363e4f',
        'normal-color'        : '#262a30',
        'text-color'          : '#262a30',
        'border-radius-base'  : '2px',
        'border-radius-sm'    : '2px',
        'font-family'         : 'Microsoft YaHei'
    },
    html: {
        title: 'REACT STARTER',
        fav: 'https://jines-z.github.io/images/favicon.ico'
    },
    proxy,
    global     : { env: NODE_ENV, branch },
    port       : 8080,
    host       : '0.0.0.0',
    env        : NODE_ENV,
    basePath   : __dirname,
    srcDir     : path.resolve(__dirname, 'src'),
    outDir     : path.resolve(__dirname, 'dist'),
    dllDir     : path.resolve(__dirname, 'dll'),
    publicPath : NODE_ENV === 'development' ? './' : 'https://jines-z.github.io/react-starter-kit/',
    esLint     : true,
    vendor     : ['react', 'react-dom', 'react-router-dom', 'react-loadable', 'mobx', 'mobx-react', 'crypto-js', 'js-cookie', 'flyio'],
}
