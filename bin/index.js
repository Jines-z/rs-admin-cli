#!/usr/bin/env node

const program     = require('commander')
const Download    = require('../packages/Download')
const { version } = require('../package')

program
    .version(version, '-v, --version')
    .command('init <name>')
    .description('Set your project name')
    .action(function (dir, cmd) {
        Download(dir)
    })

program.parse(process.argv)

if (process.argv.slice(2).length === 0) {
    program.help()
}
