var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('./less/diorama-base.less')
        .pipe(less())
        .pipe(rename('diorama-base.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minify())
        .pipe(rename('diorama-base.min.css'))
        .pipe(gulp.dest('./css'));
});