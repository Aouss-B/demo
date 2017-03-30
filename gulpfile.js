var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function () {
  console.log("hooray idfijsaef ijdsaf");
});

gulp.task('html', function () {
  console.log("i dont know anything");
});

gulp.task('styles', function () {
  console.log("i dont know this CSS");
});

gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });
});
