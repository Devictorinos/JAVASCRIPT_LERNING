module.exports = function(grunt) {

	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		s3: {
			options: {
				key: 	'',
				secret:	'',
				bucket:	'',
				access:	'public-read',
				region:	'us-west-2',
				gzip:	true
			},

			prod: {
				upload: [
					{
						rel:  'public',
						src:  'public/**/*',
						dest: '/'
					}
				]
			}
		},





		sass: {
			prod: {
				files: {
					'public/css/style.css': 'src/scss/master.scss'
				},

				options: {
					style: 'compressed'
				}
			},

			dev: {
				files: {
					'public/css/style.css': 'src/scss/master.scss'
				},

				options: {
					style: 'expanded'
				}
			}
		},

		coffee: {
			compile: {
				options: {
					bare: true
				},

				files: [
					{
						expand: true,
						flatten: true,
						cwd: 'src/coffee',
						src: ['*.coffee'],
						dest: 'public/js/',
						ext: '.min.js'
					}
				]
			}
		},

		uglify: {
			options: {
				banner: "/*! \r\n From Coffee Script \r\n Author: <%= pkg.author %> \r\n <%= grunt.template.today('yyyy-mm-dd') %> \r\n */\r\n\r\n"
			},

			min: {
				options: {
					mangle: true,
					compress: true,
					wrap: false,
					preserveComments: false
				},

				files: {
					'public/js/services.min.js': 'public/js/services.min.js',
					'public/js/controllers.min.js': 'public/js/controllers.min.js',
					'public/js/directives.min.js': 'public/js/directives.min.js',
					'public/js/app.min.js': 'public/js/app.min.js',
					'public/js/filters.min.js': 'public/js/filters.min.js',
				}
			}
		},

		cacheBust: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 16
			},

			assets: {
				files: {
					src: ['public/index.html']
				}
			}
		},





		watch: {
			coffee: {
				files: ['src/coffee/*.coffee'],
				tasks: 'coffee',
			},


			scripts: {
				files: [
					'src/scss/*.scss'
				],
				tasks: ['sass:dev']
			}
		},

		nodemon: {
			dev: {
				options: {
					file: 'server.coffee',
					args: ['--directory', './public', '--port', '3001', '--verbose', '--cache', '0'],
					ignoredFiles: [
						'src/**',
						'public/css/**',
						'public/fonts/**',
						'public/images/**',
						'public/templates/**',
						'public/js/**',
						'demo/**',
						'.sass-cache/**',
						'.git/**'
					]
				}
			}
		},

		concurrent: {
			target: {
				tasks: ['watch', 'nodemon:dev'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});



	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-s3');
	grunt.loadNpmTasks('grunt-cache-bust');


	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('build', ['sass:prod','coffee','uglify:min','cacheBust']);
}