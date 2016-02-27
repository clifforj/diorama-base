var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename');

function build() {
    gulp.src('./less/diorama-base.less')
        .pipe(less())
        .pipe(rename('diorama-base.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minify())
        .pipe(rename('diorama-base.min.css'))
        .pipe(gulp.dest('./css'));
}

gulp.task('default', function () {
    build();
});

gulp.task('watch', function () {
    build();
    gulp.watch('./less/**/*.less' , ['default']);
});