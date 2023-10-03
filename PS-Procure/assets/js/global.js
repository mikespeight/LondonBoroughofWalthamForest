/**
 * Created by Mike on 14/11/2017.
 */
"use strict";

var scrollToAnchor = function(anchor){

	$('html, body').animate({
		scrollTop: $(anchor).offset().top
	}, 1000);

};