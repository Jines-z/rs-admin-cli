const ora         = require('ora')

const Spinner = new ora({
    text: 'Download template ...\n',
    color: 'white'
})

module.exports = Spinner
