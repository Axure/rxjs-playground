'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import watchify from 'watchify';
import babelify from 'babelify';


gulp.task('default', () => {
    console.log(`Hello~!`);
});

gulp.task('browserify', () => {
    "use strict";

    var b = browserify({
        entries: './src/main.js',
        debug: true
    });

    return b
        .transform(babelify)
        .bundle()
        //.pipe(source)
        //.pipe(buffer())
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js'));

});


//gulp.task
