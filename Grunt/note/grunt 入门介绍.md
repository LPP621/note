[TOC]
## Grunt 介绍
  * 中文主页： http://www.gruntjs.net/
  * 是一套前端**自动化构建**工具，一个基于 nodeJS 的命令行工具
  * 它是一个**任务运行器**，配合其丰富强大的**插件**
  * 常用功能：
     * 合并文件（css/js）
     * 压缩文件（css/js）
     * 语法检查（js）
     * less/sass 预编译处理
     * 其他。。
     
## 安装 nodejs,查看版本  
  ``node -v``

* 创建一个简单的应用 grunt_test
  ```
     |- build    ---------------- 构成生成的文件所在的文件夹
     |- src      ---------------- 源码文件夹
        |- css   ---------------- css 源文件夹
        |- js    ---------------- js 源文件夹
     |- index.html    ----------- 页面文件
     |- Gruntfile.js  ----------- grunt 配置文件（注意首字母大小写）
     |- package.json  ----------- 项目包配置文件
        {
            "name": "grunt_test",
            "version": "1.0.0"
        }
     
  ```
  
## 全局安装 grunt-cli  
  ``npm install -g grunt-cli``  
  
  注意，安装grunt-cli并不等于安装了 Grunt！Grunt CLI的任务很简单：调用与Gruntfile在同一目录中 Grunt
  
## 安装 grunt  
  ``npm install grunt --save-dev``

## 常用的插件：
   * grunt-contrib-clean      —— 清除文件（打包处理生成的）
   * grunt-contrib-concat     —— 合并多个文件的代码到一个文件中
   * grunt-contrib-uglify     —— 压缩 js 文件
   * grunt-contrib-jshint     —— JavaScript 语法错误检查
   * grunt-contrib-cssmin     —— 压缩/合并 css 文件
   * grunt-contrib-htmlmin    —— 压缩 html 文件
   * grunt-contrib-imagemin   —— 压缩图片文件（无损）
   * grunt-contrib-copy       —— 复制文件、文件夹
   * grunt-contrib-watch      —— 实时监控文件变化、调用相应的任务重新执行
  
## 合并 js: 使用 concat 插件
   * 命令：  
   ``npm install grunt-contrib-concat --save-dev``
   * 在 Gruntfile 中启动  
   ``grunt.loadNpmTasks('grunt-contrib-concat');``
   * 编码：
   ```
   module.exports = function(grunt) {
   
       // 初始化配置 grunt 任务
       grunt.initConfig({
           concat: {     // 任务名
               options: {
                   separator: ';',
               },
               dist: {
                   // src: ['src/js/test1.js', 'src/js/test2.js'],
                   
                   src: ['src/js/*.js'],
                   dest: 'build/js/concat.js',
               },
           }
       });
   
       // 加载执行任务对应的插件。
       grunt.loadNpmTasks('grunt-contrib-concat');
   
       // 默认被执行的任务列表。grunt
       grunt.registerTask('default', 'concat');   
   };
   ```
   * 命令  
   ``grunt  ——自动生成 build/js/concat.js 文件``
   
## 压缩 js: 使用 uglify 插件
   * 命令：  
   ``npm install grunt-contrib-uglify --save-dev``
   * 在 Gruntfile 中启动  
   ``grunt.loadNpmTasks('grunt-contrib-uglify');``
   * 编码
   ```
   grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     uglify: {
       options: {  //  不是必须的
         banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
           '<%= grunt.template.today("yyyy-mm-dd") %> */'
       },
       build: {
         files: {
           'build/js/build.min.js': ['src/js/*.js']
         }
       }
     }
     
     // 加载执行任务对应的插件。
     grunt.loadNpmTasks('grunt-contrib-uglify');
        
     // 默认被执行的任务列表。grunt
     grunt.registerTask('default', 'uglify'); 
   });
   ```
   
## 压缩 css: 使用 cssmin 插件
   * 命令：  
   ``npm install grunt-contrib-cssmin --save-dev``
   * 在 Gruntfile 中启动  
   ``grunt.loadNpmTasks('grunt-contrib-cssmin');``
   * 编码
   ```
   grunt.initConfig({
     cssmin: {
         options: {
             mergeIntoShorthands: false,
             roundingPrecision: -1
         },
         target: {
             files: {
                 'build/css/build.min.css': ['src/css/*.css']
             }
         }
     },
     // 加载执行任务对应的插件。
     grunt.loadNpmTasks('grunt-contrib-cssmin');
        
     // 默认被执行的任务列表。grunt
     grunt.registerTask('default', 'cssmin'); 
   });
   ```
   
## js 语法检查：使用 jshint 插件
   * 命令：  
   ``npm install grunt-contrib-jshint --save-dev``
   
   * 编码:  .jshintrc
   ```
   {
      "curly": true,
      "eqnull": true,
      "eqeqeq": true,
      "expr": true,
      "immed": true,
      "newcap": true,
      "noempty": true,
      "noarg": true,
      "regexp": true,
      "browser": true,
      "devel": true,
      "node": true,
      "boss": false,
 
      // 不能使用未定义的变量
      "undef": true,
      // 语句后面必须有分号
      "asi": false,
      // 预定义不检查的全局变量
      "predef": ["define", "BMap", "angular", "BMAP_STATUS_SUCCESS"]
   }
   ```
   
   * 在 Gruntfile 中启动  
   ``grunt.loadNpmTasks('grunt-contrib-jshint');``
   
   * 编码：Gruntfile.js
   ```
   grunt.initConfig({
       options: {
          jshint: '.jshintrc',  // 指定配置文件
       }
       build: {
           src: ['Gruntfile.js', 'src/js/*.js']
       }
       // 加载执行任务对应的插件。
       grunt.loadNpmTasks('grunt-contrib-jshintrc');
          
       // 默认被执行的任务列表。grunt
       grunt.registerTask('default', 'jshintrc'); 
   });
   ```
   
## 使用 watch 插件（真正实现自动化）
  * 命令：  
  ``npm install grunt-contrib-watch --save-dev``
  
  * 配置： Gruntfile.js
     * 配置任务：
     ```
     watch: {
       scripts: {
            files: ['src/js/*.js','src/css/*.css'],
            tasks: ['concat', 'cssmin'],
            options: {spawn: false}    // 变量更新     true: 全量更新
       }
     }
     // 加载执行任务对应的插件。
     grunt.loadNpmTasks('grunt-contrib-watch');
     
     // 默认被执行的任务列表。命令：grunt
     grunt.registerTask('default', 'watch');
     
     // 加上下面一行之后的命令：grunt myWatch
     grunt.registerTask('myWatch',['default','watch']);
     ```
