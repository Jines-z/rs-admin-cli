const figlet = require('figlet')

const Banner = text => {
    return new Promise((resolve, reject) => {
        figlet.text(text, { font: 'rectangles' }, function(err, data) {
            if (err) {
                reject(err)
                console.log('Something went wrong...')
                process.exit(0)
            }
            console.log(data)
            resolve()
        })
    })
}

module.exports = Banner
