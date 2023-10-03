/**
 * Created by Mike on 31/07/2018.
 */

"use strict";

$(document).ready(function($) {

	var alterClass = function() {
		var ww = document.body.clientWidth;
		if (ww < 974) {
			$('.page-header').removeClass('show-mobile');
			//console.log('remove ', ww);
		} else if (ww >= 975) {
			$('.page-header').addClass('show-mobile');
			//console.log('add ', ww);
		}
	};
	$(window).resize(function(){
		alterClass();
	});
	//Fire it when the page first loads:
	alterClass();

	/*var $button = $('.show-mobile > .top-nav > .navbar > .navbar-toggler'),
		$mobMenu = $('.show-mobile > .top-nav > .navbar > .collapse');

	$button.on('click', $mobMenu.toggle());*/
});