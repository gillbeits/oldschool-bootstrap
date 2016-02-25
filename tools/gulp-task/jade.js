module.exports = function (gulp, $) {
  "use strict";

  gulp.task('jade', function () {

    var jadeOpts = {
      pretty: $.$$is_dev() ? true : false
    };

    return gulp.src($._path.join($._SOURCE_DIR, 'jade/**/*.jade'))
      .pipe($.jade(jadeOpts))
      .pipe($.$$is_dev() ? $.util.noop() : $.if('*.html', $.htmlmin({collapseWhitespace: true})))
      .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'html')));
  });
};
