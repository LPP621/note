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
        },
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
        watch: {
            scripts: {
                files: ['src/js/*.js','src/css/*.css'],
                tasks: ['concat', 'cssmin'],
                options: {spawn: false}    // 变量更新     true: 全量更新
            }
        }
    });

    // 加载执行任务对应的插件。
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。grunt
    grunt.registerTask('default', ['concat','cssmin', 'watch']);

    // grunt myWatch
    grunt.registerTask('myWatch',['default','watch']);

};
