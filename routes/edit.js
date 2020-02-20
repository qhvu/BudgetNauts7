var data = require("../data.json");

exports.editBudget = function(request, response) {
  var budget = request.query.budget;
  var savings = request.query.savings;

  

  console.log("budget:" + budget);

  var newEntry = {"budget": budget, "savings": savings};
  
  data.push(newEntry);

response.render('budget', data);
  }

