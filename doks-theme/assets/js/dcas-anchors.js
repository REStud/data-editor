/**
 * DCAS panel anchors (assets/js/dcas-anchors.js)
 *
 * 1. Injects a header-style hash anchor into each <details class="dcas-panel"
 *    id="…"> summary. Mirrors the heading anchor injection in scripts.js, but
 *    for panels — the :header selector used there does not match <summary>.
 * 2. Opens the targeted panel when the page is reached via its hash (e.g.
 *    …/citation-guide/#data-with-DOI), so deep links do not land on a
 *    collapsed panel. Also handles a hash pointing at an element nested
 *    inside a panel.
 *
 * Kept as a small standalone file so the pre-minified scripts.min.js does
 * not need to be touched.
 */
!function ( e ) {
	"use strict";

	// 1. Header-style hash anchor in every panel summary.
	e( "details.dcas-panel[id] > summary" ).each( function () {
		var t = e( this ),
			id = t.parent().attr( "id" );

		t.html( '<a href="#' + id + '" class="title-anchor-link">#</a> ' + t.html() );
	} );

	// 2. Open the panel a hash points to (or whose id is nested inside it).
	var openFromHash = function ( doScroll ) {
		var hash = window.location.hash;

		if ( ! hash || hash.length < 2 ) {
			return;
		}

		// getElementById avoids selector-escaping issues with unusual ids.
		var target = document.getElementById( decodeURIComponent( hash.slice( 1 ) ) );

		if ( ! target ) {
			return;
		}

		var panel = e( target ).closest( "details.dcas-panel" );

		if ( ! panel.length ) {
			return;
		}

		panel.prop( "open", true );

		if ( doScroll ) {
			target.scrollIntoView();
		}
	};

	// Open immediately so the panel renders expanded; re-scroll once the
	// layout has settled and whenever the hash changes (e.g. an anchor click).
	openFromHash( false );
	e( window ).on( "load", function () { openFromHash( true ); } );
	e( window ).on( "hashchange", function () { openFromHash( true ); } );
}( jQuery );
