/**
 * Created by Mike on 29/10/2017.
 */

"use strict";


$(document).ready(function (){

		//console.log('running');

	var init = function() {

		console.log('init');

		//$( ".hours-slider" ).slider({
			//orientation: "vertical",
			//value: 10,
			//min: 9,
			//max: 15,
			//step: 0.5,
			//range: true,
			//values: [9,10]
		//});


		$(function(){
			//console.log($('.hours-range-slider').length);

			var update = function ($slider, min, max) {
				var $thisDay = $slider.parents('.day-wrapper'),
					$thisHours = $thisDay.find('.hours'),
					totalHours = max - min,
					$thisCost = $thisDay.find('.price'),
					totalCost = totalHours * $('#rate').val(),
					startTime = min;

				$thisHours.val(totalHours);
				$thisCost.val(totalCost);

			};

			var validate = function(){

			};

			$('.hours-range-slider').each(function(){
				$( this).find('.hours-slider').empty().slider({
					orientation: "vertical",
					animate: true,
					range: true,
					value: 10,
					min: 9,
					max: 16,
					step: 0.5, //this gets a live reading of the value and prints it on the page
					values: [9,10],
					slide: function( event, ui ) {
						//console.log($(this));

						//console.log(ui.values[1] - ui.values[0]);

						update($(this), ui.values[0], ui.values[1]);

						//$( this ).find('.hours').html( ui.value );
					},
					change: function(event, ui) {
					}
				});
			});
		});


	}();

});
