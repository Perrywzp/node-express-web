/**
 * [desc]
 * @author wangzhipei
 * @date 2016/8/3/0003.
 */

module.exports = function(grunt){
  // 加载插件
  [
    'grunt-mocha-test',
    'grunt-contrib-jshint',
    'grunt-exec'
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  // 配置插件
  grunt.initConfig({
    mochaTest:{
      all: {src: 'qa/test-*.js',options:{ui: 'tdd'}}
    },
    jshint:{
      app:['app.js', 'public/qa/**/*.js', 'qa/**/*.js'],

      qa:['Gruntfile.js', 'public/qa/**/*.js','qa/**/*.js']
    },
    exec:{
      linkchecker:{cmd: 'linkchecker http://localhost:3000'}
    }
  });

  // 注册任务
  grunt.registerTask('default', ['mochaTest','jshint']);
};
