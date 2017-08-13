var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	rename  = require( 'gulp-rename' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	cssnano = require( 'gulp-cssnano' );

var config = {
	'dist': './dist/css'
};

gulp.task( 'sass', function() {
	gulp.src( [ 'scss/**/*.scss'] )
	  .pipe( sass( {
	  } ).on( 'error', sass.logError ) )
	  .pipe( sass.sync().on( 'error', sass.logError ) )
	  .pipe( gulp.dest( config.dist ) )
	  .pipe( cssnano( {
			discardComments: { removeAll: true }
		} ) )
	  .pipe( autoprefixer({
		  browsers: ['last 3 versions'],
		  cascade: false
	   }) )
	  .pipe( rename( { suffix: '.min' } ) )
	  .pipe( gulp.dest( config.dist ) );
});


gulp.task('watch', function() {
	gulp.watch( './scss/**/*', [ 'sass' ] );
} );

gulp.task( 'default', ['sass'] );
