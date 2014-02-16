module.exports = function(grunt) {

    var scripts = ["js/jquery-1.10.2.min.js", "js/jquery.swipebox.js", "js/tono.js", "js/bootstrap.min.js"];

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": scripts,
                "dest": "js/app.js"
            }
        },
        uglify: {
            my_target: {
              files: {
                'js/app.min.js': scripts
              }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/styles.css': ['css/bootstrap.css','css/OpenSans.css', 'css/swipebox.css',  'css/tono.css']
                }
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Task definitions
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};