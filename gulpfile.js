'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import tsify from 'tsify';
import source from 'vinyl-source-stream';
import watchify from 'watchify';


gulp.task('default', () => {
    console.log(`Hello~!`);
});

gulp.task('browserify', () => {
    "use strict";

    var b = browserify({
        //entries: './entry.js',
        debug: true
    });

    return b
        .add('./index.ts')
        .plugin('tsify', { noImplicitAny: true})
        .bundle()
        //.pipe(source)
        //.pipe(buffer())
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js'));

});


//gulp.task
