var navbar = `
<nav id="site-navigation" class="main-navigation nav-visible" role="navigation"><div class="container nav-bar">
<div class="row">
<div class="module left">
<a href="index.html">
<p class="site-title">
Ignacio Azzi · 
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
<li><a href="room.html">Room Customizer</a></li>
<li><a href="pulse.html">Pulse Calendar</a></li>
<li><a href="horizontal.html">Horizontal Comparison</a></li>
</ul>
</span>
<a class="fwb" href="mailto:ignacioazzi@gmail.com">Contact me</a>
 <a class="fwb" href="Ignacio_Azzi-Resume.pdf">Curriculum</a>
</span>
</div>
<div>
</div>
</div>
</div></div></nav>`;

document.body.insertAdjacentHTML("afterbegin", navbar);
var hamIcon = document.querySelector(".ham_icon");
var menuContent = document.querySelector(".menu_content");
var nav = document.querySelector("nav");
var homeLink = document.querySelector("a[href$='index.html']");

if (hamIcon && menuContent) {
    hamIcon.addEventListener("click", function () {
        menuContent.classList.toggle("menu_mobile");
    });
}

var name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

if (name === "" || name.includes("index")) {
    if (homeLink) {
        homeLink.parentElement.classList.add("active_menu_item");
    }
} else {
    var activeLinks = document.querySelectorAll(`a[href$='${name}']`);
    activeLinks.forEach(function (a) {
        a.parentElement.classList.add("active_menu_item");
    });
}

if (nav) {
    window.addEventListener("wheel", function (event) {
        if (event.deltaY <= 0) {
            nav.classList.add("nav-visible");
            nav.classList.remove("nav-hidden");
        } else {
            nav.classList.add("nav-hidden");
            nav.classList.remove("nav-visible");
        }
    });
}