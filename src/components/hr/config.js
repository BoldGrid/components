module.exports = {
	styles: [
		'bg-hr bg-hr-16',
		'bg-hr bg-hr-15',
		'bg-hr bg-hr-14',
		'bg-hr bg-hr-1',
		'bg-hr bg-hr-19',
		'bg-hr bg-hr-2',
		'bg-hr bg-hr-20',
		'bg-hr bg-hr-18',
		'bg-hr bg-hr-3',
		'bg-hr bg-hr-17',
		'bg-hr bg-hr-7',
		'bg-hr bg-hr-4',
		'bg-hr bg-hr-5',
		'bg-hr bg-hr-6',
		'bg-hr bg-hr-8',
		'bg-hr bg-hr-9',
		'bg-hr bg-hr-10',
		'bg-hr bg-hr-11',
		'bg-hr bg-hr-13'
	],
	getComponent: function( name ) {
		return `
			<div class="${name}"></div>
		`;
	}
};
