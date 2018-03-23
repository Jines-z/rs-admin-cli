/* ========================================================

    ** 浏览器标准化 **

    这个文件负责初始化时在浏览器环境中实现规范化，即使最终用户运行的是较老的浏览器，也会有一些特性。

    填充的 polyfills ：

    1) Object.assign
    2) Promise
    3) Fetch

   ====================================================== */

// 1) Object.assign
// ------------------------------------
Object.assign = require('object-assign')

// 2) Promise
// ------------------------------------
if (typeof Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable()
    window.Promise = require('promise/lib/es6-extensions.js')
}

// 3) Fetch
// ------------------------------------
if (typeof window.fetch === 'undefined') {
    require('whatwg-fetch')
}
