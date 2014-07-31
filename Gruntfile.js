'use strict';

/*This is used to compile and minify less files */
var lessConfig = {
        dev: {
                options: {
                        strictImports: false,
                        compress: true
                },
                files: {
                        "public/styles/calc.css": "public/styles/calc.less"
                }
        }
};

/*This runs a JS lint on the code */
var jshintConfig = {
        options: {
                jshintrc: 'conf/jshintrc'
        },
        main: {
                src: [
                        'Gruntfile.js',
                        'index.js'
                ]
        }
};

/*This runs a HTML validator on the code */
var htmlhintConfig = {
        build: {
                options: {
                        'attr-lowercase': true,
                        'attr-value-double-quotes': true,
                        'id-unique': true,
                        'img-alt-require': true,
                        'tag-self-close': true,
                        'tag-pair': true,
                        'tagname-lowercase': true,
                        'spec-char-escape': true,
                        'style-disabled': true
                },
                src: [
                        'views/*.html'
                ]
        }
};

var watchConfig = {
        watch: {
                scripts: {
                        files: ['**/*.js'],
                        tasks: ['jshint'],
                        options: {
                        spawn: false
                        }
                }
        },
        styles: {
                files: ['**/*.less'],
                tasks: ['less']
        },
        markup: {
                files: ['**/*.html'],
                tasks: ['htmlhint']
        }

};

module.exports = function(grunt) {

        // Project configuration
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                jshint: jshintConfig,
                htmlhint: htmlhintConfig,
                watch: {
                        js: {
                                files: [
                                        'public/scripts/*.js', 
                                        '!public/libs',
                                        'Gruntfile.js'
                                ],
                                tasks: ['jshint']
                        }
                },
                open: {
                        dev: {
                                path: "http://localhost:3000"
                        }
                },
                nodemon: {
                        dev: {
                                script: 'index.js'
                        }
                },
                concurrent: {
                        dev: [
                        'nodemon:dev',
                        'open:dev',
                        'watch'
                        ]
                }
        });

        // Load plugins
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-htmlhint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-open');
        grunt.loadNpmTasks('grunt-nodemon');
        grunt.loadNpmTasks('grunt-concurrent');

        // Make custom tasks with Grunt tasks
        grunt.registerTask('test', [
                'jshint',
                'htmlhint',
                //'less'
        ]);

        grunt.registerTask('compile', [
                //'less'
        ]);

        // Using our custom tasks
        grunt.registerTask('build', [
                'test',
                'compile'
        ]);

        grunt.registerTask('dev', [
                'build',
                'concurrent'
        ]);

};
