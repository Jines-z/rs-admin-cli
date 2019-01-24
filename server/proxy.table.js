const proxy = {
    '/example': {
        target: 'http://0.0.0.0',
        secure: false,
        changeOrigin: true
    }
}

module.exports = proxy
