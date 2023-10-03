/**
 * Created by Mike on 09/04/2019.
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

});
