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
        fav  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAeFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVyEiIAAAAJ3RSTlMA9+8GFA2G5jLqKpBhbzkaeamZf9hK39PJtKOuWB/OvFJPQCXCaUSbJarlAAACSklEQVRYw+3W2bKjIBQFUBAwiIoDmmhGM/r/f9jpvqmbcjPdrrx19X5VlxxBDuSfCdtvaBJJdkrrXjDmBu6rOZrVacwnXbmBAgBf6JBqEQTiWdeHz4CZNjIMxIXxEgbiwk6GgbjQss+AuZMfAkkq2EfAfDzwBVBmUOQiDiDrdRA4Fkp+RV1Mu3bUUOyDQKPe13ilc6tCaso48E6VJgikdRDYXskiqvlLoAWAFGFAWAD+cecIgDWmPAIk9/0CyGGujQBgD0Cm1RKAEdTws/AcgKESQaCEAfQdfIJcsGAJ98gA1j3csAWgWF42uBIbAUADwPsTM8FlnsHzm55EgDMhjHMhBFO1/S9RQ34A6KHbPNMl1N5NuAWc4BU9IfLo61CGE0w1wDJ5PFFDnfvpreDEBm7wkt8b/yVzPN61D0YcwNEBVKNV/GY7ubvzAeZ5fXH9okkr4XEvcJTkGQ3zt1PEFwXA8AcQUEM2eQGduQBWg9vynwI3+TWwASrrfUAPwPiqdotL2HvGSqB9v/bUcoWwBygQeN0oT7A+SjcgSuoGSO7cBzBM1D6ggKXQTU6AGwC+24IccQjMCaQA5BV5xQDQaSeQe4Fphacj7gAOjRdQO9yPtQO4jl5AGKsp2kMQ6jb7APJIQBiUDcjO/xbEZ1oyC9DUD/CUgnCSCFSPAEB6BOgdges5BCiozz7/EF3YQKBvzqsCgKm2ATj+wBBgJu95cK71GoHNfgnUrQ1A34NsxQJImyDA0mQOt3fTJovQrF4AZUfhhuFM/uc7vwBxpiYAlw7BzgAAAABJRU5ErkJggg=='
    },
    global: { // 全局变量， __ENV__: 当前环境    __BRANCH__: 当前分支
        env: NODE_ENV,
        branch
    },
    proxy,
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
    // 当 (dll不存在) (vendor被改变) (包的版本被更换) 时，请 npm run dll。
}
