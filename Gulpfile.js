'use strict'

const path = require('path')
const plumber = require('gulp-plumber')
const through = require('through2')
const chalk = require('chalk')
const newer = require('gulp-newer')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const gulp = require('gulp')

const src = 'src/**/*.js'
const dest = 'lib'

gulp.task('default', ['build'])

gulp.task('build', () => {
  gulp.src(src)
  .pipe(plumber({
    errorHandler(err) {
      gutil.log(err.stack)
    }
  }))
  .pipe(newer(dest))
  .pipe(through.obj((file, enc, callback) => {
    const relativeFilePath = path.relative(__dirname, file.path)
    gutil.log(`Compiling '${chalk.cyan(relativeFilePath)}'...`)
    callback(null, file)
  }))
  .pipe(babel())
  .pipe(gulp.dest(dest))
})
