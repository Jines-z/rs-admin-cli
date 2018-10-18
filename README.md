![react-starter-kit](./logo.png)
---------------------------------------------------------------
[![React](https://img.shields.io/badge/react-^16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.0.3-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![Mobx](https://img.shields.io/badge/mobx-^4.1.0-orange.svg?style=flat-square)](https://github.com/mobxjs/mobx)

**演示地址：**[https://beverle-y.github.io/react-starter-kit](https://beverle-y.github.io/react-starter-kit)

**Redux版：**[react-redux-starter-kit](https://github.com/beverle-y/react-redux-starter-kit)
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
The first time，you need to packaged the vendor and only run it once。When the vendor changes，it needs to be repackaged。
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

#### 发布CDN(推荐)

将project.config.js内publicPath改为服务器绝对路径。

#### 发布静态资源

若没有CDN，只能发布静态资源，需修改webpack配置，将所有文件放置在同一目录下。

## Ps (It is now ready to be injected dynamically without having to change it manually)
~~关于 dll 的说明：本项目使用 yarn 下载依赖包，有些同学习惯用 npm、cnpm，这样因为没有 lock 文件会导致依赖包的版本不同，致使 dll 的 hash 不同于本项目，所以有些人会遇到 404 或者资源没找到等情况，这种情况下只要改一下 html 引用的路径即可。~~

## Log
`2018-10-18`
-   Dynamically inject `dll` to index.html at compile time

`2018-07-23`
-   With redux：[react-redux-starter-kit](https://github.com/beverle-y/react-redux-starter-kit)

`2018-07-20`
-   Modify the location of some folders

`2018-05-11`
-   update webpack 3 to 4.8.1

    -   development (time)：4.8s -> 3.8s
    -   production (time)：11.5s -> 5.4s
    -   size：916kb -> 747kb
    -   refresh：-100ms

`2018-03-29`
-   Global loading
-   message

`2018-03-28`
-   Repairing the Right lacks the route props


