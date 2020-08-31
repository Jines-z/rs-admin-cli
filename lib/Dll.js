const { spawn } = require('child_process')

const Dll = dir => {
    return new Promise((resolve, reject) => {
        const child = spawn('npm', ['run', 'dll'], {
            cwd: dir,
            stdio: [0, 1, 2],
            shell: process.platform === 'win32',
            detached: false
        })

        child.on('close', (code) => {
            if (code !== 0) {
                console.log('command failed !')
                process.exit(0)
            }
            resolve()
        })
    })
}

module.exports = Dll