module.exports = function(grunt) {
 
 // Project configuration. 
 grunt.initConfig({ 
 	sass: {
 		options: {
 			sourceMap: true
 		},
 		dist: {
 			files: {
 				'style.css': 'style.sass'
 			}
 		}
 	},

 	imagemin: {
 		dynamic: {
 			files: [{
 				expand: true,
 				cwd: 'images/',
 				src: ['**/*.{jpg,png,gif,jpeg}', '!build/**/*.{jpg,png,gif,jpeg}'],
 				dest: 'images/build/'
 			}]
 		}
 	},

 	watch: {
 		scripts: {
 			files: ['sass/*.sass'],
 			tasks: ['sass'],
 			options: {
 				spawn: false,
 			},
 		}
 	}
 }); 
 // Load the plugins tasks 
 grunt.loadNpmTasks('grunt-sass');
 grunt.loadNpmTasks('grunt-contrib-imagemin');
 grunt.loadNpmTasks('grunt-contrib-watch');
 // Default task(s).
 grunt.registerTask('default', ['sass', 'imagemin', 'watch']); 
};