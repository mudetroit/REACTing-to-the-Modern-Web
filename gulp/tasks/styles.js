var less      = require('gulp-less');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
	return gulp.src('./src/app.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});
