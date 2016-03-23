//Package Imports
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('gulp-cssnano'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps');

//run 'gulp stylus'
gulp.task('stylus', function() {
    return gulp.src('src/main.styl')
    .pipe(stylus())
    .pipe(postcss([ autoprefixer({ browsers: ['> 5%'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

// run 'gulp watch'
gulp.task('watch', function() {
    gulp.watch('src/**/**.styl', ['stylus']);
});

// run 'gulp test'
gulp.task('test', ['stylus']);

// Default gulp task that runs when you 'gulp'
gulp.task('default', ['stylus']);
