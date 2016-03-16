/**
 * Created by gillbeits on 16.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('init', function () {
        return gulp.src('template/**/*')
            .pipe($.print())
            .pipe(gulp.dest(process.cwd()))
        ;
    });

};