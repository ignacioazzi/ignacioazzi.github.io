	$(document).ready(function(){
		$('.slider').slick({
			dots: true,
		});
	});


$(".slider").click(function() {
		$("nav").addClass("nav-hidden").removeClass("nav-visible");
    $('html, body').animate({
        scrollTop: $(".slider").offset().top * 1
    }, 600);
});


$(window).bind('mousewheel', function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
             $("nav").addClass("nav-visible").removeClass("nav-hidden");
           }
           else {
            $("nav").addClass("nav-hidden").removeClass("nav-visible");
          }
        });
