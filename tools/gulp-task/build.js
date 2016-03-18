module.exports = function (gulp, $) {
  "use strict";

  var runSequence = require('run-sequence');

  gulp.task('build', function () {
    return runSequence(['images', 'less', 'jade', 'ts'], function () {
      $.util.log($.util.colors.magenta("Build " + $._ENV + " environment success"));
    });
  });
};
