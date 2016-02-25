var
  taskPath = __dirname + '/tools/gulp-task/',
  yargs    = require('yargs'),
  gulp     = require('gulp'),
  plugins  = require('gulp-load-plugins')()
;

yargs
  .boolean([
    'start-server',
    'open-in-browser'
  ])
  .string([
    'port',
    'build-dir',
    'live-port'
  ])
  .alias({
    e: 'env',
    S: 'start-server',
    o: 'open-in-browser',
    p: 'port',
    b: 'build-dir',
    s: 'source-dir',
    l: 'live-port'
  })
  .describe({
    e: 'Build environment',
    S: 'Start Express server',
    o: 'Open index page in your default browser is express server start',
    p: 'Express listen port',
    b: 'Build directory path',
    s: 'Source directory path',
    l: 'Live Reload port'
  })
  .choices('e', ['dev', 'prod'])
  .default({
    startServer: true,
    openInBrowser: false,
    env: 'dev',
    port: '8080',
    livePort: '4002',
    buildDir: process.cwd() + '/build',
    sourceDir: process.cwd() + '/src'
  })
  .help('help')
  .wrap(yargs.terminalWidth())
;

plugins._path            = require('path');

plugins._ENV             = yargs.argv.env;
plugins._PORT            = yargs.argv.port;
plugins._LIVERELOAD_PORT = yargs.argv.livePort;
plugins._BUILD_DIR       = yargs.argv.buildDir;
plugins._SOURCE_DIR      = yargs.argv.sourceDir;
plugins._OPEN            = yargs.argv.openInBrowser;
plugins._START_SERVER    = yargs.argv.startServer;
plugins._APP_BASE        = plugins._path.join(plugins._BUILD_DIR, plugins._ENV);
plugins._TASKS           = yargs.argv._.length ? yargs.argv._ : ["watch"];

// jshint ignore: start
var fs = require('fs');
require.extensions[".json"] = function (m) {
  m.exports = JSON.parse(fs.readFileSync(m.filename));
};

plugins.$$is_dev = function is_dev() {
  return !(plugins._ENV == 'prod');
};

plugins.get_env = function get_env() {
  return plugins._ENV;
};

require('fs').readdirSync(taskPath).forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('default', ['build'], function () {});

module.exports = { gulp: gulp, $: plugins };