import './main.scss';

export class Application {

	init() {
		this.setupTabs();
		this.clickHash();
	}

	clickHash() {
		let hash = window.location.hash.substr( 1 );
		$( '[data-tab="' + hash + '"] a' ).click();
	}

	setupTabs() {
		$( 'ul.bg-tabs' ).on( 'click', 'a', ( e ) => {
			let $this = $( e.target ).closest( 'li' ),
				tabId = $this.attr( 'data-tab' );

			$this.siblings().removeClass( 'current' );
			$( '.bg-tabs-content' ).removeClass( 'current' );

			$this.addClass( 'current' );
			$( '.' + tabId ).addClass( 'current' );
		} );
	}
}
