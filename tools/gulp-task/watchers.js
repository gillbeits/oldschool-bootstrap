module.exports = function (gulp, $) {
  "use strict";

  gulp.task('watch', ['less', 'jade', 'serve'], function () {
    gulp.watch([$._path.join($._SOURCE_DIR, 'jade/**/*.jade')], ['jade']);
    gulp.watch([$._path.join($._SOURCE_DIR, 'less/**/*.less')], ['less']);

    gulp.watch([
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.css'),
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.js'),
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.html')
    ]).on('change', $._START_SERVER ? $.notifyLiveReload : $.util.noop);
  });
};
