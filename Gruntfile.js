module.exports = function(grunt) {
  var distPath = 'swarmerme/static/dist';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

  grunt.registerTask('default', ['clean:static', 'bower']);
};
