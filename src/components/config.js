export default {
	hr: require( './hr/config.js' ),
	divider: require( './divider/config.js' ),

	/**
	 * Get The markup for a component.
	 *
	 * @param  {string} type     Name of component
	 * @param  {string} name     ID of component.
	 * @param  {Options} options Options to render.
	 * @return {HTML}            HTMl for component.
	 */
	getComponent: function( type, name, options ) {
		options = options || {};
		return this[type].default.getComponent( name, options );
	}
};
