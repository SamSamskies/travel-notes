var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var outputDir = 'dist';

gulp.task('browserify', function () {
  return browserify('src/app.js', {debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(outputDir));
});

gulp.task('sass', function () {
  return gulp
    .src('src/styles/app.scss')
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'expanded'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
      }))
    .pipe(gulp.dest(outputDir));
});

gulp.task('watch', ['browserify', 'sass'], function () {
  gulp.watch('src/**/*.js', ['browserify']);
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);