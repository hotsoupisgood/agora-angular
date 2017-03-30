module.exports = {
  scripts: {
    files: ['**/*.js', 'scss/*.scss', '!bundle.js'],
    tasks: ['concurrent:browserify', 'concurrent:sass'],
    options: {
      // interrupt: true,
      atBegin: true
    },
  },
}
