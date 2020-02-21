// Get all of our friend data
var data = require('../budgetTotal.json');

exports.view = function(request, response){
	console.log(data);
	response.render('budget', data);
};
