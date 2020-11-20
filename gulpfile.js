// DevCollab Starter Theme
// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Create sass sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// Delete generated files when needed
var del = require('del');
// Run a list of tasks in order
var runSequence = require('run-sequence');


gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('clean:css', function(){
  return del.sync('css/*');
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', gulp.series('sass'));
});

// One time build process
gulp.task('build', function() {
  runSequence(
    'clean:css', 'sass'
  )
});
