/**
 * @file
 * Gulpfile for compiling Sass.
 */

// https://css-tricks.com/gulp-for-beginners/
const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass')(require('sass'));
// Create sass sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// Delete generated files when needed
const del = require('del');
// Run a list of tasks in order
const runSequence = require('run-sequence');

// Used to set whether CSS format is compressed or expanded when compiled.
const plumber = require('gulp-plumber');
// Used to catch errors and continue build
let style = 'compressed';

gulp.task('sass', () => gulp.src('sass/**/*.scss')
  .pipe(plumber(function(error){
    console.log(error.message);
    this.emit('end');
  }))
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: style })) // Converts Sass to CSS with gulp-sass.
  // .pipe(sourcemaps.write())
  .pipe(gulp.dest('css')));

gulp.task('clean:css', (cb) => {
  del.sync('css/*')
  cb();
});

gulp.task('watch', () => {
  gulp.watch('sass/**/*.scss', gulp.series('sass'));
});

// One time build process.
gulp.task('build', (cb) => {
  runSequence('clean:css', 'sass');
  cb();
});

gulp.task('build-unminified', (cb) => {
  style = 'expanded';
  runSequence('build');
  cb();
});
