module.exports = function(grunt) {
  var distPath = 'swarmerme/static/dist';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['swarmerme/static/*.css'],
        tasks: ['default'],
      },
    },

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'swarmerme/static/dist/maps/'
        },

        processors: [
          require('autoprefixer-core')({
            browsers: 'last 2 versions'
          }),
          require('cssnano')({
            autoprefixer: false,
            merge: false,
            idents: false,
            unused: false,
            zindex: false
          })
        ]
      },

      custom: {
        src: 'swarmerme/static/*.css',
        dest: 'swarmerme/static/dist/style.css'
      }
    },

    bower: {
      dev: {
        dest: distPath,

        options: {
          stripGlobBase: true,
          expand: true,

          packageSpecific: {
            bootstrap: {
              files: [
                "dist/**"
              ]
            },

            jquery: {
              files: [
                "dist/*"
              ]
            },

            'components-font-awesome': {
              stripGlobBase: false,

              files: [
                "css/*",
                "fonts/*"
              ]
            }
          }
        }
      }
    },

    clean: {
      'static': {
        src: [distPath]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean:static', 'bower', 'postcss:custom']);
};
