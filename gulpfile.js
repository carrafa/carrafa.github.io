var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var neat = require('node-neat').includePaths;
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var webserver = require('gulp-webserver');

var paths = {
  scss: './src/sass/*.scss'
};

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      fallback: 'index.html'
    }));
});

gulp.task('sass', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass-main', function() {
  gulp.src('./src/sass/styles.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('jade', function() {
  gulp.src('./src/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(minify())
    .pipe(gulp.dest('./js'))
});


gulp.task('default', ['sass', 'scripts', 'jade', 'webserver'], function() {
  gulp.watch('./src/sass/*.scss', ['sass', 'sass-main']);
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/*.jade', ['jade']);
});
