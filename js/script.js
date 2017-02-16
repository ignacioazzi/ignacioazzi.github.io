var navbar = '<nav id=\"site-navigation\" class=\"main-navigation nav-visible\" role=\"navigation\"><div class=\"container nav-bar\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"module left active_menu_item\">\r\n\t\t\t\t<a href=\"index.html\">\r\n\t\t\t\t\t<p class=\"site-title\"> <b>Ignacio Azzi<\/b>\r\n\t\t\t\t\t\tUX Designer\r\n\t\t\t\t\t<\/p>\r\n\t\t\t\t<\/a>\r\n\t\t\t<\/div>\r\n\t\t\t<div class=\"module right\">\r\n\t\t\t<div class=\"responsive_menu\">\r\n\t\t\t\t<span class=\"ham_icon visible_xs hidden-sm hidden-md hidden-lg\">Menu<\/span>\r\n\t\t\t\t<span class=\"menu_content hidden-xs\">\r\n\t\t\t\t\t\t\t<span style=\"position:relatve\" class=\"dropdown\" href=\"#\">Projects\r\n\t\t\t\t\t<ul class=\"dropdown_items\">\r\n\t\t\t\t\t\t<li><a href=\"teamtask.html\">TeamTask<\/a><\/li>\r\n\t\t\t\t\t\t<li><a href=\"educabilia.html\">Educabilia<\/a><\/li>\r\n\t\t\t\t\t\t<li><a href=\"ara.html\">Project Ara<\/a><\/li>\r\n\t\t\t\t\t\t<li><a href=\"lan.html\">LAN<\/a><\/li>\r\n\t\t\t\t\t\t<li><a href=\"presidio_old.html\">Presidio National Park<\/a><\/li>\r\n\t\t\t\t\t\t<li><a href=\"autosave.html\">AutoSave<\/a><\/li>\r\n\t\t\t\t\t<\/ul>\r\n\t\t\t\t<\/span>\r\n\r\n\t\t\t\t<a target=\"_blank\" class=\"\" href=\"Ignacio_Azzi-Resume.pdf\">Resume<\/a>\r\n\t\t\t\t<a href=\"mailto:ignacioazzi@gmail.com\">Contact me<\/a>\r\n\t\t\t\t<\/span>\r\n\t\t\t<\/div>\r\n\t\t\t<div>\r\n\t\t<\/div>\r\n\t\t<\/div>\r\n\t<\/nav>';

$("body").prepend(navbar);

$(".ham_icon").click(function(){
	$(".menu_content").toggleClass("menu_mobile")							 
});

var name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
$("a[href$='" + name + "']").parent().addClass('active_menu_item');

$(window).bind('mousewheel', function(event) {
	if (event.originalEvent.wheelDelta >= 0) {
		$("nav").addClass("nav-visible").removeClass("nav-hidden");
	}
	else {
		$("nav").addClass("nav-hidden").removeClass("nav-visible");
	}
});



