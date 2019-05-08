var gulp = require('gulp');

// 注册任务
// gulp.task('任务名', function () {
//     // 配置任务的操作
// });

// 注册合并压缩 js 的任务
gulp.task('js', function () {
   return gulp.src('src/js/*.js')       // 找到目标源文件，将数据读取到 gulp 的内存中
});

// 注册默认任务
gulp.task('default',[]);
