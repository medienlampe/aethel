const gulp = require("gulp");
const sass = require("gulp-sass");
// const uglify  = require('gulp-uglify');
// const concat  = require('gulp-concat');

/**
 * Generate the CSS using Sass
 */
gulp.task("css", function() {
  return gulp
    .src("./_scss/style.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./_site/assets"));
});

/**
 * Uglify our javascript files into one.
 * Use pump to expose errors more usefully.
 */

// gulp.task('js', function() {
//   return gulp.src("./_js/**/*.js")
//     .pipe(concat('scripts.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./site/assets'));
// });

/**
 * Setup watcher
 */
gulp.task("watch", function() {
  gulp.watch("./_scss/**/*.scss", gulp.parallel("css"));
  // gulp.watch('./_js/**/*.js', gulp.parallel('js'));
});

/**
 * Default build task for Gulp
 */
//gulp.task("default", gulp.parallel("css", "js"));
gulp.task("default", gulp.parallel("css"));
