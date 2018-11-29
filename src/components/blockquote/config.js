export default {
	baseName: 'bg-blockquote',
	styles: {
		'plain': {
			svg: ''
		},
		'border': {
			svg: ''
		},
		'large-quotes': {
			svg: require( './svg/large-quotes.svg' )
		}
	},

	getComponent: function( name, options ) {
		let classes = [],
			config = this.styles[ name ],
			cite = '';

		if ( 'reverse' === options.direction ) {
			classes.push( `${options.direction}` );
		}

		classes = classes.join( ' ' );

		if ( true === options.cite ) {
			cite = '<footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>';
		}
		return `
			<blockquote class="${this.baseName} ${name} ${classes}">
				${config.svg}
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				${cite}
			</blockquote>
		`;
	}
};
