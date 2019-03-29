const browsersync = require('browser-sync');
const cp = require('child_process');
const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const image = require('gulp-image');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

function buildJekyll(done) {
  browsersync.notify(messages.jekyllBuild);
  return cp.spawn(jekyll, ['build'], {stdio: 'inherit'});
};

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function styles() {
  return gulp.src('assets/css/main.sass')
    .pipe(sass({
      onError: browsersync.notify,
      outputStyle: 'compressed'
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_includes'))
    .pipe(browsersync.stream());
}

function scripts() {
  return gulp
    .src('assets/js/modules/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_includes'))
    .pipe(browsersync.stream());
}

function images() {
  return gulp.src('assets/img/source/*')
    .pipe(image())
    .pipe(gulp.dest('assets/img/final'));
}

function watchFiles() {
  gulp.watch('assets/css/**/*.sass', styles);
  gulp.watch('assets/js/modules/*.js', scripts);
  gulp.watch(
    [
      '*.html',
      '_layouts/*.html',
      '_posts/*',
      '_includes/*'
    ],
    rebuild);
}

const build = gulp.series(styles, scripts, buildJekyll, browserSync, watchFiles);
const rebuild = gulp.series(buildJekyll, browserSyncReload);

exports.images = images;
exports.default = build;
