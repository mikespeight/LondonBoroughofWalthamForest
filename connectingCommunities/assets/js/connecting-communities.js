/**
 * Created by Mike on 30/05/2019.
 */

"use strict";

/*console.log('loading');*/

function sticky_footer(){

	//console.log('sticky footer');

	var $wrapper = $('body'),
		$footer = $('.page-footer'),
		$stickyFooter = $('#sticky__footer'),
		footerHeight = $footer.height(),
		stickyFooterHeight = $stickyFooter.height(),
		pageHeight,
		windowHeight,
		scrollHeight,
		triggerHeight;

	// element fixed on scroll
	$(document).on("scroll", $wrapper, function(e) {

		pageHeight = $(document).height();
		windowHeight = $(window).height();
		scrollHeight = $(document).scrollTop();
		triggerHeight = pageHeight - footerHeight + stickyFooterHeight;

		if(triggerHeight >= windowHeight + scrollHeight) {
			$stickyFooter.addClass('fixed');
		}
		else {
			$stickyFooter.removeClass('fixed');
		}
	});
}

$(document).ready(function(){

	sticky_footer();

	//Javascript for bootstrap dropdown menus to work on hover
	$(function($) {
		$('.navbar .dropdown').hover(function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

		}, function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideUp();

		});

		$('.navbar .dropdown > a').click(function(){
			location.href = this.href;
		});
	});

	// show HTML 5 video controls on hover

	var screenSize, $htmlVideo;

	var getScreenSize = function() {
		return window.innerWidth;
	};

	screenSize = getScreenSize();
	//console.log(screenSize);

	$htmlVideo = $('.html5-video');
	//console.log($htmlVideo);

	$htmlVideo.each(function removeControls() {
		if(screenSize > 992){
			this.removeAttribute("controls");
		}
	});

	$htmlVideo.hover(function toggleControls() {
		if (this.hasAttribute("controls")) {
			this.removeAttribute("controls")
		} else {
			this.setAttribute("controls", "controls")
		}
	});




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
