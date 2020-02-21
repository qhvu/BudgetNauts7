var data = require('../budgetTotal.json');

exports.budgetInfo = function(req,res){
  console.log(data);
  res.json(data);
}
