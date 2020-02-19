// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("test");
	$('a').click(function(e) {
		console.log("hi");
	});
 $.get('/listOfSpending',amountLeft)
 }

function amountLeft(result){
	console.log(result);
	var sum = 0;

	$('#leftOver').html('$' +sum);
	}

	// $('#colorBtn').click(randomizeColors);
