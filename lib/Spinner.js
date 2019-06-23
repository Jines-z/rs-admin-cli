const ora         = require('ora')
const spinners    = require('cli-spinners')

const Spinner = new ora({
    text: 'Download template ...\n',
    spinner: spinners.dots,
    color: 'white'
})

module.exports = Spinner
