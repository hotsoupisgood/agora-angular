module.exports = {
  options: {
    dirs: ['**','!node_modules/**'],
    livereload: {
      enabled: false,
      port: 2223,
      extensions: ['html', 'js', 'css', 'sass']
    },
    tasks: ['sass', 'browserify'],
  },
  js: function(filepath) { return 'browserify' },
  scss: function(filepath) { return 'sass' },
}
