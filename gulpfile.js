var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
	port: 8888,
	root: 'demo',
  	livereload: true
  });
});
 
gulp.task('sass', function () {
 return gulp.src(['./components/*.scss', './demo/sass/*.scss'])
   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9'], cascade: false }))
   .pipe(gulp.dest('./demo/css'));
});

gulp.task('live', function() {
	gulp.src('./demo/*.html')
		.pipe(connect.reload());
})

gulp.task('watch', function() {
	gulp.watch(['./components/*.scss', './demo/sass/*.scss'], ['sass']);
	gulp.watch(['./demo/*.html', './demo/css/*.css'], ['live']);
})
 
gulp.task('default', ['connect', 'watch']);