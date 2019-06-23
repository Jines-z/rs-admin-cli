![rs-admin-cli](https://jines-z.github.io/images/rs-admin-cli.png)
---------------------------------------------------------------
[![React](https://img.shields.io/badge/react-^16.8.4-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.8.0-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![Mobx](https://img.shields.io/badge/mobx-^5.9.4-orange.svg?style=flat-square)](https://github.com/mobxjs/mobx)

[简体中文](https://github.com/jines-z/react-starter-kit) | English

Preview：[https://jines-z.github.io/react-starter-kit](https://jines-z.github.io/react-starter-kit)

## Quick Start

#### Install
~~~
npm install -g rs-admin-cli
~~~

#### Init
~~~
rs init yourProjectName
~~~

#### Run
~~~
cd yourProjectName
npm start
~~~

#### Build
~~~
npm run build
~~~

## IE
You need to downgrade `mobx` to v4.9.2.

Ie9 does not support `transition` and `animation` in css3, so the animation will fail.

It does not support IE8 and below.

## Log
`2019-06-23`
-   Upgrade：react-starter-kit -> rs-admin-cli v3.0.0

`2019-05-24`
-   Upgrade to v2.2
-   Extract the package file from the local to the npm package and add version detection and updates
-   Expanded project configuration file

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


