var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

gulp.task('html', function () {
    gulp.src('./src/templates/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
});

gulp.task('sass', function () {
    gulp.src('./src/style/main.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(cssmin())
        .pipe(gulp.dest('build/style'));
});

gulp.task('js', function () {
    gulp.src(require('./dependencies.json').js)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('fonts', function () {
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('build/fonts/'));
});

gulp.task('img', function () {
    gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 8
        }))
        .pipe(gulp.dest('build/images'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.html', ['html']);
    gulp.watch('src/js/**/*.js', ['js']);

});

gulp.task('build', ['sass', 'html', 'fonts', 'js', 'img']);
