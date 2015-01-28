var exec = require('child_process').exec;
var through = require('through2');
var gulpUtil = require('gulp-util');
var merge = require('merge');
var PluginError = gulpUtil.PluginError;
var vnu = 'java -jar vnu.jar ';

module.exports = new function () {


    this.run = function (staticDirectory, templatesDirectory, fixturesDirectory) {

        console.log(staticDirectory);
        console.log(templatesDirectory);
        console.log(fixturesDirectory);

        exec('java -jar velocity-server.jar ' + staticDirectory + ' ' + templatesDirectory + ' ' + fixturesDirectory, function (err, stdout, stderr) {

            stdout.on('data', function (data) {
                console.log('> ' + data);
            });


        });


    };


};