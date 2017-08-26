import './main.scss';

export class Application {

	init() {
		this.setupTabs();
	}

	setupTabs() {
		$( 'ul.tabs' ).on( 'click', 'li', ( e ) => {
			let $this = $( e.target ),
				tabId = $this.attr( 'data-tab' );

			$this.siblings().removeClass( 'current' );
			$( '.tab-content' ).removeClass( 'current' );

			$this.addClass( 'current' );
			$( '#' + tabId ).addClass( 'current' );
		} );
	}
}
