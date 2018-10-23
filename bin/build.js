const webpack = require('webpack')
const ora     = require('ora')
const config  = require('../webpack.config')

const spinner = new ora('Webpack is compiling ...\n')
spinner.color = 'green'
spinner.start()

webpack(config).run((err, stats) => {
    spinner.stop()
    process.stdout.write(stats.toString({
        colors       : true,
        modules      : false,
        children     : false,
        chunks       : false,
        chunkModules : false
    }) + '\n\n')
    if (err || stats.hasErrors()) {
        console.log('\u001b[31m Webpack compile failure！ \u001b[39m \n')
    } else {
        console.log('Webpack compiler finished successfully！ See ./dist. \n')
    }
})


