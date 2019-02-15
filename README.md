![react-starter-kit](./logo.png)
---------------------------------------------------------------
[![React](https://img.shields.io/badge/react-^16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.8.0-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![Mobx](https://img.shields.io/badge/mobx-^4.5.1-orange.svg?style=flat-square)](https://github.com/mobxjs/mobx)

**Preview：**[https://beverle-y.github.io/react-starter-kit](https://beverle-y.github.io/react-starter-kit)

**With redux：**[react-redux-starter-kit](https://github.com/beverle-y/react-redux-starter-kit)
## Quick Start
#### Down
~~~
git clone https://github.com/bevelery/react-starter-kit.git
~~~

#### Install
~~~
yarn install
~~~

#### Dll
The first time, you need to packaged the vendor and only run it once. When the vendor changes, it needs to be repackaged.
~~~
npm run dll
~~~

#### Run
~~~
npm start
~~~

#### Build
~~~
npm run build
~~~

#### Publish CDN (Recommend)

Change the `publicPath` in "project.config.js" to the absolute path of the server.

#### Publish statics

Modify the `webpack` configuration to place all files in the same directory.

## IE
You need to downgrade `mobx` to v4.

"IE9" does not support "CSS3", so the animation will fail.

## Ps
(It is now ready to be injected dynamically without having to change it manually)

~~关于 dll 的说明：本项目使用 yarn 下载依赖包，有些同学习惯用 npm、cnpm，这样因为没有 lock 文件会导致依赖包的版本不同，致使 dll 的 hash 不同于本项目，所以有些人会遇到 404 或者资源没找到等情况，这种情况下只要改一下 html 引用的路径即可。~~

## Log
`2019-02-15`
-   Added timeout or exception handling
-   Added webpackChunkName

`2019-01-24`
-   Use the mock to replace the setTimeout to simulate landing
-   Added proxy and flyio, deleted fetch

`2018-12-17`
-   Compatible with IE

`2018-12-12`
-   Upgrade to v2.0.0

    -   Upgrade react@16.6.3 and mobx@5.7.0
    -   Refactor `mobx` (The `mobx` in "v1" applies to mobile)
    -   Added theme configuration in "project.config.js"
    -   Streamline the path
    -   Refactor styles folder

`2018-10-26`
-   Add ESLint (You can control the switch in "project.config.js")

`2018-10-22`
-   Upgrade to @babel 7

`2018-10-18`
-   Dynamically inject `dll` to index.html at compile time

`2018-07-23`
-   With redux：[react-redux-starter-kit](https://github.com/beverle-y/react-redux-starter-kit)

`2018-07-20`
-   Modify the location of some folders

`2018-05-11`
-   Upgrade to webpack@4.21.0

    -   development (time)：4.8s -> 3.8s
    -   production (time)：11.5s -> 5.4s
    -   size：916kb -> 747kb
    -   refresh：-100ms

`2018-03-29`
-   Global loading
-   Message

`2018-03-28`
-   Repairing the Right lacks the route props


