var data = require("../data.json");

exports.editBudget = function(request, response) {
  var budget = request.query.budget;
  var save = request.query.save;

  console.log("Budget:" + budget);

  response.render('budget', data);

  var newEntry = {"budget": budget, "save": save};
  data.editBudget.push(newEntry);
  }
