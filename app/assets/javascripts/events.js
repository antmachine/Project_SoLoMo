// "use strict";

$(document).ready(function(){

  var geocoder;
  var infowindow = new google.maps.InfoWindow();
  var marker;
  var map;

	//================================================================
	function initialize(currentPosition) {

	var currCoords = { lat: currentPosition.coords.latitude, long: currentPosition.coords.longitude };

	var mapOptions = {

		center: new google.maps.LatLng(currCoords.lat, currCoords.long),  // TODO change to current location
		// center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		zoom: 13
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var geocoder = new google.maps.Geocoder();
	var pins = [];

	//=======================================================================
	// grabs DB pins for all events.  Have to pass all EVENT parameters in addPin function
	$.get('/events.json').done(function(data) {
		pins = data;
		$.each(pins, function(index, item){
			addPin(item);
		}); //$.each closure
	}); //$.get closure

	var setupCarousel = function(item, $el){
		console.log(item.image_urls);
		$("#my_carousel").unslick();
		$("#my_carousel").empty();

		$.each(item.image_urls, function(index, image) {
		
			var imageHtml = ' <div class="car_page"><div style="text-align: center"><img class="hero" ></div><div class="header"> </div><div> </div></div>'
			var $imageDiv = $(imageHtml);
		 	$imageDiv.find("img").attr("src", image);
			$("#my_carousel").append($imageDiv);
		
		});

		$("#my_carousel").slick();


	};
	// Have to pass all EVENT parameters in addPin function, later rendered in HTML
	var addPin = function(item){

		var loc = new google.maps.LatLng(item.latitude, item.longitude);

		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			// title: ""
		}); // newMarker closure

	// ================================================================

		// event listener: displays event information in html by map
	  google.maps.event.addListener(newMarker, 'click', function() {
		  var $htmlChange = $('.antmachine');
		  var dataWindow =  "<h5><li> Address: " + item.address + "</li> <br>" + "<li> Description: " + item.description + "</li> <br>" + "<li> Date: " + item.date + "</li> <br>" + "<li> Time: " + item.time + "</li> <br></h5>";
		  // var $turkey1 = setupCarousel(item, $htmlChange);
		  // $(htmlChange).reset();
		  $htmlChange.html(dataWindow);

		  setupCarousel(item, $htmlChange);
		}); //event listener marker

	// ================================================================

	var newInfoWindow = new google.maps.InfoWindow({
		content: "<h3>Address: " + item.address + "</h3>"
	}); //newInfoWindow closure

		addInfoWindowListener(newMarker, newInfoWindow);
	}; //addPin closure

	var placeMaker = function(loc){
		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM2!"
		}); 
	};  // placeMaker closure
	//=======================================================================
	
	// shows one infowindow at a time
	var lastInfoWindow;
	var addInfoWindowListener = function(marker, newInfoWindow){

		google.maps.event.addListener(marker, 'click', function() {
			if(!!lastInfoWindow){
				lastInfoWindow.close();
			}
			if(lastInfoWindow === newInfoWindow){
				lastInfoWindow = null;
			}
			else {
				newInfoWindow.open(map,this);
				lastInfoWindow = newInfoWindow;
			}
		});  //google maps event listener closure
	}; //addInfoWindowListener closure

	google.maps.event.addListener(marker, 'click', function(event) {
		var lat = event.latLng.lat();
		var lng = event.latLng.lng();

	}); // google.maps.event Listener closure

	};  // INITIALIZE CLOSURE  initialize(currentPosition)    ===============

	//=======================================================================

	var initializeWithDefault = function(){
		var currentPosition = {coords: {latitude: "37.7586", longitude: "-122.4902"}}; 
		initialize(currentPosition);
	}; //initializeWithDefault closure

	var geoLocate = function(){
		if(!!navigator.geolocation){
			navigator.geolocation.getCurrentPosition(initialize, initializeWithDefault)
		} else {
			initializeWithDefault();
		}
	}; //geoLocate closure
	
	if(location.pathname === "/" || location.pathname === "/events/") {
		geoLocate();
	} // if pathname closure

// 



}); //DOCUMENT READY CLOSURE


