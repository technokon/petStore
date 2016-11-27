/**
 * Created by iakoupov on 2016-11-25.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-html-replace');
var uglify = require('gulp-uglify');


gulp.task('minify', function () {
    gulp.src([
        'app/js/app.js',
        'app/js/animations/animations.js',
        'app/js/services/services.js',
        'app/js/controllers/controllers.js',
        'app/js/directives/directives.js',
        'app/js/services/petService.js',
        'app/js/services/session.js',
        'app/js/controllers/main.js',
        'app/js/controllers/login.js',
        'app/js/controllers/petList.js',
        'app/js/controllers/petDetail.js',
        'app/js/controllers/petForm.js',
        'app/js/controllers/petEdit.js',
        'app/js/directives/fileInput.js'
    ])
        .pipe(concat('petStore.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-resource/angular-resource.min.js',
        'node_modules/angular-animate/angular-animate.min.js'])
        .pipe(gulp.dest('dist/js/lib'));
});



gulp.task('package', function () {
    gulp.src([
        'app/index.html'])
        .pipe(replace({
            js: [
                'js/lib/angular.min.js',
                'js/lib/jquery.min.js',
                'js/lib/angular-route.min.js',
                'js/lib/angular-resource.min.js',
                'js/lib/angular-animate.min.js',
                'js/petStore.min.js'],
            css: ['css/bootstrap.min.css','css/app.css', 'css/animations.css']
        }))
        .pipe(gulp.dest('dist'));
    
    gulp.src(['app/templates/**/*.html'])
        .pipe(gulp.dest('dist/templates'));
    
    gulp.src(['app/css/**/*.css','node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('dist/css'));
});
