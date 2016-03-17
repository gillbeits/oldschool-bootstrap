/**
 * Created by gillbeits on 25.02.16.
 */
module.exports = function (gulp, $) {
  "use strict";

  gulp.task('less', function () {
    return gulp.src([$._path.join($._SOURCE_DIR, 'less/*.less'), '!' + $._path.join($._SOURCE_DIR, 'less/variables.less')])
      .pipe($.plumber())
      .pipe($.print())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.less({
        paths: [ __dirname + '/../../node_modules' ]
      }))
      .pipe($.autoprefixer({
        browsers: ['> 1%', 'last 2 versions'],
        cascade: false
      }))
      .pipe($.sourcemaps.write('../maps', { sourceRoot: '/less' }))
      .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'css', 'app')))
      ;
  });
};