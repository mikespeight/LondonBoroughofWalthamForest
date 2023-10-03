/**
 * Created by Mike Speight on 05/02/2018.
 */

// Gulp plugins
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch');


var config = {
	sassPath: './sass',
	bowerDir: './assets/components',
	cssPath:  './css',
	imgPath:  './assets/images',
	fontPath: './assets/fonts'
};

// tasks
gulp.task('sass', function(){
	return gulp.src('./sass/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

// Default task
gulp.task( 'default', [ 'sass', 'sass:watch' ] )