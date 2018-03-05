const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const project = require('../project.config')

const DIST_DIR = path.join(project.basePath, project.outDir)

const readDist = () => {
    fs.readdir(DIST_DIR, function (err, files) {
        if (err) {
            console.log('Dist read failure')
        } else {
            for (var i = 0; i < files.length; i++) {
                if (files[i].indexOf('vendor') >= 0) {
                    if (i == files.length - 1) {
                        startBuild()
                    }
                    continue
                } else {
                    let file = path.join(DIST_DIR,files[i])
                    fs.unlink(file, function (err) {
                        if (err) {
                            console.log('Delete failure ！')
                        } else {
                            console.log('Delete success :' + file)
                        }
                        if (i == files.length - 1) {
                            startBuild()
                        }
                    })
                }
            }
        }
    });
}

const startBuild = () => {
    webpack(webpackConfig).run((err, stats) => {
        if (err) {
            console.log('Webpack compile failure')
        } else {
            console.log('Webpack compile success')
        }
    })
}

fs.exists(DIST_DIR, (exists) => {
    if (exists) {
        readDist()
    } else {
        startBuild()
    }
})

