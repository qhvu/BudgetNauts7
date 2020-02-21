var data = require("../data.json");

exports.editBudget = function(request, response) {
  var budget = request.query.budget;
  var savings = request.query.savings;

  //edit value to most recent (budget)
  data.budget[0] = budget;


  //edit value to most recent (purchase)
  data.savings[0] = savings;


  response.render('budget', data);

  }
