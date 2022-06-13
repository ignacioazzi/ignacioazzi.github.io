var navbar =`
<nav id="site-navigation" class="main-navigation nav-visible" role="navigation"><div class="container nav-bar">
<div class="row">
<div class="module left active_menu_item">
<a href="index.html">
<p class="site-title">
Ignacio Azzi · 
<b>Product Designer</b>
</p>
</a>
</div>
<div class="module right">
<div class="responsive_menu">
<span class="ham_icon visible_xs hidden-sm hidden-md hidden-lg">Menu</span>
<span class="menu_content hidden-xs">
<span style="position:relatve" class="dropdown fwb" href="#">Projects
<ul class="dropdown_items">
<li><a href="rc.html">Room Customizer</a></li>
<li><a href="pulse.html">Pulse Calendar</a></li>
<li><a href="teamtask.html">TeamTask</a></li>
<li><a href="educabilia.html">Educabilia</a></li>
<li><a href="ara.html">Project Ara</a></li>
<li><a href="autosave.html">AutoSave</a></li>
</ul>
</span>

<a class="fwb" href="mailto:ignacioazzi@gmail.com">Contact me</a>
</span>
</div>
<div>
</div>
</div>
</div></div></nav>`



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
