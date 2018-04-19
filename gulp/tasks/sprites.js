var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function() {
  return del(['./app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
  return gulp.src('./app/assets/images/sprites/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/assets/images/sprites/css'));
});

gulp.task('copySpriteCSS', ['createPngCopy'], function(){
  return gulp.src('./app/assets/images/sprites/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'createPngCopy', 'copySpriteCSS']);
