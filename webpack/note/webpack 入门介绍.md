#### 1、了解 Webpack 相关
  * 什么是 webpack ?
      * webpack 是一个模块打包器（bundler）
      * 在 webpack 看来，前端的所有资源文件（js/json/css/img/less/...）都会作为模块处理
      * 它将根据模块的依赖关系进行静态分析，生成对应的静态资源
  * 理解 Loader
      * webpack 本身只能加载 JS/JSON 模块，如果要加载其他类型的文件（模块），就需要使用对应的 loader 进行转换/加载
      * Loader 本身也是运行在 node.js 环境中的 JavaScript 模块
      * 它本身是一个函数，接受源文件作为参数，返回转换的结果
      * loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader
  * 配置文件（默认）
      * webpack.config.js: 是一个 node 模块，返回一个 json 格式的配置信息对象
  * 插件
      * 插件可以完成一些 loader 不能完成的功能
      * 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定
      * CleanWebpackPlugin: 自动清楚指定文件夹资源
      * HtmlWebpackPlugin: 自动生成 HTML 文件
      * UglifyJSPlugin: 压缩 js 文件
      
  ## 2、学习文档：
  * webpack 官网： http://webpack.github.io/
  * webpack3 文档（英文）：https://webpack.js.org/
  * webpack3 文档（中文）：https://doc.webpack-china.org/
  
  ## 3、开启项目
  * 初始化项目：
    * 生成 package.json 文件
    ```
    
    {
      "name": "webpack_test",
      "version": "1.0.0",
      "dependencies": {

      }
    }
    
    ```
    
    * 安装 webpack
    ```
      // 先全局安装再局部安装
      // 全局安装
      npm install webpack -g 
      
      // 局部安装
      npm install webpack --save-dev  

    ```
