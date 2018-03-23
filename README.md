![react-starter-kit](./logo.png)


**down**
~~~
git clone https://github.com/bevelery/react-starter-kit.git
~~~

**install**
~~~
yarn install
~~~

**run**
~~~
npm start
~~~

**build**
~~~
npm run build
~~~

**test**
~~~
不要抢测试大哥的工作啦~~其实是我不会。学会了在来补充哈。
~~~
**发布CDN(推荐)**

发布线上时，由于目标文件夹目录结构会导致一些相对路径查找404，不要直接打包发布静态资源，将project.config.js内publicPath改为CDN服务器绝对路径。

**发布静态资源**

若没有CDN，只能发布静态资源，需修改webpack配置，将所有文件放置在同一目录下。


