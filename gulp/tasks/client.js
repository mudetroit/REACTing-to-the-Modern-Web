var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('client', function(){
	return browserify({
			entries: ['./src/js/app.js'],
			extensions: ['.jsx']
		})
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./generated/'));
});
