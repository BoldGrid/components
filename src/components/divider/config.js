export default {
	baseName: 'bg-divider',
	styles: {
		'clouds': {
			svg: require( './svg/clouds.svg' )
		},
		'curve-async': {
			svg: require( './svg/curve-async.svg' )
		},
		'circle': {
			svg: require( './svg/circle.svg' )
		},
		'fan-op': {
			svg: require( './svg/fan-op.svg' )
		},
		'mountains': {
			svg: require( './svg/mountains.svg' )
		},
		'brush': {
			svg: require( './svg/brush.svg' )
		},
		'tilt-op': {
			svg: require( './svg/tilt-op.svg' )
		},
		'tilt': {
			svg: require( './svg/tilt.svg' )
		},
		'triangle-async': {
			svg: require( './svg/triangle-async.svg' )
		},
		'waves-smooth': {
			svg: require( './svg/waves-smooth.svg' )
		},
		'pyramid': {
			svg: require( './svg/pyramid.svg' )
		},
		'big-triangle': {
			svg: require( './svg/big-triangle.svg' )
		},
		'drops': {
			svg: require( './svg/drops.svg' )
		},
		'book': {
			svg: require( './svg/book.svg' )
		},
		'split': {
			svg: require( './svg/split.svg' )
		},
		'waves': {
			svg: require( './svg/waves.svg' )
		},
		'arrow': {
			svg: require( './svg/arrow.svg' )
		},
		'half-circle': {
			svg: require( './svg/half-circle.svg' )
		}
	},
	getComponent: function( name, options ) {
		let classes = [],
			config = this.styles[ name ];

		if ( options.position ) {
			classes.push( `${this.baseName}-${options.position}` );
		}

		if ( options.orientation ) {
			classes.push( `${this.baseName}-${options.orientation}` );
		}

		classes = classes.join( ' ' );

		return `
			<div class="${this.baseName} ${classes} ${this.baseName}-${name}">
				${config.svg}
			</div>
		`;
	}
};
