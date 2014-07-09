'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      files: [
        '*.js',
        '*.html'
      ],
      tasks: [],
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html',
          '*.js'
        ]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '{,*/}*.js'
      ]
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35929
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.'
          ]
        }
      }
    }
  });

  grunt.registerTask('serve', [
    'connect:livereload',
    'watch'
  ]);
};
