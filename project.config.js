const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    env        : NODE_ENV,
    basePath   : __dirname,
    srcDir     : 'src',
    outDir     : 'dist',
    publicPath : NODE_ENV === 'development' ? './' : 'https://beverle-y.github.io/react-starter-kit/',
    externals  : {},
    eslint     : true,
    vendor     : ['react', 'react-dom', 'react-router-dom', 'react-loadable', 'mobx', 'mobx-react', 'crypto-js', 'js-cookie']
    // dll 不存在或 vendor 改变时，需 npm run dll，下一期会做成自动的。
}
