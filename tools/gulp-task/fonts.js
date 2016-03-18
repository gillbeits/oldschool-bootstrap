/**
 * Created by gillbeits on 18.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('fonts', function () {
        return gulp.src([$._path.join($._SOURCE_DIR, 'fonts/**/*.{eot,ttf,woff,woff2}'), __dirname + '/../../node_modules/bootstrap/dist/fonts/**/*.{eot,ttf,woff,woff2}'])
            .pipe($.plumber())
            .pipe($.print())
            .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'css', 'fonts')))
        ;
    });
};
