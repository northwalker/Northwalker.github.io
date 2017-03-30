(function () {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var autoprefixer = require('gulp-autoprefixer');
  var concat = require('gulp-concat');
  var csso = require('gulp-csso');
  var eslint = require('gulp-eslint');
  var git = require('gulp-git');
  var htmlmin = require('gulp-htmlmin');
  var htmlreplace = require('gulp-html-replace');
  var replace = require('gulp-replace');
  var sass = require('gulp-sass');
  var size = require('gulp-size');
  var uglify = require('gulp-uglify');

  var del = require('del');
  var runSequence = require('run-sequence');
  var browserSync = require('browser-sync');
  var reload = browserSync.reload;
  var pkg = require('./package.json');
  var version = pkg.version;
  var gitHash = '';

  gulp.task('clean', function (callback) {
    del(['.tmp', 'dist'], {dot: true})
      .then(function (paths) {
        console.log('Deleted files and folders:\n', paths);
        callback();
      });
  });

  gulp.task('git:hash', function (callback) {
    git.revParse({args: '--short HEAD'}, function (err, hash) {
      // if (err) return;
      if (hash) {
        gitHash = hash;
        console.log('current git hash: ' + hash);
      }
      callback();
    });
  });

  gulp.task('versionize', function () {
    gulp.src('./dist/index.html')
      .pipe(replace('<meta name="version" content="">', '<meta name="version" content="' + version + '">'))
      .pipe(replace('<meta name="git-hash" content="">', '<meta name="git-hash" content="' + gitHash + '">'))
      .pipe(gulp.dest('./dist'))
      .pipe(size({title: 'versionize', showFiles: true, pretty: true}));
  });

  gulp.task('lint', function () {
    return gulp.src([
      'gulpfile.js',
      'src/js/main.js',
      '!bower_components/**',
      '!node_modules/**'
    ])
      .pipe(eslint())
      .pipe(eslint.format());
  });

  gulp.task('eslint', ['lint'], function () {
  });


  gulp.task('json', function () {
    gulp.src('src/json/**/*.json')
      .pipe(gulp.dest('dist/json'))
      .pipe(size({title: 'json', showFiles: true, pretty: true}));
  });

  gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
      .pipe(size({title: 'fonts', showFiles: true, pretty: true}));
  });

  gulp.task('misc', function () {
    return gulp.src('./favicon.png')
      .pipe(gulp.dest('dist'))
      .pipe(size({title: 'misc', showFiles: true, pretty: true}));
  });

  gulp.task('copy', function () {
    return gulp.src([
      './robot.txt',
      '!' + './favicon*',
      '!' + './*.html'
    ], {
      dot: true
    })
      .pipe(gulp.dest('dist'))
      .pipe(size({title: 'copy', showFiles: true, pretty: true}));
  });

  gulp.task('images', function () {
    return gulp.src('src/img/**/*')
    // .pipe($.cache(imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
      .pipe(gulp.dest('dist/img'))
      .pipe(size({title: 'images', showFiles: false, pretty: true}));
  });

  gulp.task('styles', function () {
    var AUTOPREFIXER_BROWSERS = [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ];
    return gulp.src(['./src/css/**/*.css'])
      .pipe(autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS
      }))
      .pipe(concat('main.min.css'))
      .pipe(csso())
      .pipe(gulp.dest('dist/css'))
      .pipe(size({title: 'styles', showFiles: false, pretty: true}));
  });

  gulp.task('scripts', function () {
    return gulp.src([
      './src/js/jquery.min.js',     // concat in sequence, jquery.js must before particles.js
      './src/js/particles.min.js',  // concat in sequence, particles.js must before main.js
      './src/js/main.js',
      './src/js/**/*.js'            // other script files
    ])
      .pipe(replace('./src/', './'))
      .pipe(concat('main.min.js'))
      .pipe(uglify({
        wrap: true,
        preserveComments: false   // 'all', 'license', 'function'
      }))
      .pipe(gulp.dest('dist/js'))
      .pipe(size({title: 'scripts', showFiles: false, pretty: true}));
  });

  gulp.task('html', function () {
    return gulp.src('./*.html')
      .pipe(replace('./src/', './'))
      .pipe(htmlreplace({
        'css': './css/main.min.css',
        'js': './js/main.min.js'
      }))
      .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        // removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,  // Gogle Analytics code
        minifyCSS: true
      }))
      .pipe(gulp.dest('dist'))
      .pipe(size({title: 'html', showFiles: true, pretty: true}));
  });

  gulp.task('serve', ['clean'], function () {

    browserSync({
      notify: false,
      // Customize the Browsersync console logging prefix
      logPrefix: 'Northwalker.github.io',
      server: ['./'],
      port: 3000
    });
    // gulp.watch(['src/**/*.html'], reload);
    // gulp.watch(['src/css/**/*.{scss,css}'], ['styles', reload]);
    // gulp.watch(['src/js/**/*.js'], ['lint', 'scripts', reload]);
    // gulp.watch(['src/img/**/*'], reload);
    // gulp.watch(['src/json/**/*'], reload);

  });

  gulp.task('serve:dist', ['build'], function () {
    browserSync.init({
      server: './dist'
    });
  });

  gulp.task('build', ['clean'], function (callback) {
    runSequence(
      'lint',
      'git:hash',
      ['styles', 'scripts'],
      'html',
      'versionize',
      ['images', 'json', 'fonts', 'misc', 'copy'], function () {
        console.log('Build dist complete.');
        callback();
      });
  });

  gulp.task('default', ['build']);

})();
