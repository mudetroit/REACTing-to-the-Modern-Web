var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	var server = livereload();

	var reload = function(file) {
		server.changed(file.path);
	};

	gulp.watch('src/js/**', ['cient']);
	gulp.watch('src/css/**', ['styles']);
	gulp.watch('src/img/**', ['images']);
	gulp.watch(['build/**']).on('change', reload);
});
