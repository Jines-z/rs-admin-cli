const webpack = require('webpack')
const chalk   = require('chalk')
const config  = require('../config/webpack.dll.config')

webpack(config).run((err, stats) => {
    if (err || stats.hasErrors()) {
        console.log(chalk.red('  Webpack compilation failed！\n'))
    } else {
        console.log(chalk.green('  Webpack compiled successfully！ See ./dll. \n'))
    }
})
