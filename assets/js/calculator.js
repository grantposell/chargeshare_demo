$(document).ready(function () {

	// VARIABLES
	// ----------------------------------------------------------

	var calculator = $('.calculator');
	var calculatorInvest = calculator.find('.calculator__funding');
	var l2Percentage = document.getElementsByClassName('progress-bar')[0];
	var l3Percentage = document.getElementsByClassName('progress-bar')[1];
	var l2Charger = 6500;
	var l3Charger = 70000;
	
	// INIT Profit/Percentage
	// ----------------------------------------------------------

	// Calculates percentage of L2 and L3 chargers and write them to the DOM
	$("#calculate").on('click', function () {

		var amount = calculatorInvest.val();
		var result = amount / l2Charger;
		var percent = Math.round (result * 100);
		// console.log(percent);
		
		var amount2 = calculatorInvest.val();
		var result2 = amount2 / l3Charger;
		var percent2 = Math.round (result2 * 100);
		// console.log(percent2);

		//break even calculation

		//5yr return calculation

		l2Percentage.style.width= (percent + "%");
		l3Percentage.style.width= (percent2 + "%");

		l2Percentage.innerHTML = (percent + "%");
		l3Percentage.innerHTML = (percent2 + "%");
		
		("l2_text").show();

	});

	// $("#clear").on('click', function (){

	// })
});