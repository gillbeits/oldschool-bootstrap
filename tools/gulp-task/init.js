/**
 * Created by gillbeits on 16.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('init', function () {
        var yargs = require('yargs');
        return gulp.src($._path.join(__dirname + '/../../template/**/*'))
            .pipe(gulp.dest($._path.join(process.cwd(), yargs.argv.dir || '')))
        ;
    });
};