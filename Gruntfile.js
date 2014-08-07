module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        base: 'site'
      },
      src: '**/*'
    },
    'watch': {
      sass: {
        files: ['./lib/**/*'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      },
      site: {
        files: ['./site/scss/**/*'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      },
      md: {
        files: ['./site/**/*'],
        tasks: ['markdown'],
        options: {
          nospawn: true
        }
      },
    },
    'sass': {
      site: {
        files: {
          'site/css/style.css' : 'site/scss/style.scss',
        }
      },
      lib: {
        files: {
          'site/css/type.css' : 'site/scss/typecabinet.scss',
        }
      }
    },
    'connect': {
      'static': {
        options: {
          base: 'site/',
          hostname: 'localhost',
          port: 8001
        }
      }
    },
    'markdown': {
      index: {
        files: [
          {
            expand: true,
            src: 'site/index.md',
            dest: './',
            ext: '.html'
          },
        ],
        options: {
          template: 'site/layout.html',
          markdownOptions: {
            gfm: true,
            highlight: 'manual'
          }
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['markdown', 'sass']);
  grunt.registerTask('develop', ['connect', 'build', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
  grunt.registerTask('default', ['develop']);

};
