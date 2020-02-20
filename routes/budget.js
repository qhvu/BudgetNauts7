// Get all of our friend data
var data = require('../editBudget.json');

exports.view = function(request, response){
	console.log(data);
	response.render('budget', data);
};
