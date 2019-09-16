var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ejs = require("gulp-ejs");
var rename = require('gulp-rename');

// 監視
gulp.task( "default", function () {
    gulp.watch( "src/sass/*.scss", gulp.series( "sass" ) ); // sassディレクトリ以下の.scssファイルの更新を監視
    gulp.watch("src/**/*.ejs", gulp.series("ejs")); // ejsディレクトリ以下の.ejsファイルの更新を監視
});

// EJS
gulp.task( "ejs", function () {
    return gulp.src(["src/**/*.ejs", '!' + "src/**/_*.ejs"])
        .pipe(ejs())
        .pipe(rename({extname: ".html"}))
        .pipe(gulp.dest("dist/"));
});

// Sass
gulp.task("sass", function () {
    return gulp.src("src/sass/*.scss")
        .pipe(sass().on( 'error', sass.logError))
        .pipe(autoprefixer({
            browsers: [ 'last 2 version', 'ie >= 9', 'iOS >= 7', 'Android >= 4.2' ],
        }))
        .pipe(gulp.dest("dist/css/"));
});