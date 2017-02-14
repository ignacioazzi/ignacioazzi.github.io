var navbar = '  <nav id=\"site-navigation\" class=\"main-navigation nav-visible\" role=\"navigation\"><div class=\"container nav-bar\">\r\n    <div class=\"row\">\r\n      <div class=\"module left\">\r\n        <a href=\"index.html\">\r\n          <p class=\"site-title\"> <b>Ignacio Azzi<\/b>\r\n            UX Designer\r\n          <\/p>\r\n        <\/a>\r\n      <\/div>\r\n      <div class=\"module right\">\r\n        <span style=\"position:relatve\" class=\"dropdown\" href=\"#\">Projects\r\n          <ul class=\"dropdown_items\">\r\n           <li><a href=\"teamtask.html\">TeamTask<\/a><\/li>\r\n       <li><a href=\"educabilia.html\">Educabilia<\/a><\/li>\r\n    <li><a href=\"ara.html\">Project Ara<\/a><\/li>\r\n                <li><a href=\"lan.html\">LAN<\/a><\/li>\r\n  <li><a href=\"presidio_old.html\">Presidio National Park<\/a><\/li>\r\n            <li><a href=\"autosave.html\">AutoSave<\/a><\/li>\r\n                               <\/ul>\r\n        <\/span>\r\n\r\n        <a target=\"_blank\" class=\"\" href=\"Ignacio_Azzi-Resume.pdf\">Resume<\/a>\r\n        <a href=\"#contact\">Contact me<\/a>\r\n      <\/div>\r\n    <\/div>\r\n  <\/div>\r\n<\/nav>';


$("body").prepend(navbar);

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



