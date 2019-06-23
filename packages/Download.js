const download = require('download-git-repo')
const chalk    = require('chalk')
const Spinner  = require('../lib/Spinner')
const Banner   = require('../lib/Banner')
const Div      = require('../lib/Div')
const Install  = require('../lib/Install')
const Dll      = require('../lib/Dll')
const Inquirer = require('../lib/Inquirer')
const { readDir }   = require('../lib/Utils')

const Download = async (dir) => {
    await Banner('rs admin cli')
    const answers = await Inquirer()
    process.stdout.write('\033c')
    Spinner.start()
    download(`github:Jines-z/rs-template-${answers.state}`, `${dir}/`, async function (err) {
        if (!err) {
            Spinner.stop()
            console.log(`# Download completed! \n`)
            const fileNames = await readDir(dir)
            Div(fileNames)
            console.log(`# Preparatory work ... \n`)
            await Install(dir, answers.command)
            await Dll(dir)
            console.log('\n')
            console.log(`## Successfully created project ${dir}`)
            console.log(`## Get started with the following commands:\n`)
            console.log(` ${chalk.gray('$')} ${chalk.cyan(`cd ${dir}`)}`)
            console.log(` ${chalk.gray('$')} ${chalk.cyan(`npm start`)}\n`)
        } else {
            Spinner.stop()
            console.log(chalk.red('\n Download template failed ! \n'))
            process.exit(0)
        }
    })
}

module.exports = Download