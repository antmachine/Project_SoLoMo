// "use strict";

$(document).ready(function(){

  // var map;
  // var directionsDisplay;
  // var directionsService = new google.maps.DirectionsService();
  // var stepDisplay;
  // var markerArray = [];
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
	// grabs DB pins for all events
	$.get('/events.json').done(function(data) {
		pins = data;
		$.each(pins, function(index, item){
			addPin(item.latitude, item.longitude, item.description);
		}); //$.each closure
	}); //$.get closure

	var addPin = function(lat, long, description){

		var loc = new google.maps.LatLng(lat, long);

		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM!"
		}); // newMarker closure

	// ================ PLEASE WORK ======================

	  google.maps.event.addListener(newMarker, 'click', function() {
		  var span = $('.antmachine');
		  var dataWindow =  "<li>"+ description +'</li>';
		  span.append(dataWindow);
		}); //event listener marker



	// ================ PLEASE WORK ======================

	var newInfoWindow = new google.maps.InfoWindow({
		content: "<h3>lat: " + lat + ", long: " + long + "</h3>"
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

	//=======================================================================

	};  // INITIALIZE CLOSURE  initialize(currentPosition)    ===============

	//   var marker = new google.maps.Marker({
	//   	position: #
	//   	map: map,
	//   	title: "Boom"
	//   });

	//   google.maps.event.addListener(marker, 'click', function() {
 //  	$.get('/events.json').done(function(data) {
	// 		var description = data.description
	// 	  var span = $('.antmachine');
	// 	  var dataWindow =  "<li>"+ description +'</li>';
	// 	  span.append(dataWindow);
	//   }); //$.get closure

	// }; //event listener marker

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
	
	if(location.pathname === "/pins/new") {
		geoLocate();
	} // if pathname closure

// 



}); //DOCUMENT READY CLOSURE


