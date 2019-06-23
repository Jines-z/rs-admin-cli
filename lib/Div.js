const ui      = require('cliui')()
const chalk   = require('chalk')
const figures = require('figures')

const Div = list => {
    list.forEach(item => {
        ui.div({
            text: chalk.green(figures.tick),
            width: 2,
            padding: [0, 0, 0, 0]
        }, {
            text: item,
            width: 25
        })
    })

    console.log(`${ui.toString()}\n`)
}

module.exports = Div
