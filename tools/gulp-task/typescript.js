/**
 * Created by gillbeits on 18.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('ts', function () {
        var tsResult = gulp.src([$._path.join($._SOURCE_DIR, 'typescript/**/*.ts')])
            .pipe($.plumber())
            .pipe($.print())
            .pipe($.sourcemaps.init({ loadMaps: true }))
            .pipe($.typescript({
                sortOutput: true,
                sourceMap: true,
                target:  "es5"
            }));

        return tsResult.js
            .pipe($.concat('scripts.js'))
            .pipe($.sourcemaps.write('../maps', { sourceRoot: '/ts' }))
            .pipe(gulp.dest($._path.join($._BUILD_DIR, $.get_env(), 'js', 'app')))
        ;
    });
};
