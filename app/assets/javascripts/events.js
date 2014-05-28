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
			addPin(item.latitude, item.longitude, item.description, item.date, item.time, item.address, item.images, item.search_radius);
		}); //$.each closure
	}); //$.get closure

	// Have to pass all EVENT parameters in addPin function, later rendered in HTML
	var addPin = function(lat, long, description, date, time, address, images, search_radius){

		var loc = new google.maps.LatLng(lat, long);

		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM!"
		}); // newMarker closure

	// ================================================================

		// event listener: displays event information in html by map
	  google.maps.event.addListener(newMarker, 'click', function() {
		  var htmlChange = $('.antmachine');
		  var dataWindow =  "<li> Address: " + address + "</li> <br>" + "<li> Description: " + description + "</li> <br>" + "<li> Date: " + date + "</li> <br>" + "<li> Time: " + time + "</li> <br>";
		  // $(htmlChange).reset();
		  htmlChange.html(dataWindow);
		}); //event listener marker

	// ================================================================

	var newInfoWindow = new google.maps.InfoWindow({
		content: "<h3>Address: " + address + "</h3>"
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


