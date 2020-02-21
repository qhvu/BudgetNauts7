// Get all of our friend data
var data = require('../budget.json');

exports.view = function(request, response){
	console.log(data);
	response.render('budget', {
				"budgetTotal": "0.00",
	      "savings":"50"
			});
	}
