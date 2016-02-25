/**
 * Created by gillbeits on 25.02.16.
 */
module.exports = function (gulp, $) {
  "use strict";

  gulp.task('less', function () {
    return gulp.src($._path.join($._SOURCE_DIR, 'less/index.less'))
      .pipe($.plumber())
      .pipe($.print())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.less({
        paths: [ __dirname + '/../../node_modules/bootstrap/less' ]
      }))
      .pipe($.autoprefixer({
        browsers: ['> 1%', 'last 2 versions'],
        cascade: false
      }))
      .pipe($.rename('styles.css'))
      .pipe($.sourcemaps.write('../maps', { sourceRoot: '/less' }))
      .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'css', 'app')))
      ;
  });
};