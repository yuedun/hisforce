# vue-test
vue.js,vue-router,webpack实现单页应用

安装 npm依赖
执行webpack命令：

` >webpack `

有如下信息则执行正确
```
Hash: 861a7e14bc8a66324e83
Version: webpack 1.12.9
Time: 6161ms
    Asset    Size  Chunks             Chunk Names
bundle.js  293 kB       0  [emitted]  main
   [0] ./app.js 1.06 kB {0} [built]
   [2] ./vue.js 246 kB {0} [built]
   [3] ./vue-router.min.js 23 kB {0} [built]
    + 8 hidden modules
```
webpack.config.js配置说明

```
module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.vue$/, loader: 'vue-loader'}
        ]
    }
};
```

entry:入口文件，初始化路由
`router.start(app, "#app");`
output输出文件
module编译需要的插件
