// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#editbutton').click(function(e){
		e.preventDefault();
		$.get("/edit")
	});


	// $('#colorBtn').click(randomizeColors);
}

function findSavings(result){
		console.log(result);
	var budget = document.getElementById("budget");
	var percentage = document.getElementById("savings");[]
};
