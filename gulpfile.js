var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var pug = require('gulp-pug');

var pugIncludesInput = '';
var pugIncludesOutput = '';
var pugLayoutsInput = '';
var pugLayoutsOutput = '';

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('assets/css/main.sass')
    .pipe(sass({
      onError: browserSync.notify,
      outputStyle: 'compressed'
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('pug', function () {
  return gulp.src('_pugfiles/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('_includes'));
});

gulp.task('watch', function () {
  gulp.watch('assets/css/**/*.sass', ['sass']);
  gulp.watch('_pugfiles/*.pug', ['pug']);
  gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
