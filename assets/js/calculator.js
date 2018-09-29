$(document).ready( function () {

	// VARIABLES
	// ----------------------------------------------------------

	var amount, percent, result;
	var calculator = $('.calculator');
	var calculatorProfit = calculator.find('.calculator__funding');
	var calculatorTip = calculator.find('.calculator__tip');
	var calculatorResult = calculator.find('.calculator__result');
	var L2Amount = calculator.find('.tip-amount');


	// INIT Profit/Percentage
	// ----------------------------------------------------------

	// Calculates percentage of L2 charger and write them to the DOM
	$(window).on('DOMContentLoaded', function () {
			L2Amount.text( calculatorTip.val() + '%' );


			amount = calculatorProfit.val() * 1;
			percent = calculatorTip.val() * 1;
			result = amount + amount * ( percent / 100 );
			calculatorResult.text( result.toFixed(2) + '$' );
	});

	// Calculates percentage of L3 charger and write them to the DOM
	$(window).on('DOMContentLoaded', function () {
		L3Amount.text( calculatorTip.val() + '%' );


		amount = calculatorProfit.val() * 1;
		percent = calculatorTip.val() * 1;
		result = amount + amount * ( percent / 100 );
		calculatorResult.text( result.toFixed(2) + '$' );
});


	// RANGE FUNCTION
	// ----------------------------------------------------------

	calculatorTip.on('change', function () {

			if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
					alert('Enter bill amount, please!')
			} else {
					amount = calculatorBill.val() * 1;
			}

			tipAmount.text( calculatorTip.val() + '%' );
			percent = calculatorTip.val() * 1;
			result = amount + amount * ( percent / 100 );
			calculatorResult.text( '$' + result.toFixed(2));
	});

});



// TweenLite.selector = $$;

// var progress = 0;

// var speed  = 1500;
// var radius = 10;
// var height = 4;
// var width  = 500;
// var inner  = width - radius * 2;

// var value = $("#progress-value");
// var stage = $("#stage", { width: 540, height: 100 });

// var slider = {
//   group: $("#slider-group", { x: 20, y: 40 }),
//   inner: $("#slider-inner", { attr: { width: width, height: radius * 2 }})
// };

// var track = {
//   group: $("#track-group", { y: radius - height / 2 }),
//   inner: $("#track-inner", { attr: { x: radius, y: 0, width: inner, height }}),
//   fill:  $("#track-fill",  { attr: { x: radius, y: 0, width: inner, height }})
// };

// var handle = {
//   group: $("#handle-group", { y: radius }),
//   inner: $("#handle-inner", { xPercent: 50, attr: { r: radius }})
// };

// var offset = getOffset(track.group);
// var bounds = offset.box;

// var dragger = new Draggable(handle.group, {
//   type: "x",
//   cursor: "default",
//   bounds: { minX: 0, maxX: width - radius * 2 },
//   trigger: slider.group,
//   onPress: onPress,
//   onDrag: updateSlider,
//   onThrowUpdate: updateSlider,
//   throwProps: true,
//   overshootTolerance: 0
// });

// updateSlider();

// window.addEventListener("resize", resize);

// function onPress() {
    
//   var x  = this.pointerX - offset.left;
//   var tx = handle.inner._gsTransform.x;
//   var dx = tx - x + this.x + radius;  
//   var dt = Math.abs(dx) / speed;
      
//   TweenLite.set(handle.group, { x });
//   TweenLite.to(track.fill, dt, { scaleX: x / bounds.width }); 
//   TweenLite.fromTo(handle.inner, dt, { x: dx }, { x: 0 }); 
    
//   this.update();
//   updateSlider(null, true);
// }

// function updateSlider(event, animating) {
  
//   progress = handle.group._gsTransform.x / bounds.width;
//   progress = progress < 0 ? 0 : (progress > 1 ? 1 : progress);
//   value.textContent = Math.round(progress * 100);
    
//   if (!animating) TweenLite.set(track.fill, { scaleX: progress }); 
// }

// function resize() {
//   offset = getOffset(track.group);
//   bounds = offset.box;
// }

// function getOffset(element) {
  
//   var body = document.body;
//   var doc  = document.documentElement;

//   var box = element.getBoundingClientRect();
  
//   var scrollTop  = window.pageYOffset || doc.scrollTop  || body.scrollTop  || 0;
//   var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft || 0;
  
//   var clientTop  = doc.clientTop  || body.clientTop  || 0;
//   var clientLeft = doc.clientLeft || body.clientLeft || 0;
  
//   var top  = box.top  + scrollTop  - clientTop;
//   var left = box.left + scrollLeft - clientLeft;
  
//   return { top, left, box };
// }

// function $(target, config, context) {    
//   var node = (context || document).querySelector(target);
//   if (node && config) TweenLite.set(node, config);
//   return node;
// }

// function $$(target, config, context) {    
//   var nodes = (context || document).querySelectorAll(target);
//   if (nodes.length && config) TweenLite.set(nodes, config);
//   return Array.prototype.slice.call(nodes, 0); 
// }




