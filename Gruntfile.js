module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var theme_name = 'starter_initializr';
  var style_name = 'style';
 
  var global_vars = {
	style_name: style_name, 
    theme_name: theme_name,
    theme_css: 'css',
    theme_scss: 'scss',
   // base_theme_path: base_theme_path
  };

  var bourbon = require('node-bourbon').includePaths;

  // array of javascript libraries to include.
  var jsLibs = [
    '<%= global_vars.base_theme_path %>/js/vendor/placeholder.js',
    '<%= global_vars.base_theme_path %>/js/vendor/fastclick.js'
  ];


  // array of custom javascript files to include.
  var jsApp = [
    '<%= global_vars.base_theme_path %>/js/main.js'
  ];

  grunt.initConfig({
    global_vars: global_vars,
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          includePaths: ['<%= global_vars.theme_scss %>', '<%= global_vars.base_theme_path %>/scss/'].concat(bourbon)
        },
        files: {
          '<%= global_vars.theme_css %>/<%= global_vars.style_name %>.css': '<%= global_vars.theme_scss %>/<%= global_vars.style_name %>.scss',
           '<%= global_vars.theme_css %>/bootstrap.min.css': '<%= global_vars.theme_scss %>/bootstrap.scss'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        jsApp
      ]
    },

    uglify: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'js/main.js': [jsLibs]
          // 'js/foundation.min.js': [jsFoundation],
          // 'js/app.min.js': [jsApp]
      }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: '<%= global_vars.theme_scss %>/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },

      js: {
        files: [
          jsLibs,
       //   jsFoundation,
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      }
    }
  });

  grunt.registerTask('build', ['jshint','uglify','sass']);
  grunt.registerTask('default', ['build', 'watch']);
};
