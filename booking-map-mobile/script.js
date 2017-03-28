
var imageContainerMargin = 0;  // Margin + padding
// This watches for the scrollable container
var scrollPosition = 0;
$('div#contents').scroll(function() {
	scrollPosition = $(this).scrollTop();
});

function initMap() {

	// This creates the Leaflet map with a generic start point, because code at bottom automatically fits bounds to all markers
	var map = L.map('map', {
		center: [0, 0]
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
						class: 'hotel_name'
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

					var price = $('<p class="price">1 night from $ '  + random + '</p>');


					var number_review = $('<p class="number_review">According <b>	7901</b> comments from real visitors</p>',
						{class: 'number_review'});

					var button = $('<a target="_blank" href="http://www.booking.com/hotel/fr/generator-paris.es-ar.html" class="btn">Reserve a room</a>', {
						class: 'btn'
					});

					var random_people = Math.floor((Math.random() * 30))					
					var people_looking  = $('<p class="people_looking">' + random_people  + ' people looking at this place right now</p>', {
						class: 'people_looking'
					});

					var rooms = $('<p class="rooms"> <img id="" width="26px" height="auto" src="img/double.png" alt="" /> Habitación Doble <img id="" width="37px" height="auto" src="img/beds.png" alt="" />  2 camas individuales</p>');

					prices.append(price).append(button);
					text.append(chapter).append(review).append(rooms);

					container.append(image).append(text).append(prices);
					$('#contents').append(container);


					layer.on('click', function() {
						$('.image-container').removeClass("inFocus").addClass("outFocus");
						container.addClass("inFocus").removeClass("outFocus");
						var container_id = feature.properties['id'];
						var scroll = ($( document ).width() * (container_id - 1)) ;
						var old_id = id;
						id = container_id;
						$("i").parent().removeClass("extra-marker-circle-orange");
						$("i[number=" + id + "]").parent().addClass("extra-marker-circle-orange");
						var diff = Math.abs (old_id - id);
						$('#contents').animate({
							scrollLeft: scroll,
						}, 200 );
					});

				})(layer, feature.properties);
			}
		});



		map.fitBounds(geojson.getBounds());
		geojson.addTo(map);
	});
	map.on("load", function(){


	});

};


initMap();




