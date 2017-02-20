var imageContainerMargin = 20;  // Margin + padding

// This watches for the scrollable container
var scrollPosition = 0;
$('div#contents').scroll(function() {
	scrollPosition = $(this).scrollTop();
});

function initMap() {

	// This creates the Leaflet map with a generic start point, because code at bottom automatically fits bounds to all markers
	var map = L.map('map', {
		center: [0, 0],
		zoom: 4,
		
	});
	map.keyboard.disable()


	// This displays a base layer map (other options available)
	var lightAll = new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
	}).addTo(map);

	// This customizes link to view source code; add your own GitHub repository
	map.attributionControl
		.setPrefix('View <a href="http://github.com/jackdougherty/leaflet-storymap" target="_blank">code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

	// This loads the GeoJSON map data file from a local folder
	$.getJSON('map.geojson', function(data) {
		var geojson = L.geoJson(data, {
			onEachFeature: function (feature, layer) {
				(function(layer, properties) {
					// This creates numerical icons to match the ID numbers
					// OR remove the next 6 lines for default blue Leaflet markers
					var numericMarker = L.ExtraMarkers.icon({
						icon: 'fa-number',
						number: feature.properties['id'],
						markerColor: 'blue'
					});
					layer.setIcon(numericMarker);

					// This creates the contents of each chapter from the GeoJSON data. Unwanted items can be removed, and new ones can be added
					var chapter = $('<p></p>', {
						text: feature.properties['id'] + ". " + feature.properties['chapter'],
						class: 'chapter-header'
					});

					var image = $('<img>', {
						src: feature.properties['image'],
						class: 'thumb'

					});

					//          var source = $('<a>', {
					//            text: fefature.properties['source-credit'],
					//            href: feature.properties['source-link'],
					//            target: "_blank",
					//            class: 'source'
					//          });


					var review = $('<p></p>', {
						text: feature.properties['review'] + " " + parseFloat(((Math.random() * 10) )).toFixed(1),
						class: 'review'
					});

					var container = $('<div></div>', {
						id: 'container' + feature.properties['id'],
						class: 'image-container'
					});

					var text = $('<div></div', {
						class: 'text'
					});

					var prices = $('<div></div', {
						class: 'prices'
					});

					var random = Math.floor((Math.random() * 100.1) + 500);

					var old_price = $('<p class="old_price">$ '  + parseFloat(0.9 * random).toFixed(2) + '</p>');

					var price = $('<p class="price">$ '  + random + '</p>');


					var number_review = $('<p class="number_review">Según <b>	7901</b> comentarios de huéspedes reales</p>',
																{class: 'number_review'});

					var button = $('<a target="_blank" href="http://www.booking.com/hotel/fr/generator-paris.es-ar.html" class="btn">Mostrar precios</a>', {
						class: 'btn'
					});

					var random_people = Math.floor((Math.random() * 30))					
					var people_looking  = $('<p class="people_looking">Hay ' + random_people  + ' personas mirando este hotel en este momento</p>', {
						class: 'people_looking'
					});

					var rooms = $('<p class="rooms"> <img id="" width="26px" height="auto" src="img/double.png" alt="" /> Habitación Doble <img id="" width="37px" height="auto" src="img/beds.png" alt="" />  2 camas individuales</p>');

					prices.append(old_price).append(price).append(button);
					text.append(chapter).append(review).append(number_review);

					container.append(image).append(text).append(people_looking).append(rooms).append(prices);
					$('#contents').append(container);

					var i;
					var areaTop = 40;
					var areaBottom = 0;

					// Calculating total height of blocks above active
					for (i = 1; i < feature.properties['id']; i++) {
						areaTop += $('div#container' + i).height() + imageContainerMargin;
					}

					areaBottom = areaTop + $('div#container' + feature.properties['id']).height();

					var img_container = $('div#container' + i);	


					//					$('div#contents').scroll(function() {
					//						if ($(this).scrollTop() * 1.  >= areaTop) {
					//							$('.image-container').removeClass("inFocus").addClass("outFocus");
					//							$('div#container' + feature.properties['id']).addClass("inFocus").removeClass("outFocus");
					//							var id = feature.properties['id'];
					//							$(".leaflet-marker-icon").removeClass("extra-marker-circle-orange");
					//							$("i[number=" + id + "]").parent().addClass("extra-marker-circle-orange");
					//							map.flyTo([feature.geometry.coordinates[1], feature.geometry.coordinates[0] ], feature.properties['zoom']);
					//						}
					//					});



					layer.on('click', function() {
						$("#tab_search").removeClass("active");
						$("#tab_contents").addClass("active");

						$("#search").addClass("invisible").removeClass("visible");
						$("#contents").addClass("visible").removeClass("invisible");
						var scroll_amount = container.offset().top - 100;
						$('.image-container').removeClass("inFocus").addClass("outFocus");
						container.addClass("inFocus").removeClass("outFocus");
						var container_id = feature.properties['id'];
						var scroll = (container.height() * (container_id - 1)) ;
						container.trigger( "click" );

		

						$('#contents').animate({
							scrollTop: scroll 
						}, 500);
					});

				})(layer, feature.properties);
			}
		});

		function higlight_both(el){
			$('.image-container').removeClass("inFocus").addClass("outFocus");
			$(el).addClass("inFocus").removeClass("outFocus");
			var id =  $(el).prop("id").slice(9);
			$(".leaflet-marker-icon").removeClass("extra-marker-circle-orange");
			$("i[number=" + id + "]").parent().addClass("extra-marker-circle-orange");
			var scroll = (260 * (parseInt(id) - 2 ))
			$('#contents').animate({
				scrollTop: scroll 
			}, 500);
		}

		$(".image-container").click(function(){
			higlight_both(this);
		});

		//		$(".image-container").mouseenter(function(){
		//			higlight_both(this);
		//		});

		$(document).keydown(function(e) {
			switch(e.which) {
				case 40: case 39: 
					var current_highlight = $('.image-container.inFocus');
					var current_highlight_id = current_highlight.prop("id").slice(9);
					var next_highlight_id = parseInt(current_highlight_id) + 1;
					var next_highlight = current_highlight.next();
					var container_height = $('.image-container.inFocus').height();
					var scroll = (container_height * (current_highlight_id - 1)) ;
					console.log(scroll);

					//Hightlight container
					if (current_highlight_id < 14){ 
					$('.inFocus').removeClass("inFocus").addClass("outFocus");
					next_highlight.addClass("inFocus").removeClass("outFocus");
					//Scroll to container

					$('#contents').animate({
						scrollTop: scroll 
					}, 500);

					//Hightlight Pin
					$(".leaflet-marker-icon").removeClass("extra-marker-circle-orange");
					$("i[number=" + next_highlight_id + "]").parent().addClass("extra-marker-circle-orange");
					}
					break;

				case 38: case 37: 
					var current_highlight = $('.image-container.inFocus');
					var current_highlight_id = current_highlight.prop("id").slice(9);
					var prev_highlight_id = parseInt(current_highlight_id) - 1;
					var prev_highlight = current_highlight.prev();
					var container_height = $('.image-container.inFocus').height();
					var scroll = (container_height * (current_highlight_id - 2)) ;
					console.log(scroll);

					if (current_highlight_id > 1){
					//Hightlight container

					$('.inFocus').removeClass("inFocus").addClass("outFocus");
					prev_highlight.addClass("inFocus").removeClass("outFocus");
					//Scroll to container

					$('#contents').animate({
						scrollTop: scroll 
					}, 300);

					//Hightlight Pin
					$(".leaflet-marker-icon").removeClass("extra-marker-circle-orange");
					$("i[number=" + prev_highlight_id + "]").parent().addClass("extra-marker-circle-orange");
					}// down
					break;

				default: return; // exit this handler for other keys
			}
			e.preventDefault(); // prevent the default action (scroll / move caret)
		});


		$('#contents').append("<div class='space-at-the-bottom'><a href='#space-at-the-top'><i class='fa fa-chevron-up'></i></br><small>Top</small></a></div>");
		map.fitBounds(geojson.getBounds());
		geojson.addTo(map);
	});
};


initMap();

