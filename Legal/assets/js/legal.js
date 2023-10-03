/**
 * Created by Mike on 05/02/2018.
 */

"use strict";


$(document).ready(function(){

	var Ssearch = $("#search"),
		$searchBtn = $('#search-btn'),
		$searchBox = Ssearch.find('.search-box'),
		$searchWrapper = $('header .menu-container .search-wrapper');

	// Bootstrap modal events
	// event fires after bootstrap modal is shown
	Ssearch.on('shown.bs.modal', function (e) {
		e.preventDefault();
		$searchBtn.toggle();// hide search button
		$searchWrapper.toggle(); // hide background to search button

		$searchBox.focus();// set focus to the search box

	});

	// event fires just before bootstrap modal is hidden
	Ssearch.on('hide.bs.modal', function () {

		var $searchBtn = $('#search-btn');

		$searchBtn.toggle();// show search button
		$searchWrapper.toggle(); // show background to search button

	});

	// Mobile menu hide search button

	var $MobileMenu = $('.navbar-collapse.collapse');


	$MobileMenu.on('show.bs.collapse', function () {
		$searchBtn.toggle();// show search button
	});

	$MobileMenu.on('hide.bs.collapse', function () {
		$searchBtn.toggle();// hide search button
	});

	// nav fixed on scroll
	var wrapper,
		header,
		scrollHeight,
		homePage = $('.page-node-type-homepage'),
		homePageHeader = $(".page-node-type-homepage header"),
		subpage = $(".subpage"),
		subpageHeader = $(".subpage header");

	if(homePage.length > 0){
		wrapper = homePage;
		header = homePageHeader;
		scrollHeight = 850;
	} else {
		wrapper = subpage;
		header = subpageHeader;
		scrollHeight = 270;
	}

	$(document).on("scroll", wrapper, function(e) {

		var scrollTop = $(window).scrollTop() ;

		if (scrollTop > 230) {
			header.css({height:0, visibility: "hidden"});
		} else {
			header.css({height: "61px", visibility: "visible"});
		}

		if (scrollTop > scrollHeight) {
			wrapper.addClass("fix-nav");
			header.css({height: "61px", visibility: "visible"});
		} else {
			wrapper.removeClass("fix-nav");
		}

	});

});
