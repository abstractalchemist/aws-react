const gulp = require('gulp')
const mocha = require('gulp-mocha')
const browserify = require('browserify')
const babel = require('babelify')
const fs = require('fs')

gulp.task('test', function() {
   return gulp.src(['src/**/*js','test/**/*js'])
      .pipe(mocha({compilers:'js:@babel/register', require:'test/setup.js', exit:true}))
})

gulp.task('js', ['test'], function() {
   return browserify('src/index.js')
      .transform(babel)
      .bundle()
      .pipe(fs.createWriteStream('dist/bundle.js'))
})

gulp.task('cp', function() {
   return gulp.src('public/**/*')
      .pipe(gulp.dest("dist"))
})

gulp.task('default', function() {
   gulp.watch(['src/**/*js', 'test/**/*js'], ['js'])
})
