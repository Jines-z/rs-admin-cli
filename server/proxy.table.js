const proxy = {
    '/mock': {
        target: 'https://www.easy-mock.com',
        secure: false,
        changeOrigin: true
    }
}

module.exports = proxy
