var less      = require('gulp-less');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
	return gulp.src('./src/css/app.less')
		.pipe(less())
		.on('error', handleErrors);
});
