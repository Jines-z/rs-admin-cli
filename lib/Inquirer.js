const inquirer = require('inquirer')
const promptList = [{
    type: 'list',
    message: 'Choose a package management tool: ',
    name: 'command',
    choices: [
        'yarn',
        'npm',
        'cnpm'
    ]
}, {
    type: 'list',
    message: 'Choose a state management library: ',
    name: 'state',
    choices: [
        'mobx',
        'redux'
    ]
}]

const Inquirer = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt(promptList).then(answers => {
            resolve(answers)
        })
    })
}

module.exports = Inquirer
