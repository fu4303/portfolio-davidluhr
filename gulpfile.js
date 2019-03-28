const browserSync = require('browser-sync');
const cp = require('child_process');
const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const image = require('gulp-image');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build',  buildJekyll);

function buildJekyll(done) {
  // browserSync.notify(messages.jekyllBuild);
  return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
    .on('close', done);
};


gulp.task('jekyll-rebuild', gulp.series(buildJekyll, rebuildJekyll));

function rebuildJekyll() {
  browserSync.reload();
}

gulp.task('browser-sync',
  gulp.series(styles, rebuildJekyll, syncBrowser));

function syncBrowser() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
}

gulp.task('styles', styles);

function styles() {
  return gulp.src('assets/css/main.sass')
    .pipe(sass({
      onError: browserSync.notify,
      outputStyle: 'compressed'
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_includes'))
    .pipe(browserSync.reload({stream:true}));
}

gulp.task('scripts', scripts);

function scripts() {
  return gulp
    .src('assets/js/modules/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_includes'));
}

gulp.task('images', images);

function images() {
  return gulp.src('assets/img/source/*')
    .pipe(image())
    .pipe(gulp.dest('assets/img/final'));
}

gulp.task('watch', watch);

function watch() {
  gulp.watch('assets/css/**/*.sass')
    .on('all', gulp.series(styles));
  gulp.watch('assets/js/modules/*.js')
    .on('all', gulp.series(scripts));
  gulp.watch(
    ['*.html', '_layouts/*.html', '_posts/*', '_includes/*'])
    .on('all', gulp.series(rebuildJekyll));
}

gulp.task('default', gulp.series(styles, scripts, syncBrowser, watch));
