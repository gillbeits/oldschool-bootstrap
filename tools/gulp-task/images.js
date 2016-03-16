/**
 * Created by gillbeits on 16.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('images', function () {
        return gulp.src($._path.join($._SOURCE_DIR, 'i/**/*.{gif,png,jpeg,jpg,svg,swf}'))
            .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'i')))
        ;
    });
};