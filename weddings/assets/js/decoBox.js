/**
 * Created by Mike on 12/01/2018.
 */

"use strict";

var decoBox = function(){

	//console.log('deco box running');

	var DecoBoxHTMLstr = "<span class='deco-left'></span>";
	DecoBoxHTMLstr += "<span class='deco-top-left'></span>";
	DecoBoxHTMLstr += "<span class='deco-top-left'></span>";
	DecoBoxHTMLstr += "<span class='deco-top'></span>";
	DecoBoxHTMLstr += "<span class='deco-top-right'></span>";
	DecoBoxHTMLstr += "<span class='deco-right'></span>";
	DecoBoxHTMLstr += "<span class='deco-bottom-right'></span>";
	DecoBoxHTMLstr += "<span class='deco-bottom'></span>";
	DecoBoxHTMLstr += "<span class='deco-bottom-left'></span>";

	var BtnCutOutHTMLstr = "<span class='co-left'></span>";
	BtnCutOutHTMLstr += "<span class='co-top'></span>";
	BtnCutOutHTMLstr += "<span class='co-right'></span>";
	BtnCutOutHTMLstr += "<span class='co-bottom'></span>";

	var plainCutOutHTMLstr = "<span class='top-left'></span>";
	plainCutOutHTMLstr += "<span class='top-right'></span>";
	plainCutOutHTMLstr += "<span class='bottom-left'></span>";
	plainCutOutHTMLstr += "<span class='bottom-right'></span>";


	var $decoBox = $('.deco-box'),
		$cutOutBtn = $('.cut-out-btn'),
		boxCount = 0;

	//console.log('there are ' + $decoBox.length + ' deco boxes');
	//console.log('there are ' + $cutOutBtn.length + ' cut out buttons');

	$decoBox.each(function(){

		var $thisDecoBox = $(this);
		boxCount += 1;

		//console.log(boxCount);

		$thisDecoBox.append(DecoBoxHTMLstr);

		if($thisDecoBox.hasClass('gold')) {
			$( $thisDecoBox).find('span').css('border-color', '#d29d5e');
		}
		else if ($thisDecoBox.hasClass('lt-gold')){
			$( $thisDecoBox).find('span').css('border-color', '#f5d18a');
		}

		if($thisDecoBox.hasClass('btn-box') && $thisDecoBox.hasClass('cut-out')) {
			//console.log('has both');
			$thisDecoBox.find('a').append(BtnCutOutHTMLstr);
		}

		if($thisDecoBox.hasClass('img-cut-out')) {
			$thisDecoBox.append(BtnCutOutHTMLstr);
		}

		/*if($thisDecoBox.hasClass('cut-out-btn')) {
			$thisDecoBox.append(plainCutOutHTMLstr);
		}*/

		else {
			//console.log('does not have both')
		}

	});

	$cutOutBtn.each(function(){

		//console.log('appending spans to button')

		var $thisCutOutBtn = $(this);

		$thisCutOutBtn.append(plainCutOutHTMLstr);
	});



};