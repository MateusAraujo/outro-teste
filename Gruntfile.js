module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'js/*.js'
				],
				dest: 'src/js/scripts.min.js'
			}
		},
		cssmin: {
			minify: {
				src: 'css/*.css',
				dest: 'src/css/style.min.css'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			
			uglify: {
				files: 'src/js/scripts.js',
				tasks: ['uglify']
			},
			cssmin: {
				files: 'src/css/style.css',
				tasks: ['cssmin']
			}
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('scripts', ['uglify']);
	grunt.registerTask('styles', ['cssmin']);
	grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);

};