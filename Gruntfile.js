// Generated on 2016-02-12 using generator-jekyllrb 1.4.1
'use strict';

// TODO: Add SCSS Linter
// TODO: Add Autoprefixer

// Directory reference:
//   css: styles
//   javascript: scripts
//   images: images
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    uniq: {
      app: 'src',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= uniq.app %>/styles/**/*.{scss,sass}'],
        tasks: ['sass:server']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '<%= uniq.app %>/*.html',
            '<%= uniq.app %>/styles/**/*.{css}',
            '.tmp/css/**/*.css',
            '{.tmp,<%= uniq.app %>}/scripts/**/*.js',
            '<%= uniq.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              ".tmp",
              "<%= uniq.app %>"
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: "<%= uniq.dist %>"
          }
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= uniq.dist %>/*',
            '!<%= uniq.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp'
      ]
    },
    sass: {
      options: {
        sourceMap: true,
        style: 'compressed'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= uniq.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '<%= uniq.dist %>/styles',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= uniq.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '<%= uniq.app %>/styles',
          ext: '.css'
        }]
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= uniq.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= uniq.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= uniq.dist %>',
          src: '**/*.svg',
          dest: '<%= uniq.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= uniq.app %>',
          src: [
            // Processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'images/**/*',
            'fonts/**/*',
            // Exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}'
            // Explicitly add any files your site needs for distribution here.
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= uniq.dist %>'
        }]
      }
    },
    concurrent: {
      server: [
        'sass:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'browserSync:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('check', [
    'clean:server',
    'sass:server'
  ]);

  grunt.registerTask('build', [
    'clean',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
