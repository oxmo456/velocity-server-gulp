var gulp = require('gulp');
var velocityServer = require('./');


gulp.task('server', function () {
    console.log(velocityServer);
    velocityServer.run(
        __dirname + '/server/static/',
        __dirname + '/server/templates/',
        __dirname + '/server/fixtures/'
    );


});
