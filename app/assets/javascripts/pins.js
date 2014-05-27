"use strict";

$(document).ready(function(){

  var map;
  // var directionsDisplay;
  // var directionsService = new google.maps.DirectionsService();
  // var stepDisplay;
  var markerArray = [];
  var geocoder;
  var infowindow = new google.maps.InfoWindow();
  var marker;
  var pins = [];

	//================================================================
	function initialize() {

	var mapOptions = {
		center: new google.maps.LatLng(37.0, 54.0),  // TODO change to current location
		zoom: 3
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	// console.log(map);

	// retrieves DB location points, calls addPin
	$.get('/pins.json').done(function(data) {
		pins = data;
		$.each(pins, function(index, item){
			addPin(item.latitude, item.longitude, item.name);
		});
	});

	//adds pin based on addInfoWindowListener
	var addPin = function(lat, long, name){
		
		var loc = new google.maps.LatLng(lat, long);

		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM!"
		});

		var newInfoWindow = new google.maps.InfoWindow({
			content: "<h3>Added By: " + name + "</h3>"
		});
		addInfoWindowListener(newMarker, newInfoWindow);
	}; // addPin closure

	var placeMaker = function(loc){
		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM2!"
		});
	}; //placeMaker closure

	var lastInfoWindow;

	//click event 
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
		});
	}; //addInfoWindowListener closure

	//click event, posts point to DB
	google.maps.event.addListener(map, 'click', function(event) {
		var lat = event.latLng.lat();
		var lng = event.latLng.lng();
	
		$.ajax({
			url: "/pins",
			method: "post",
			data: {
				"pin": {
					"latitude": lat,
					"longitude": lng,
					}
				}, //data closure;
				dataType: "json",
				success: function(data) {
					addPin(data.latitude, data.longitude, data.name);
				}, //success closure
				error: function(){
					alert("Server is at lunch!");
				} //error closure
			}); //ajax post request closure
		}); //addListener closure
	
	} //initialize function closure

	google.maps.event.addDomListener(window, 'load', initialize);
}); // DOCUMENT READY CLOSURE