const { readdir } = require("fs")

const readDir = dir => {
    return new Promise((resolve, reject) => {
        readdir(dir, (err, files) => {
            if (err) {
                console.log(err)
                process.exit(0)
            } else {
                resolve(files)
            }
        })
    })
}

module.exports = {
    readDir
}
