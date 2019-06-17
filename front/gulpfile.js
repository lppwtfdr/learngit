"use strict"
//import gulp from 'gulp';
//import ghPages from 'gulp-gh-pages';
//var $ = require('gulp-load-plugins')(); // 加载所有的插件
var gulp = require("gulp");
var rename = require("gulp-rename");
var less = require('gulp-less');
// var babel = require('gulp-babel');
var path = require('path');
// var concat = require('./modules/gulp-concat');
var through = require('through2');
// var sourcemaps = require('gulp-sourcemaps');
// var sass = require("gulp-sass");

gulp.task('less', function() {
    return gulp.src(['./src/**/*.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(rename(function(path) {
            console.log('path:' + path.dirname);
            // path.dirname = path.dirname.replace('\\tmpl\\views', '\\tmpl');        
            path.extname = ".css"
        }))
        .pipe(gulp.dest('public/css'));
});
gulp.task('autoless', () => {
    var watcher = gulp.watch(['./src/**/*.less'], function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.src(event.path)
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(through.obj(function(f, e, cb) {
                f.base = "./src";
                this.push(f);
                cb();
            }))
            .pipe(gulp.dest('public/css'))
    });
    watcher.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});



gulp.task("build", ["less"]);
//
gulp.task("default", ['autoless']);
