/**
 * Created by Mike on 09/01/2018.
 */

"use strict";


$(document).ready(function(){

	decoBox();


	var Ssearch = $("#search"),
		$searchBtn = $('#search-btn'),
		$searchBox = Ssearch.find('.search-box');

	// Bootstrap modal events
	// event fires after bootstrap modal is shown
	Ssearch.on('shown.bs.modal', function () {

		$searchBtn.toggle();// hide search button

		$searchBox.focus();// set focus to the search box

	});

	// event fires just before bootstrap modal is hidden
	Ssearch.on('hide.bs.modal', function () {

		var $searchBtn = $('#search-btn');

		$searchBtn.toggle();// show search button

	});

	// View map click event

	$('.view-map').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
			$wrapper = $this.parents('.map-wrapper'),
			currCenter = map.getCenter();

		$wrapper.toggleClass('full-map');


		google.maps.event.trigger(map, 'resize');
		map.setCenter(currCenter);
	});

	//venue-two
	$('.venue-two').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();

		var LatLng = new google.maps.LatLng(51.579028, -0.010845);

		//google.maps.event.trigger(map, 'resize');
		map.panTo(LatLng);
		//map.setCenter(LatLng);
	});



});





