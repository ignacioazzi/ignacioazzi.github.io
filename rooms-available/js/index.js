// filter functions
var filterFns = {
};

// store filter for each group
var filters = {};


// init Isotope
var $grid = $('.grid').isotope({
	itemSelector: '.element-item',
	filter: function() {

		var isMatched = true;
		var $this = $(this);

		for ( var prop in filters ) {
			var filter = filters[ prop ];
			// use function if it matches
			filter = filterFns[ filter ] || filter;
			// test each filter
			if ( filter ) {
				isMatched = isMatched && $(this).is( filter );
			}
			// break if not matched
			if ( !isMatched ) {
				break;
			}
		}
		return isMatched;
	}
});



$('.filters').on( 'click', '.button', function() {
	$('html, body').animate({
		scrollTop: 1504}, 200);
	$grid.isotope();
	var $this = $(this);
	// get group key
	var $buttonGroup = $this.parents('.button-group');
	var filterGroup = $buttonGroup.attr('data-filter-group');
	// set filter for group
	filters[ filterGroup ] = $this.attr('data-filter');
	// arrange, and use filter fn

	var el = $(".detail_view");
var position = el.position(); //cache the position
var right = $(window).width() - position.left - el.width();
var bottom = $(window).height() - position.top - el.height();



});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
	});
});


