module.exports = function (gulp, $) {
  "use strict";

  gulp.task('watch', ['build', 'serve'], function () {
    gulp.watch([$._path.join($._SOURCE_DIR, 'i/**/*.{gif,png,jpeg,jpg,svg,swf}')], ['images']);
    gulp.watch([$._path.join($._SOURCE_DIR, 'jade/**/*.jade')], ['jade']);
    gulp.watch([$._path.join($._SOURCE_DIR, 'less/**/*.less')], ['less']);
    gulp.watch([$._path.join($._SOURCE_DIR, 'typescript/**/*.ts')], ['ts']);

    gulp.watch([
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.css'),
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.js'),
      $._path.join($._BUILD_DIR, $.get_env(), '/**/*.html')
    ]).on('change', $._START_SERVER ? $.notifyLiveReload : $.util.noop);
  });
};
