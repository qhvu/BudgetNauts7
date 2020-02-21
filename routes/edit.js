var data = require("../budgetTotal.json");

exports.editBudget = function(request, response) {
  var budgetTotal = request.query.budgetTotal;
  var percent = request.query.percent;

  console.log("Budget:" + budgetTotal);

  response.render('budget', data);

  var newEntry = {"budget": budgetTotal, "save": percent};
  data.budgetTotal.push(newEntry);
  }
