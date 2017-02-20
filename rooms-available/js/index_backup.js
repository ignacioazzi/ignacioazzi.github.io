// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});

// filter with selects and checkboxes
var $checkboxes = $('.perks input');

$checkboxes.change( function() {
	// map input values to an array
	var inclusives = [];
	// inclusive filters from checkboxes
	$checkboxes.each( function( i, elem ) {
		// if checkbox, use value if checked
		if ( elem.checked ) {
			inclusives.push( elem.value );
		}
	});

	// combine inclusive filters
	var filterValue = inclusives.length ? inclusives.join(', ') : '*';

	$output.text( filterValue );
	$grid.isotope({ filter: filterValue })
});