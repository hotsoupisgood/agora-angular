module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'bundle.js': 'js/main.js'
        },
        options: {
          // transform: ['coffeeify']
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/mainScss.css': 'scss/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', 'scss/*.scss'],
        tasks: ['sass', 'browserify'],
        options: {
          // interrupt: true,
          atBegin: true
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};
