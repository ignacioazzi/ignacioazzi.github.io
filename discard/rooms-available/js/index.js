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
		scrollTop: 1504}, 800);
	var elems = $grid.isotope('getFilteredItemElements')
	var elems_shown = (elems.length);
	if (elems.length == 1){
		$(".rooms_word").text('room');
	} else{
		$(".rooms_word").text('rooms')	
	}
	//$(".results").fadeIn();
	//$(".results_amount").text(elems_shown)
});


var filters = [];
function toggleArrayItem(a, v) {
	var i = a.indexOf(v);
	if (i === -1)
		a.push(v);
	else
		a.splice(i,1);
}

var $btns = $('.button').click(function() {
	var filter_value = this.id;
	$(this).toggleClass('is-checked');
	
	toggleArrayItem(filters,"." + filter_value);

	if($(".is-checked").length === 0){
		console.log("vacio");
		filters_s = filters.join("");
		$(".element-item").fadeIn().addClass("visible");
	}
	else {
		filters_s = filters.join("");
		$(".element-item").not(filters_s).fadeOut().removeClass("visible");;
		$(filters_s).addClass("visible");
	}
	console.log(filters_s);
	$grid.isotope('updateSortData').isotope();
	count_filters();


});

function count_filters(){
	$(".button").each(function(){
		var id = this.id;
		var amount_filter = $('.visible.' + id).length;
		$(".amount", this).text(amount_filter);
		console.log();
		if (amount_filter) {
			$(this).removeClass("non_results")
		} else {
			$(this).addClass("non_results");
			$(".amount", this).text("-")
		}
	})};

	count_filters()



