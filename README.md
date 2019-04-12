> 先说一下全名，progressive web app： 渐进式网页应用。这是谷歌推出的，我是这样理解的：
>
> - 我们一般写 web 应用，在 pc 上是没有缓存的，打开页面的时去请求数据。
> - 第二个也没有像 app 一样的小图标放在桌面，一点开就进入了应用，而是通过打开浏览器输入网址，
> - 第三个就是，不能像 app 一样给用户推送消息，像微博会跟你推送说有谁评论了你的微博之类的功能。
>
> 而谷歌推出的 pwa，就是具有这些了这些特点， 使我们的 web 应用，能够像一款 app 一样使用。并且对比与 app, 它不用复杂的安装，也不用下载更新包，刷新页面就可以了(注意到缓存的处理)。

#### vue-Cl2+PWA完成对service worker的注册

1.先下载`workbox-webpack-plugin`

````bash
cnpm install workbox-webpack-plugin --save-dev
````

2.再下载`sw-register-webpack-plugin`

````bash
cnpm install sw-register-webpack-plugin --save-dev
````

3.分别在`webpack.dev.conf.js`和`webpack.prod.conf.js`引入下面的代码

````js
# webpack配置中添加workbox-webpack-plugin
const WorkBoxPlugin = require('workbox-webpack-plugin')

# 通过service-worker.js作为模板生成最终service-worker文件
# 这里可以添加部分自定义代码：workbox设置、缓存名称设置、具体资源缓存策略配置
new WorkBoxPlugin.InjectManifest({
  swSrc: path.resolve(__dirname, '../src/service-worker.js')
})


# 通过sw-register-webpack-plugin插件可以有效完成sw的注册

const SwRegisterWebpackPlugin = require('sw-register-webpack-plugin')
# 动态生成版本号
new SwRegisterWebpackPlugin({
  version: +new Date()
})
````

[参考链接](https://github.com/czero1995/vue-pwa-skeleton)

#### vue-Cl3+PWA完成对service worker的注册

1.先执行命令

````bash
# 简写
vue add @vue/pwa

# 全名
vue add @vue/cli-plugin-pwa
````

2.再执行命令

```bash
# 简写
vue add pwa

# 全名
vue add vue-cli-plugin-pwa
```

>  此时会新增很多文件

![succes](..\img\succes.png)

3.在根目录下新建`sw.js`

> 对service worker生命周期的监听

````

self.addEventListener('install', (event) => {
    console.log('Version installing', event);
 
    event.waitUntil(
        caches.open("static-v1").then(cache => cache.add("https://kaiyouhu.github.io/TMESIS/dist/img/TMESIS-logo.35b33ef8.png"))
    );
});
 
self.addEventListener('activate', (event) => {
    console.log('Version now ready to handle');
});
 
self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);
    console.log('fetch', event.request);


````

> 在vue ui命令下的仪表盘选择打包dist，然后在dist目录下 python -m http.server [port] (可以用apach httpserver 或者nginx)
>
> 此处有个问题，在@vue/cli的GitHub 例子给的是sw.js ，然后通过@vue/pwa自动生成的registerServiceWorker.js却是
>
> service-worker.js，本质上sw.js = service-worker.js，这里只要做对应的修改就是了

#### 生成PWA

````bash
打开方式如下：

地址栏输入：Chrome://flags

搜索并启用以下项目：App Banners（应用横幅）、Experimental App Banners（实验性应用横幅）、Desktop PWAs（桌面PWAs）。

重启浏览器即可添加支持。

````

[参考链接](https://blog.csdn.net/u014418725/article/details/86999639)

[lavas官网链接](https://lavas.baidu.com/)

[安装横幅官网链接](https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/app-install-banners)

 