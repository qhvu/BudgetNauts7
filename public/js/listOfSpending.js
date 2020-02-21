// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('a').click(function(e) {
    console.log("hi");
	});
	$('tbody').on('click', 'input[type="button"]', function(e){
	   $(this).closest('tr').remove()
	})
}

function remove(){
	console.log("does this work?");
}
