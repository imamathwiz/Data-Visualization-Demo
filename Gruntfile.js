module.exports = function (grunt) {
    grunt.initConfig({
        jst: {
            compile: {
                options: {
                    processName: function (filePath) {
                       return filePath.replace("js/templates/", "").replace(".jst", "");
                    }
                },
                files: {
                    "js/templates.js" : ["js/templates/*.jst"]
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ["$", "Backbone", "_", "DVD"]
                }
            },
            my_target: {
                files: {
                    "js/source.min.js": ["js/main.js",
                                      "js/utl/*.js",
                                      "js/models/*.js",
                                      "js/collections/*.js",
                                      "js/routers/*.js",
                                      "js/templates.js",
                                      "js/views/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jst");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("precompile", ["jst"]);
    grunt.registerTask("build", ["jst", "uglify"]);
};
