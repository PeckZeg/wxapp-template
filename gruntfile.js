const loadGruntTasks = require('load-grunt-tasks');
const reqYaml = require('req-yaml');
const config = reqYaml('./grunt-config.yaml');

module.exports = function(grunt) {
  grunt.initConfig(config);

  loadGruntTasks(grunt);
  grunt.registerTask('default', [
    'yaml',
    'pug',
    'babel',
    'compass',
    'autoprefixer',
    'clean',
    'watch'
  ]);
};
