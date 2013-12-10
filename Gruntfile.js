//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({ 
        concat: {
            options: {
                separator: ';'
            },            
            javascript: {
                src: [
                    './bower_components/jquery/jquery.min.js',
                    './bower_components/bootstrap/bootstrap.min.js'
                ],
                dest: './public/js/app.js'
            }
        },
        less: {
            development: {
                options: {
                    compress: true, //minify
                },                
                files: {
                //compile main stylesheet
                './public/css/styles.css' : './app/assets/less/styles.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    './public/js/app.js' : './public/js/app.js'
                }
            }
        },
        phpunit: {

        },
        watch: {

        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-phpunit');
};
