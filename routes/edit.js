var data = require("../editBudget.json");

exports.editBudget = function(request, response) {
  var budget = request.query.budget;
  var save = request.query.save;

  console.log("Budget:" + budget);

  response.render('budget', data);

  var newEntry = {"budget": budget, "save": save};

  data.budgetEditor.push(newEntry);

}
