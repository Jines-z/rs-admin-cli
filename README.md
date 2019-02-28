![react-starter-kit](./logo.png)
---------------------------------------------------------------
[![React](https://img.shields.io/badge/react-^16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.8.0-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![Mobx](https://img.shields.io/badge/mobx-^4.5.1-orange.svg?style=flat-square)](https://github.com/mobxjs/mobx)

简体中文 | [English](https://github.com/beverle-y/react-starter-kit/blob/master/README-en.md)

预览：[https://beverle-y.github.io/react-starter-kit](https://beverle-y.github.io/react-starter-kit)

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
第一次运行时，需要打包 vendor。当 vendor 被改变时，需要重新打包。
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

#### 使用CDN (推荐)

将 project.config.js 内的 `publicPath` 改为服务器绝对路径。

#### 相对路径

请使用该分支[relative](https://github.com/beverle-y/react-starter-kit/tree/relative)

## IE

若需要兼容 IE，将 `mobx` 的版本降至 v4.9.2。

IE9 不支持 CSS3 中的 `transition` 和 `animation`，因此动画会失效。

不支持 IE8 及以下版本

## Log
`2019-02-15`
-   添加超时/异常处理
-   添加 webpackChunkName

`2019-01-24`
-   使用 mock 替换 setTimeout 来模拟登录
-   添加 proxy 和 flyio, 删除 fetch

`2018-12-17`
-   兼容IE

`2018-12-12`
-   升级至 v2.0.0

    -   升级 react@16.6.3 和 mobx@5.7.0
    -   重构了 `mobx` (v1 版本中的使用方法适用于移动端)
    -   在 project.config.js 中添加了主题配置
    -   简化了 path
    -   重新设计了 styles 文件夹的结构

`2018-10-26`
-   添加 ESLint (可以在 project.config.js" 控制是否开启)

`2018-10-22`
-   升级 @babel 7

`2018-10-18`
-   编译时，动态注入 dll

`2018-07-23`
-   Redux版：[react-redux-starter-kit](https://github.com/beverle-y/react-redux-starter-kit)

`2018-07-20`
-   修改了一些文件夹的位置

`2018-05-11`
-   升级 webpack 到 v4.21.0

    -   development (time)：4.8s -> 3.8s
    -   production (time)：11.5s -> 5.4s
    -   size：916kb -> 747kb
    -   refresh：-100ms

`2018-03-29`
-   Global loading
-   Message

`2018-03-28`
-   修复 Right 组件缺少props
