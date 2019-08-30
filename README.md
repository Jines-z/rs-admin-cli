![rs-admin-cli](https://jines-z.github.io/images/rs-admin-cli.png)
---------------------------------------------------------------
[![React](https://img.shields.io/badge/react-^16.8.6-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.8.0-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![Mobx](https://img.shields.io/badge/mobx-^5.9.4-orange.svg?style=flat-square)](https://github.com/mobxjs/mobx)

简体中文 | [English](https://github.com/jines-z/react-starter-kit/blob/master/README-en.md)

预览：[Mobx](https://jines-z.github.io/rs-mobx) [Redux](https://jines-z.github.io/rs-redux)

## 快速使用

#### 全局安装
~~~
npm install -g rs-admin-cli
~~~

#### 新建
~~~
rs init yourProjectName
~~~

#### 运行
~~~
cd yourProjectName
npm start
~~~

#### 打包
~~~
npm run build
~~~

## 更新日志
`2019-08-30`
-   优化全局 loading 展示逻辑

    -   发起 request 时，会自动渲染 loading
    -   也可以在其他情况下手动控制 loading
-   添加 [slcss](https://github.com/Jines-z/slcss)，减少 css 代码量

`2019-06-23`
-   重构升级：react-starter-kit -> rs-admin-cli v3.0.0

`2019-05-24`
-   升级到 v2.2
-   将打包文件从本地抽离成 npm 包，并添加了版本检测与更新
-   扩展了项目配置文件

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
