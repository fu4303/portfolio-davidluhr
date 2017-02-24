var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  cp = require('child_process'),
  image = require('gulp-image'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
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
    .pipe(gulp.dest('_includes'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function() {
  return gulp
    .src('assets/js/modules/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_includes'));
});

gulp.task('image', function() {
  return gulp.src('assets/img/source/*')
    .pipe(image())
    .pipe(gulp.dest('assets/img/final'));
});

gulp.task('watch', function () {
  gulp.watch('assets/css/**/*.sass', ['sass']);
  gulp.watch('assets/js/modules/*.js', ['scripts']);
  gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['sass', 'scripts', 'browser-sync', 'watch']);
