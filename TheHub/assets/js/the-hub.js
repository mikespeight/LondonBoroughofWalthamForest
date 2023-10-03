/**
 * Created by Mike on 10/12/2018.
 */

"use strict";

/*console.log('loading');*/

function hoverMenus(){

	var timeOutOpen,
		timeOutOut,
		$menus = $('.navbar > ul li'),
		$openMenus = $('.navbar > ul li.dropdown');

	function clearMenus(){
		if($openMenus.length > 0) {
			$openMenus.each(function(){
				$(this).removeClass('open');
			});
		}
	}

	function openMenu(delay, $object){
		clearMenus();
		if(timeOutOut !== null){
			clearTimeout(timeOutOut);
		}
		timeOutOpen = setTimeout(function(){
			$object.addClass('open');
		}, delay);
	}

	function closeMenu(delay, $object){
		if(timeOutOpen !== null){
			clearTimeout(timeOutOpen);
		}
		timeOutOut = setTimeout(function(){
			$object.removeClass('open');
		}, delay);
	}

	var $thisDropdown = $('.navbar > ul li.dropdown');

	$thisDropdown.hover(
		function(){
			openMenu(300, $(this)); //Jquery ver delay not working
			//$(this).stop(true).delay(500).addClass('open');
		},
		function(){
			closeMenu(300, $(this))
			//$(this).stop(true).delay(500).removeClass('open'); //Jquery ver delay not working
		}
	);
}


$(document).ready(function() {

	// main menu hover delay
	hoverMenus();

	// toggle menu
	var $body = $("body"),
		$logo = $('#logo'),
		$wrapper = $('.page-wrapper'),
		$mainNav = $('#main-nav'),
		$searchForm = $('.page-search-form'),
		$searchTrigger = $('#search-trigger'),
		$searchBox = $('#search-box'),
		$searchWrapper = $('#search-wrapper');

	// Toggle mobile menu and hide search icon when open
	$body.on('click', '#menu-trigger', function () {

		$searchTrigger.toggleClass('off');
		$mainNav.toggleClass('open');

		if($mainNav.hasClass('open')) {
			$searchWrapper.removeClass('on');
			$searchTrigger.addClass('off');
			$logo.removeClass('off');
		}

	});

	// Toggle search box
	$body.on('click', '#search-trigger', function () {
		$searchTrigger.toggleClass('off');
		$searchWrapper.toggleClass('on');

		if($searchTrigger.hasClass('off')) {
			$logo.addClass('off');
		}
	});


});