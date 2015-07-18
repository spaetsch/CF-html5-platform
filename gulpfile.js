var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Compile Our Sass
gulp.task('scss', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint']);
    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'lint', 'sass', 'scss'], function() {
  return gutil.log('Gulp is running!')
});
