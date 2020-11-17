const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const concat = require("gulp-concat");
const clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('dist', { read: false }).pipe(clean());
});


gulp.task('test', function() {
    return gulp.src('spec/is.spec.js').pipe(jasmine());
});

gulp.task('js', function () {
    return gulp.src(["src/is.js"], { "allowEmpty": true })
        .pipe(concat("is.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series(
   // 'test',
    'clean',
    'js'
));