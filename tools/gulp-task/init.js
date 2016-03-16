/**
 * Created by gillbeits on 16.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('init', function () {
        var yargs = require('yargs');
        return gulp.src('template/**/*')
            .pipe(gulp.dest($._path.join(process.cwd(), yargs.argv.dir || '')))
        ;
    });
};